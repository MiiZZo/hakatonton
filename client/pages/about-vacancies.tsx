import { HeaderTop } from "../features/header";
import { NewCards } from "../features/vacancies/vacancy-card";

import { Button, Box, Flex, Heading } from "@chakra-ui/core";

export default function AboutVacancies() {
  return (
    <>
      <HeaderTop />
      <Box
        minH="20px"
        padding="40px 50px"
        w="1550px"
        m="50px auto"
        border="1px solid #E2E8F0"
        borderRadius="45px"
        background="#FDFDFD"
      >
        <Heading as="h3" fontSize={24}>
          Название вакансии
        </Heading>
        <Flex mt={3}>
          <Box
            padding="0 7px"
            color="#2D9CDB"
            border="1px solid #2D9CDB"
            mr={4}
            fontSize="12px"
          >
            IT
          </Box>
          <Box
            padding="0 7px"
            color="#F2994A"
            border="1px solid #F2994A"
            mr={4}
            fontSize="12px"
          >
            Анализ
          </Box>
          <Box
            padding="0 7px"
            color="#EB5757"
            border="1px solid #EB5757"
            mr={4}
            fontSize="12px"
          >
            С++
          </Box>
        </Flex>
        <Box fontSize={24} mt={10} fontWeight="550">
          от 150 000 руб.
        </Box>
        <Flex mt="10" alignItems="center">
          <Box borderRadius="50%" w={86} h={86} backgroundColor="#ccc"></Box>
          <Box>
            <Box fontSize={24} ml={6} fontWeight="550">
              ООО “Моя оборона”
            </Box>
            <Box fontSize={24} ml={6} fontWeight="550">
              г. Новоебенёво
            </Box>
          </Box>
        </Flex>
        <Box fontSize={18} maxW={950} m="20px 0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis
        </Box>
        <Box fontSize={24} mt={10} fontWeight="550">
          Обязанности
        </Box>
        <Box fontSize={18} mt={5}>
          – это, другое, третье, пятое, десятьое.
        </Box>
        <Box fontSize={18}>– это, другое, третье, пятое, десятьое.</Box>
        <Box fontSize={18}>– это, другое, третье, пятое, десятьое.</Box>
        <Box fontSize={18}>– это, другое, третье, пятое, десятьое.</Box>
        <Box fontSize={24} mt={10} fontWeight="550">
          Требования
        </Box>
        <Box fontSize={18} mt={5}>
          – это, другое, третье, пятое, десятьое.
        </Box>
        <Box fontSize={18}>– это, другое, третье, пятое, десятьое.</Box>
        <Box fontSize={18}>– это, другое, третье, пятое, десятьое.</Box>
        <Box fontSize={18}>– это, другое, третье, пятое, десятьое.</Box>
        <Box fontSize={24} mt={10} fontWeight="550">
          Мы предлагаем
        </Box>
        <Box fontSize={18} mt={5}>
          – это, другое, третье, пятое, десятьое.
        </Box>
        <Box fontSize={18}>– это, другое, третье, пятое, десятьое.</Box>
        <Box fontSize={18}>– это, другое, третье, пятое, десятьое.</Box>
        <Box fontSize={18}>– это, другое, третье, пятое, десятьое.</Box>

        <NewCards />
        <NewCards />
      </Box>
    </>
  );
}
