import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail } from "class-validator";
import { Resume } from "../resumes/resume.entity";

@Entity()
export class JobSeeker {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @IsEmail()
    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Column({ nullable: true })
    phoneNumber!: string;

    @OneToMany(() => Resume, resume => resume.jobSeeker)
    resumes!: Resume[];

    @Column("date")
    birthDate!: Date;
}
