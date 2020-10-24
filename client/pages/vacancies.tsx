import { SumLeftMenu } from "../features/vacancies/vacancy-left-menu";
import { NewCards } from "../features/vacancies/vacancy-card";
import { HeaderTop } from "../features/header";
import { Button, Box,Flex, Select } from "@chakra-ui/core";
import { API_URL } from "../constants";
import { Pagination } from "../features/general/pagination";
import { useRouter } from "next/router";

interface Props {
  vacancies: any[];
  pageNumber: number;
  pageCount: number;
}

export default function newSummary({ pageCount, pageNumber, vacancies }: Props) {
  const router = useRouter();
  
  const handleChangePage = (pageNumber: number) => {
    router.push({ query: { page: pageNumber }  });
  }


  return (
    <>
      <HeaderTop />
      <Flex maxW={1670} margin="0 auto" padding="0 20px">
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
              <Pagination current={pageNumber} total={pageCount} onChange={handleChangePage}/>
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
