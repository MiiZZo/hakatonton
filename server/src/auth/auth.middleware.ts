import { NextFunction, Request, Response } from "express";
import { JobSeekerService } from "../job-seeker/job-seeker.service";

export const auth = async (req: Request, res: Response, next: NextFunction) => {    
    if (!req?.session?.userId) {
        res.json({
            data: null,
            errors: [{ message: "Вы должны быть авторизованы" }]
        });
    }

    next();
}
