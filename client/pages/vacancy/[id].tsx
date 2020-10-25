import { NewCards } from "../../features/vacancies/vacancy-card/vacancy-card";
import { HeaderTop } from "../../features/header/header";
import { Button, Box, Flex, Select, Image, Stack, Tag, TagLabel, TagCloseButton, Heading } from "@chakra-ui/core";
import { Footer } from "../../features/footer/footer";
import { API_URL } from "../../constants";
import EmployerVacancyPage from "../employer/new-vacancy";


export default function AboutVacancies({ title, salaryFrom, employer, responsibilities, keySkills, schedule, employment }) {
  return (
    <>
      <Box p="0 10px">
        <HeaderTop />
        <Box
          minH="20px"
          padding="40px 50px"
          w="1670px"
          m="50px auto"
          border="1px solid #E2E8F0"
          borderRadius="45px"
          background="#FDFDFD"
          boxShadow="0px 10px 20px rgba(0, 0, 0, 0.08), 0px 1.9026px 9.89203px rgba(0, 0, 0, 0.0132832)"
        >
          <Box>
            <Heading as="h3" fontSize={24}>
              {title}
        </Heading>
            <Flex mt={3}>
              <Box padding="0 7px" color="#2D9CDB" border="1px solid #2D9CDB" mr={4} fontSize="12px">
                IT
          </Box>
              <Box padding="0 7px" color="#F2994A" border="1px solid #F2994A" mr={4} fontSize="12px">
                Анализ
          </Box>
              <Box padding="0 7px" color="#EB5757" border="1px solid #EB5757" mr={4} fontSize="12px">
                С++
          </Box>
            </Flex>
            <Box fontSize={24} mt={10} fontWeight="550">
              от {salaryFrom} руб.
        </Box>
            <Flex mt="10" alignItems="center">
              <Box borderRadius="50%" w={86} h={86} backgroundColor="#ccc"></Box>
              <Box>
                <Box fontSize={24} ml={6} fontWeight="550">
                  {employer.companyName}
            </Box>
                <Box fontSize={24} ml={6} fontWeight="550">
                  
            </Box>
              </Box>
            </Flex>
            <Box fontSize={18} maxW={950} m="20px 0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
              magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla
              est ullamcorper eget nulla facilisi etiam dignissim diam quis
        </Box>
            <Box fontSize={24} mt={10} fontWeight="550">
              Обязанности
        </Box>
            <Box fontSize={18} mt={5}>
              {responsibilities}
        </Box>
            <Box fontSize={24} mt={10} fontWeight="550">
              Ключевые навыки
        </Box>
            <Box fontSize={18} mt={5}>
              {keySkills}
        </Box>
            <Box fontSize={24} mt={10} fontWeight="550">
              График работы
        </Box>
            <Box fontSize={18} mt={5}>
              {schedule}
        </Box>
            <Box fontSize={18} mb={10}>
        </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export const getServerSideProps = async ({ params: { id } }) => {
    const res = await fetch(`${API_URL}/vacancies/${id}`);
    let data = {};

    if (res.ok) {
      data = await res.json();
    }

    return {
      props: {
        ...data
      }
    };
}
