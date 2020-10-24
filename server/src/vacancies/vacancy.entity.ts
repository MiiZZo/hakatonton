import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employer } from "../employer/employer.entity";

export const EmploymentEnum = [
    "Полная занятость",
    "Частичная занятость",
	"Проектная работа или разовое задание",
	"Волонтерство",
    "Стажировка",
]

export const ScheduleEnum = [
    "Полный день",
    "Сменный график", 
	"Гибкий график",
	"Удаленная работа",
	"Вахтовый метод"
]

@Entity()
export class Vacancy {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    // @Column()
    // cityId!: number;

    @Column()
    responsibilities!: string;

    @Column()
    keySkills!: string;

    @Column()
    salaryFrom!: number;

    @Column()
    salaryUpTo!: number;

    @Column({
        type: "enum",
        enum: EmploymentEnum,
    })
    employment!: string;

    @Column({
        type: "enum",
        enum: ScheduleEnum
    })
    schedule!: string;

    @ManyToOne(() => Employer, employer => employer.vacancies)
    employer!: Employer;
}
