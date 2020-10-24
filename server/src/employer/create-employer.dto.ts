import { IsSemVer, IsString } from "class-validator";

export class CreateEmployerDTO {
    @IsString()
    firstName!: string;
    @IsString()
    lastName!: string;
    @IsString()
    email!: string;
    @IsString()
    password!: string;
    @IsString()
    phoneNumber!: string;
    @IsString()
    companyName!: string;
}
