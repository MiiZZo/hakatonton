import { NextFunction, Request, Response } from "express";

export const role = (role: "job-seeker" | "employer") => (req: Request, res: Response, next: NextFunction) => {
    if (role === req?.session?.userRole) {
        next();
        return;
    }

    res.status(403);
    res.end();
}
