import { IsString } from "class-validator";


export class CreateResumeDTO {
    @IsString()
    gender!: string;
    @IsString()
    phoneNumber!: string;

    @IsString()
    address!: string;

    @IsString()
    goal!: string;

    @IsString()
    education!: string;

    @IsString()
    workExperience!: string;

    @IsString()
    extraSkills!: string;

    @IsString()
    personalQualities!: string;

    @IsString()
    achievements!: string;
}
