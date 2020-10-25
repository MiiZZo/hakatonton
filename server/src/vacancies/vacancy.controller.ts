import { Response, Router } from "express";
import { getRepository } from "typeorm";
import Fuse from "fuse.js";
import { auth } from "../auth/auth.middleware";
import { role } from "../auth/role.middleware";
import { Vacancy } from "./vacancy.entity";

export const router = Router();

router.get("/", async (req, res) => {
    const rep = getRepository(Vacancy);

    const page = req.query.page as string;
    const search = decodeURIComponent(req.query.search as string);

    let vacancies: any = (await rep.find({ relations: ["employer"] })).slice();

    vacancies = vacancies.map((vacancy: any) => {
      const { password, ...employer } = vacancy.employer;
      return (
        { ...vacancy, employer }      )
    });

    if (search) {
      const fuse = new Fuse(vacancies, { keys: ["title"] });
      vacancies = fuse.search(search);
      vacancies = vacancies.map((obj: any) => obj.item);
    }

    const vacanciesCount = vacancies.length;
    const perPage = 10;
    const pageCount = Math.ceil(vacanciesCount / perPage);
    let pageNumber = parseInt(page);

    if (isNaN(pageNumber) || pageNumber < 0) {
      pageNumber = 1;
    }

    if (pageNumber > pageCount) {
      pageNumber = pageCount;
    }

    res.json({
      vacancies: vacancies.slice(
        (pageNumber - 1) * perPage,
        (pageNumber - 1) * perPage + perPage
      ),
      pageNumber,
      pageCount
    });
});

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id as string);
  
  if (isNaN(id)) {
    res.status(404);
    return;
  }

  const rep = getRepository(Vacancy);
  const vacancy = await rep.findOne({ id }, { relations: ["employer"] });

  if (!vacancy) {
    res.status(404);
    return;
  }

  res.json(vacancy);
});

router.post("/", auth, role("employer"), async (req, res: Response) => {
    const rep = getRepository(Vacancy);
    const vacancy = rep.create({ ...req.body as Vacancy, employer: { id: req?.session?.userId } });

    return await rep.save(vacancy);
});
