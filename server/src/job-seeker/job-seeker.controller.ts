import { Router } from "express";
import { JobSeekerService } from "./job-seeker.service";

export const router = Router();

router.get("/", async (req, res) => {
    const jobSeekerService = new JobSeekerService();
    res.json(await jobSeekerService.getAll());
});
