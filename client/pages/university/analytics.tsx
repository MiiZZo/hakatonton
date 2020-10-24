import React from "react";
import { HeaderTop } from "../../features/header/header";
import EmployedVacanciesGraphic from "../employed-vacancies-graphic";
import Graphic from "../graphic";
import SalaryGraph from "../salary-graph";

export default function Analythics() {
    return (
       <>
         <HeaderTop />
         Количество вакансий и трудоустроенных
         <EmployedVacanciesGraphic />
         <Graphic />
         Средняя зарплата на рынке
         <SalaryGraph />
         
       </>
    );
}
