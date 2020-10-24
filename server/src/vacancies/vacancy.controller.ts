import { Router } from "express";
import { getRepository } from "typeorm";
import { ScheduleEnum, Vacancy } from "./vacancy.entity";

export const router = Router();

router.post("/", async (req, res) => {
    const rep = getRepository(Vacancy);

    const vacancy = rep.create({ schedule: ScheduleEnum[req.body.schedule] });

    await rep.save({  });

    res.end();
});
