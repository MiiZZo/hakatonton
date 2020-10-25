import { getRepository } from "typeorm";
import { JobSeeker } from "../job-seeker/job-seeker.entity";
import { CreateResumeDTO } from "./create-resume.dto";
import { Resume } from "./resume.entity";

export class ResumeService {
    constructor(
        private repository = getRepository(Resume)
    ) {}

    async createResume({
        gender,
        jobSeeker,
        phoneNumber,
        address,
        goal,
        education,
        workExperience,
        extraSkills,
        personalQualities,
        achievements
    }: any): Promise<Resume> {
        const resume = this.repository.create({
            gender,
            jobSeeker: { id: jobSeeker },
            phoneNumber,
            address,
            goal,
            education,
            workExperience,
            extraSkills,
            personalQualities,
            achievements
        });

        return await this.repository.save(resume);
    }

    async getAll() {
        const resumes = await this.repository.find({ relations: ["jobSeeker"] });
        const withoutUserPassword = resumes.map((resume) => {
            const { password, ...jobSeeker } = resume.jobSeeker;
            
            return {
                ...resume,
                jobSeeker
            }
        });

        return withoutUserPassword;
    }
}
