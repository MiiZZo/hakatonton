import c from "config";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { JobSeeker } from "../job-seeker/job-seeker.entity";

@Entity()
export class Resume {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: "enum",
        enum: ["male", "female"]
    })
    gender!: string;

    @ManyToOne(() => JobSeeker, jobSeeker => jobSeeker.resumes)
    jobSeeker!: JobSeeker;

    @Column()
    phoneNumber!: string;

    @Column()
    address!: string;

    @Column()
    goal!: string;

    @Column()
    education!: string;

    @Column()
    workExperience!: string;

    @Column()
    extraSkills!: string;

    @Column()
    personalQualities!: string;

    @Column()
    achievements!: string;

    @CreateDateColumn()
    createdAt!: Date;
}
