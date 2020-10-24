import {
  Box,
  Input,
  Flex,
  Heading,
  IconButton
} from "@chakra-ui/core";

export function SumLeftMenu() {
  return (
    <>

      <Box
        w="350px"
        borderRadius={15}
        border="1px solid #E2E8F0"
        padding="30px"
        mb={10}
      >
        <Box position="relative" display="inline-block" left="-35px" top="-90px">
          <Input
            placeholder="Text Here"
            w={360}
            padding="0 80px 0 10px"
          ></Input>
          <IconButton
            aria-label="search-button"
            icon="search"
            zIndex={50}
            _focus={{ outline: "none" }}
            padding="0 5px"
            type="submit"
            position="absolute"
            top={0.9}
            right={0.9}
            display="inline-block"
            w={73}
            cursor="pointer"
            fontSize={14}
            background="#EDF2F7"
            h="38px"
          >
            Addons
    </IconButton>
        </Box>
        <Box>
          <Heading as="h5" fontSize="14px" pl="35px" mb="10px">
            Регион
        </Heading>
          <Box pl="50px" pr="20px" mb="50px" color="#000000" fontSize="16px">
            <Flex justifyContent="space-between" mb="10px">
              <Box>Россия</Box>
              <Box>201512</Box>
            </Flex>
            <Flex justifyContent="space-between" mb="10px">
              <Box>Москва</Box>
              <Box>33643</Box>
            </Flex>
            <Flex justifyContent="space-between" mb="10px">
              <Box>Санкт-Петербург</Box>
              <Box>33643</Box>
            </Flex>
            <Box opacity="0.5" fontSize="12px">
              Ещё 158
          </Box>
          </Box>
        </Box>
        <Box mt="-30px">
          <Heading as="h5" fontSize="14px" pl="35px" pt="20px" mb="10px">
            Уровень дохода
        </Heading>
          <Box pl="50px" pr="20px" mb="50px" color="#000000" fontSize="16px">
            <Flex justifyContent="space-between" mb="10px">
              <Box>Указать</Box>
              <Box>201512</Box>
            </Flex>
            <Flex justifyContent="space-between" mb="10px">
              <Box>от 10 000 р.</Box>
              <Box>33643</Box>
            </Flex>
            <Flex justifyContent="space-between" mb="10px">
              <Box>от 30 000 р.</Box>
              <Box>33643</Box>
            </Flex>
            <Flex justifyContent="space-between" mb="10px">
              <Box>от 50 000 р.</Box>
              <Box>33643</Box>
            </Flex>
            <Flex justifyContent="space-between">
              <Box>от 100 000 р.</Box>
              <Box>33643</Box>
            </Flex>
          </Box>
        </Box>
        <Box mt="-30px">
          <Heading as="h5" fontSize="14px" pl="35px" pt="20px" mb="10px">
            Профобласть
        </Heading>
          <Box pl="50px" pr="20px" mb="50px" color="#000000" fontSize="16px">
            <Flex justifyContent="space-between" mb="10px">
              <Box>IT</Box>
              <Box>201512</Box>
            </Flex>
            <Flex justifyContent="space-between" mb="10px">
              <Box>Производство</Box>
              <Box>33643</Box>
            </Flex>
            <Flex justifyContent="space-between" mb="10px">
              <Box>Бухгатлерия</Box>
              <Box>1525</Box>
            </Flex>
            <Box opacity="0.5" fontSize="12px">
              Ещё 158
          </Box>
          </Box>
        </Box>
        <Heading as="h5" fontSize="14px" pl="35px" pt="0px" mb="10px">
          Отрасль компании
      </Heading>
        <Heading as="h5" fontSize="14px" pl="35px" pt="20px" mb="10px">
          Опыт работы
      </Heading>
        <Heading as="h5" fontSize="14px" pl="35px" pt="20px" mb="10px">
          Тип занятости
      </Heading>
        <Heading as="h5" fontSize="14px" pl="35px" pt="20px" mb="10px">
          Исключение
      </Heading>
        <Heading as="h5" fontSize="14px" pl="35px" pt="20px">
          Другие параметры
      </Heading>
      </Box>
    </>
  );
}
