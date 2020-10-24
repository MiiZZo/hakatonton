import { Response, Router } from "express";
import { getRepository } from "typeorm";
import { auth } from "../auth/auth.middleware";
import { role } from "../auth/role.middleware";
import { ScheduleEnum, Vacancy } from "./vacancy.entity";

export const router = Router();

router.post("/", auth, role("employer"), async (req, res: Response) => {
    const rep = getRepository(Vacancy);
    const vacancy = rep.create({ ...req.body as Vacancy, employer: { id: req?.session?.userId } });

    return await rep.save(vacancy);
});
