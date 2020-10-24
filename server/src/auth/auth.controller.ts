import { validate } from "class-validator";
import { Router } from "express";
import config from "config";
import bcrypt from "bcryptjs";
import { JobSeeker } from "../job-seeker/job-seeker.entity";
import { JobSeekerService } from "../job-seeker/job-seeker.service";
import { LoginDTO } from "./login.dto";
import { EmployerService } from "../employer/employer.service";
import { Employer } from "../employer/employer.entity";

export const router = Router();

router.post("/signup/jobseeker", async (req, res) => {
    const jobSeekerService = new JobSeekerService();
    const result = await jobSeekerService.createJobSeeker(req.body);

    if (result.errors.length > 0) {
        res.status(400);
        res.json(result);
        return;
    }
    
    res.status(201);
    (req.session as any).userId = result.data.id;
    
    res.json(result);
    return;
});

router.post("/signup/employer", async (req, res) => {
    const employerService = new EmployerService();
    const result = await employerService.createEmployer(req.body);

    if (result.errors.length > 0) {
        res.status(400);
        res.json(result);
        return;
    }
    
    res.status(201);
    (req.session as any).userId = result.data.id;
    
    res.json(result);
    return;
});

router.post("/signin", async (req, res) => {
    const loginDto = new LoginDTO();
    loginDto.email = req.body.email;
    loginDto.password = req.body.password;

    let user: JobSeeker | Employer | null = null;

    const validationResult = await validate(loginDto);

    const jobSeekerService = new JobSeekerService();
    const jobSeeker = await jobSeekerService.findOne(req.body);

    if (!jobSeeker) {
        const employerService = new EmployerService();
        const employer = await employerService.findOne(req.body);

        if (!employer) {
            res.status(400);
            res.json({
                data: null,
                errors: [{
                    message: "Неверный логин или пароль"
                }]
            });

            return;
        } else {
            user = employer;
        }
    } else {
        user = jobSeeker;
    }

    const passwordsMatched = bcrypt.compare(loginDto.password, user.password);

    if (!passwordsMatched) {
        res.status(400);
        res.json({
            data: null,
            errors: [{
                message: "Неверный логин или пароль"
            }]
        });

        return;
    }

    (req.session as any).userId = user.id;

    res.json({
        data: user,
        errors: []
    });
});

router.post("/logout", (req, res) => {
    req?.session?.destroy((err) => {
        if (err) {
            console.log(err);
        }
    });

    res.clearCookie(config.get("COOKIE_NAME"));
    res.end();
});
