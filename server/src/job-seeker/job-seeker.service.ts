import { validate } from "class-validator";
import { getRepository } from "typeorm";
import bcrypt from "bcryptjs";
import { CreateJobSeekerDTO } from "./job-seeker.dto";
import { JobSeeker } from "./job-seeker.entity";

export class JobSeekerService {    
    constructor(
        private repository = getRepository(JobSeeker)
    ) {}

    async createJobSeeker({ email, password, firstName, lastName, birthDate }: CreateJobSeekerDTO): Promise<any> {
       try {
        const _jobSeeker = new CreateJobSeekerDTO();
        _jobSeeker.email = email;
        _jobSeeker.password = password;
        _jobSeeker.firstName = firstName;
        _jobSeeker.lastName = lastName;

        const validationErrors = await validate(_jobSeeker);

        if (validationErrors.length > 0) {
            return {
                data: null,
                errors: validationErrors
            }
        }

        const emailIsBusy = await this.repository.findOne({ where: { email } });

        if (emailIsBusy) {
            return {
                data: null,
                errors: [{
                    message: "Данный адрес электронный почты используется другим пользователем"
                }]
            }
        }

        const hashedPassword = bcrypt.hashSync(password);
        _jobSeeker.password = hashedPassword;

        const jobSeeker = this.repository.create(_jobSeeker);
        const { password: pass, ...jobSeekerData  } = await this.repository.save({ ...jobSeeker, birthDate});

        return {
            errors: [],
            data: jobSeekerData
        };
       } catch (e) {
        console.log(e);
       }
    }

    async findOne({ password, ...criteria }: Partial<JobSeeker>): Promise<JobSeeker | undefined> {
        return (await this.repository.find(criteria))[0];
    }

    async getAll() {
        return await this.repository.find();
    }
}
