import { SumLeftMenu } from "../features/vacancies/vacancy-left-menu";
import { NewCards } from "../features/vacancies/vacancy-card";
import { HeaderTop } from "../features/header";

import { Button, Box, Input, Flex, Select, IconButton } from "@chakra-ui/core";

export default function newSummary() {
  return (
    <>
      <HeaderTop />

      <Box maxW={1550} m="0 auto" padding="0px 0 20px 0">
        <Box w="1110px" ml="auto">
          <Flex justifyContent="space-between">
            <Flex >
              <Select placeholder="Сортировать по" w="170px" fontSize={14}>
                <option value="option1">Сортировать по</option>
                <option value="option2">Сортироватьо</option>
                <option value="option3">Сортировать по</option>
              </Select>
              <Select
                placeholder="За месяц"
                w="130px"
                fontSize={14}
                ml="20px"
              >
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
        </Box>
      </Box>

      <Flex
        maxW={1550}
        m="0 auto"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <SumLeftMenu />
        <Box w="1110px">
          <NewCards title="Верстальщик" price="от 60000 руб." name="Петров Иван Иванович" city="г. Боровичи" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis" />
          <NewCards title="Оператор склада / Кладовщик - Комплектовщик" price="от 43000 руб." name="Маскаль Иван Иванович" city="г. Боровичи" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis" />
          <NewCards title="Водитель-курьер на автомобиле" price="от 32000 руб." name="Петрович Иван Иванович" city="г. Боровичи" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis" />
          <NewCards title="Куколд" price="от 24000 руб." name="Властилен Иван Иванович" city="г. Боровичи" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis" />
        </Box>
      </Flex>
    </>
  );
}
