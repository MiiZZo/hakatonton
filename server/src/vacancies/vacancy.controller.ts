import { Response, Router } from "express";
import { getRepository } from "typeorm";
import { auth } from "../auth/auth.middleware";
import { role } from "../auth/role.middleware";
import { Vacancy } from "./vacancy.entity";

export const router = Router();

router.get("/", async (req, res) => {
    const rep = getRepository(Vacancy);

    const page = req.query.page as string;

    let vacancies: any = (await rep.find({ relations: ["employer"] })).slice();

    vacancies = vacancies.map((vacancy: any) => {
      const { password, ...employer } = vacancy.employer;
      return (
        { ...vacancy, employer }
<<<<<<< HEAD
      )
    })
    
    console.log(vacancies);
=======
      );
    });
>>>>>>> 5977cac368ef046df4801b845602bcc06964d9ba

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

router.post("/", auth, role("employer"), async (req, res: Response) => {
    const rep = getRepository(Vacancy);
    const vacancy = rep.create({ ...req.body as Vacancy, employer: { id: req?.session?.userId } });

    return await rep.save(vacancy);
});
