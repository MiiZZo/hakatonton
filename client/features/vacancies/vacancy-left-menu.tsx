import {
  Button,
  Box,
  Input,
  Checkbox,
  Stack,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  FormControl,
  Radio,
  RadioGroup,
  FormLabel,
  Heading
} from "@chakra-ui/core";

export function SumLeftMenu() {
  return (
    <Box
      w="350px"
      borderRadius={15}
      border="1px solid #E2E8F0"
      padding="30px"
      mb={10}
    >
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
  );
}
