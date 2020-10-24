import { validate } from "class-validator";
import { Router } from "express";
import { auth } from "../auth/auth.middleware";
import { CreateResumeDTO } from "./create-resume.dto";
import { ResumeService } from "./resume.service";

export const router = Router();

router.get("/", async (req, res) => {
    const resumeService = new ResumeService();
    const resumes = await resumeService.getAll();
    console.log(resumes);

});

router.post("/", auth, async (req, res) => {
    const { 
        gender,
        phoneNumber,
        address,
        goal,
        education,
        workExperience,
        extraSkills,
        personalQualities,
        achievements
    } = req.body;

    const resumeService = new ResumeService();
    const _resume = new CreateResumeDTO();
    _resume.achievements = achievements;
    _resume.address = address;
    _resume.education = education;
    _resume.extraSkills = extraSkills;
    _resume.gender = gender;
    _resume.personalQualities = personalQualities;
    _resume.phoneNumber = phoneNumber;
    _resume.goal = goal;
    _resume.workExperience = workExperience;

    const validationErrors = await validate(_resume);

    if (validationErrors.length > 0) {
        res.status(400);
        return res.json({
            data: null,
            errors: validationErrors
        });
    }

    const resume = await resumeService.createResume({ ..._resume, jobSeeker: req?.session?.userId });

    res.status(201);

    res.json({
        data: resume,
        errors: null        
    });
});
