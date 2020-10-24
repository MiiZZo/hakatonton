import { SumLeftMenu } from "../features/vacancies/vacancy-left-menu/vacancy-left-menu";
import { NewCards } from "../features/vacancies/vacancy-card/vacancy-card";
import { HeaderTop } from "../features/header/header";
import { Button, Box, Flex, Select, Image, Stack, Tag, TagLabel, TagCloseButton } from "@chakra-ui/core";
import { StudentCard } from "../features/students/student-card/student-card";
import Link from "next/link";
import { API_URL } from "../constants";
import { Footer } from "../features/footer/footer"

export default function PersonalAccount({ students = [] }) {
    return (
        <>
            <HeaderTop />
            <Flex maxW={1670} margin="0 auto" padding="0 20px">
                <SumLeftMenu />
                <Box w="1110px" ml="50px">
                    <Flex justifyContent="space-between" mt="-60px">
                        <Flex flexDirection="column" h="300px" background="linear-gradient(135deg, #FFFFFF 0%, #FDFDFD 100%)" rounded={14} border="1px solid #CBD5E0" w="500px" padding="10px 20px">
                            <Box>
                                <Box fontSize="24px" fontWeight="700">Статистика</Box>
                            </Box>
                            <Link href="/university/analytics">
                            <Flex mb="10px" justifyContent="center" cursor="pointer" alignItems="center">
                                <Image size={200} src="/circle/analytics.svg"/>
                            </Flex>
                            </Link>
                        </Flex>
                    </Flex>
                    <Flex mb="21px" justifyContent="space-between">
                        <Box as="h2" fontSize="36px" fontWeight="550">Студенты</Box>
                    </Flex>
                    {students.map((student) => (
                        <StudentCard {...student} />
                    ))}
                </Box>
            </Flex>
            
            <Footer />
        </>
    );
}

export const getServerSideProps = async () => {
    const res = await fetch(`${API_URL}/students`);
    const students = await res.json();

    return {
        props: {
            students
        }
    }
}
