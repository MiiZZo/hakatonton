import React from "react";
import { HeaderTop } from "../../features/header/header";
import EmployedVacanciesGraphic from "../employed-vacancies-graphic";
import Graphic from "../graphic";
import SalaryGraph from "../salary-graph";

import {Box} from "@chakra-ui/core";

export default function Analythics() {
    return (
       <>
         <HeaderTop />
         <Box ml={10}>
         Количество вакансий и трудоустроенных
         <EmployedVacanciesGraphic />
         <Graphic />
         Средняя зарплата на рынке
         <SalaryGraph />
         </Box>
       </>
    );
}
