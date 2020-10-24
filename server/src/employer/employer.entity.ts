import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Vacancy } from "../vacancies/vacancy.entity";

@Entity()
export class Employer {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Column()
    phoneNumber!: string;

    @Column()
    companyName!: string;

    @OneToMany(() => Vacancy, vacancy => vacancy.employer)
    vacancies!: Vacancy[];
}
