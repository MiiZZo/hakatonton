import {
  Button,
  Box,
  Input,
  Text,
  Checkbox,
  Stack,
  Flex,
  Heading,
  Tabs,
  Textarea,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Select,
  FormControl,
  Radio,
  RadioGroup,
  FormLabel
} from "@chakra-ui/core";

export function NewResume() {
  return (
    <Box maxWidth={626} m="30px auto 10px ">
      <Text fontSize={24} mb={30}>
        Ваше резюме
      </Text>
      <Heading fontSize={18} mb={10}>
        Контактные данные
      </Heading>
      <FormControl isRequired>
        <Flex mb="30px">
          <FormLabel w={300} color="#000000" fontWeight="550">
            Пол
          </FormLabel>
          <RadioGroup defaultValue="1">
            <Radio value="1" ml={60}>
              Мужской
            </Radio>
            <Radio value="2" ml={60}>
              Женский
            </Radio>
          </RadioGroup>
        </Flex>
      </FormControl>
      <FormControl isRequired>
        <Flex mb="30px">
          <FormLabel
            w={360}
            m="20px 50px 10px 0"
            color="#000000"
            fontWeight="550"
          >
            Дата рождения
          </FormLabel>
          <Flex>
            <Input
              placeholder="День"
              rounded="4px 0px 0px 4px"
              w={"25%"}
            ></Input>
            <Select placeholder="Месяц" m="0px 5px" w={"35%"}>
              <option value="option1">Январь</option>
              <option value="option2">Февраль</option>
              <option value="option3">Март</option>
              <option value="option3">Апрель</option>
              <option value="option3">Май</option>
              <option value="option3">Июнь</option>
              <option value="option3">Июль</option>
              <option value="option3">Август</option>
              <option value="option3">Сентябрь</option>
              <option value="option3">Октябрь</option>
              <option value="option3">Ноябрь</option>
              <option value="option3">Декабрь</option>
            </Select>
            <Input
              placeholder="Год"
              rounded="0px 4px 4px 0px"
              w={"25%"}
            ></Input>
          </Flex>
        </Flex>
      </FormControl>
      <FormControl isRequired>
        <Flex mb="30px">
          <FormLabel
            w={300}
            m="20px 50px 10px 00"
            color="#000000"
            fontWeight="550"
          >
            Телефон
          </FormLabel>
          <Input rounded="4px" placeholder="Text Here" w="70%" m="auto"></Input>
        </Flex>
      </FormControl>
      <FormControl isRequired>
        <Flex mb="30px">
          <FormLabel
            w={300}
            m="20px 50px 10px 00"
            color="#000000"
            fontWeight="550"
          >
            Место проживание
          </FormLabel>
          <Input rounded="4px" placeholder="Text Here" w="70%" m="auto"></Input>
        </Flex>
      </FormControl>
      <FormControl isRequired>
        <Flex mb="30px">
          <FormLabel
            w={300}
            m="20px 50px 10px 00"
            color="#000000"
            fontWeight="550"
          >
            Цель
          </FormLabel>
          <Input rounded="4px" placeholder="Text Here" w="70%" m="auto"></Input>
        </Flex>
      </FormControl>
      <FormControl isRequired>
        <Flex mb="30px">
          <FormLabel
            w={300}
            m="20px 50px 10px 00"
            color="#000000"
            fontWeight="550"
          >
            Образование
          </FormLabel>
          <Textarea rounded="4px" placeholder="-" w="70%" m=" auto"></Textarea>
        </Flex>
      </FormControl>
      <FormControl isRequired>
        <Flex mb="30px">
          <FormLabel
            w={300}
            m="20px 50px 10px 00"
            color="#000000"
            fontWeight="550"
          >
            Опыт работы
          </FormLabel>
          <Textarea rounded="4px" placeholder="-" w="70%" m=" auto"></Textarea>
        </Flex>
      </FormControl>
      <FormControl isRequired>
        <Flex mb="30px">
          <FormLabel
            w={300}
            m="20px 50px 10px 0"
            color="#000000"
            fontWeight="550"
          >
            Дополнительные качества
          </FormLabel>
          <Input
            rounded="4px"
            placeholder="Text Here"
            w="70%"
            m=" auto"
          ></Input>
        </Flex>
      </FormControl>
      <FormControl isRequired>
        <Flex mb="30px">
          <FormLabel
            w={300}
            m="20px 50px 10px 0"
            color="#000000"
            fontWeight="550"
          >
            Личние качества
          </FormLabel>
          <Input
            rounded="4px"
            placeholder="Text Here"
            w="70%"
            m=" auto"
          ></Input>
        </Flex>
      </FormControl>
      <FormControl isRequired>
        <Flex mb="30px">
          <FormLabel
            w={300}
            m="20px 50px 10px 0"
            color="#000000"
            fontWeight="550"
          >
            Достижения
          </FormLabel>
          <Textarea rounded="4px" placeholder="-" w="70%" m=" auto"></Textarea>
        </Flex>
      </FormControl>
      <Box>
        <Button
          m="auto"
          display="block"
          bg="#2A69AC"
          borderRadius={4}
          w={[190, 300]}
          fontSize={[12, 18]}
          h={41}
          color="#fff"
          _hover={{ bg: "#2A69AC" }}
          _focus={{ bg: "#2A69AC" }}
          _active={{ bg: "inherit" }}
        >
          Сохранить и опубликовать
        </Button>
      </Box>
    </Box>
  );
}
