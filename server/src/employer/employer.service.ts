import { validate } from "class-validator";
import { getRepository } from "typeorm";
import bcrypt from "bcryptjs";
import { CreateEmployerDTO } from "./create-employer.dto";
import { Employer } from "./employer.entity";

export class EmployerService {
    constructor(
        private repository = getRepository(Employer)
    ) {}

    async createEmployer({ email, password, firstName, lastName, companyName, phoneNumber }: CreateEmployerDTO): Promise<any> {
        const _employer = new CreateEmployerDTO();
        _employer.email = email;
        _employer.password = password;
        _employer.firstName = firstName;
        _employer.lastName = lastName;
        _employer.phoneNumber = phoneNumber;
        _employer.companyName = companyName;

        const validationErrors = await validate(_employer);

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
        _employer.password = hashedPassword;

        const employer = this.repository.create(_employer);
        const { password: pass, ...employerData  } = await this.repository.save(employer);

        return {
            errors: [],
            data: employerData
        };
    }

    async findOne({ password, ...criteria }: Partial<Employer>): Promise<Employer | undefined> {
        return (await this.repository.find(criteria))[0];
    }
}
