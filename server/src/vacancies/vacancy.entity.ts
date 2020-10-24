import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    cityId!: number;

    @Column()
    salaryFrom!: number;

    @Column()
    salaryUpTo!: number;

    @Column({
        type: "enum",
        enum: EmploymentEnum,
    })
    emloyment!: string;

    @Column({
        type: "enum",
        enum: ScheduleEnum
    })
    schedule!: string;
}
