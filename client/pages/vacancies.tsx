import { SumLeftMenu } from "../features/vacancies/vacancy-left-menu";
import { NewCards } from "../features/vacancies/vacancy-card";
import { HeaderTop } from "../features/header";

import { Button, Box,Flex, Select } from "@chakra-ui/core";
import { API_URL } from "../constants";

interface Props {
  vacancies: any[];
  pageNumber: number;
  pageCount: number;
}

export default function newSummary({ pageCount, pageNumber, vacancies }: Props) {
  return (
    <>
      <HeaderTop />
      <Flex maxW={1670} margin="0 auto">
        <Box w="1110px">
          <Flex maxW={1550} m="0 auto" justifyContent="space-between" alignItems="flex-start">
            <SumLeftMenu />
            <Box w="1110px" ml="50px">
              <Flex mt="-60px" mb="21px" justifyContent="space-between">
                <Flex>
                  <Select placeholder="Сортировать по" w="170px" fontSize={14}>
                    <option value="option1">Сортировать по</option>
                    <option value="option2">Сортироватьо</option>
                    <option value="option3">Сортировать по</option>
                  </Select>
                  <Select placeholder="За месяц" w="130px" fontSize={14} ml="20px">
                    <option value="option1">За месяцо</option>
                    <option value="option2">За месяц</option>
                    <option value="option3">За месяц</option>
                  </Select>
                </Flex>
                <Button
                  _focus={{ outline: "none" }}
                  pl="40px"
                  borderRadius="4px"
                  border="1px solid #2D3748"
                  backgroundColor="#fff"
                  _before={{
                    content: '"+"',
                    zIndex: 50,
                    position: "absolute",
                    top: "2px",
                    left: "10px",
                    color: "black",
                    fontSize: "25px"
                  }}
                  position="relative"
                >
                  Создать резюме
                </Button>
              </Flex>
              {vacancies.map(vacancy => (
                <NewCards 
                  key={vacancy.id}
                  {...vacancy}
                />
              ))}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export const getServerSideProps =  async ({ query: { page }, req }) => {
    const response = await fetch(
      `${API_URL}/vacancies/?page=${page || 1}`
    );

    const data = await response.json();

    return {
      props: data
    }
}
