import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
