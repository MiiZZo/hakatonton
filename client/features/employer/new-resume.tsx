import {
    Button,
    Box,
    Input,
    Text,
    Checkbox,
    NumberInput,
    Flex,
    Heading,
    Textarea,
    FormControl,
    Radio,
    RadioGroup,
    FormLabel,
    Grid,
    NumberInputField
  } from "@chakra-ui/core";
  import { useState } from "react";
  import { useForm } from "react-hook-form";
  import { API_URL } from "../../constants";
  
  export function NewResume() {
    const [employment, setEmployment] = useState("Полная занятость");
    const [schedule, setSchedule] = useState("Полная занятость");
    const { register, handleSubmit } = useForm();
  
    const onSubmit = (values) => {
      const salaryFrom = Number(values.salaryFrom);
      const salaryUpTo = Number(values.salaryUpTo);
  
      const newVacancy = async () => {
        const res = await fetch(`${API_URL}/vacancies`, {
          mode: "cors",
          method: "POST",
          body: JSON.stringify({ ...values, employment, salaryFrom, salaryUpTo }),
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include"
        });
  
        if (res) {
  
        }
      }
  
      console.log(values);
      newVacancy();
    }
  
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box maxWidth={626} m="30px auto 10px ">
          <Text fontSize={24} mb={30}>
            Создание вакансии
          </Text>
          <form></form>
          <FormControl isRequired>
            <Flex mb="30px">
              <FormLabel w={300} m="20px 50px 10px 00" color="#000000" fontWeight="550">
                Название вакансии
              </FormLabel>
              <Input rounded="4px" name="title" ref={register({ required: true })} placeholder="Text Here" w="70%" m="auto"></Input>
            </Flex>
          </FormControl>
          <FormControl isRequired>
            <Flex mb="30px">
              <FormLabel w={300} m="20px 50px 10px 00" color="#000000" fontWeight="550">
                Специализация
              </FormLabel>
              <Text m="1" borderBottom="2px solid">
                Указать специализацию
              </Text>
            </Flex>
          </FormControl>
          <FormControl isRequired>
            <Flex mb="30px">
              <FormLabel w={300} m="20px 50px 10px 00" color="#000000" fontWeight="550">
                Обязанности
              </FormLabel>
              <Textarea name="responsibilities" ref={register({ required: true })} rounded="4px" placeholder="Text Here" w="70%" m="auto" />
            </Flex>
          </FormControl>
          <FormControl isRequired>
            <Flex mb="30px">
              <FormLabel w={300} m="20px 50px 10px 00" color="#000000" fontWeight="550">
                Ключевые навыки
              </FormLabel>
              <Input name="keySkills" ref={register({ required: true })} rounded="4px" placeholder="Text Here" w="70%" m="auto" />
            </Flex>
          </FormControl>
          <Flex mb="30px">
            <FormLabel w={360} m="20px 50px 10px 0" color="#000000" fontWeight="550">
              Заработная плата
            </FormLabel>
            <FormControl>
              <NumberInput placeholder="От"  rounded="4px 0px 0px 4px" w={"50%"}>
                <NumberInputField  name="salaryFrom" min={0} ref={register({ required: true })}/>
              </NumberInput>
            </FormControl>
            <FormControl>
              <NumberInput placeholder="До" min={0}  w={"50%"}>
                <NumberInputField name="salaryUpTo" ref={register({ required: true })}/>
              </NumberInput>
            </FormControl>
            {/* <FormControl>
              <Select w={"50%"}>
                <option selected value="option1">
                  Руб
                </option>
                <option value="option2">USD</option>
              </Select>
            </FormControl> */}
          </Flex>
          {/* <Box>
            <FormControl>
              <RadioGroup ml="230px" defaultValue="1">
                <Radio value="1" ml={60}>
                  До вычета налога
                </Radio>
                <Radio value="2" ml={60}>
                  На руки
                </Radio>
              </RadioGroup>
            </FormControl>
          </Box> */}
        </Box>
        <Box maxWidth={626} m="30px auto 10px ">
          <FormControl isRequired>
            <Flex>
              <FormLabel w={240} m="20px 50px 10px 00" color="#000000" fontWeight="550">
                Тип занятости
              </FormLabel>
              <Checkbox>Возможно временное оформление</Checkbox>
            </Flex>
            <Grid mb={15}>
              <FormControl>
                <RadioGroup ml="230px" defaultValue="Полная занятость" onChange={(e) => setEmployment(e.target.value)}>
                  <Radio value="Полная занятость" ml={60}>
                    Полная занятость
                  </Radio>
                  <Radio value="Частичная занятость" ml={60}>
                    Частичная занятость
                  </Radio>
                  <Radio value="Проектная работа или разовое задание" ml={60}>
                    Проектная работа или разовое задание
                  </Radio>
                  <Radio value="Волонтерство" ml={60}>
                    Волонтерство
                  </Radio>
                  <Radio value="Стажировка" ml={60}>
                    Стажировка
                  </Radio>
                </RadioGroup>
              </FormControl>
            </Grid>
          </FormControl>
          {/* <FormControl isRequired>
            <Flex mb="30px">
              <FormLabel w={230} color="#000000" fontWeight="550">
                Режим работы
              </FormLabel>
              <CheckboxGroup>
                <Checkbox value="1" ml={60}>
                  Работа только по сб и вс
                </Checkbox>
                <Checkbox value="2" ml={60}>
                  Сменами по 4-6 часов в день
                </Checkbox>
                <Checkbox value="3" ml={60}>
                  Смена после 16:00
                </Checkbox>
              </CheckboxGroup>
            </Flex>
          </FormControl> */}
          <FormControl isRequired>
            <Flex mb="30px">
              <FormLabel w={230} color="#000000" fontWeight="550">
                График работы
              </FormLabel>
              <RadioGroup defaultValue="Полный день" onChange={(e) => setSchedule(e.target.value)}>
                <Radio value="Полный день" ml={60}>
                  Полный день
                </Radio>
                <Radio value="Сменный график" ml={60}>
                  Сменный график
                </Radio>
                <Radio value="Гибкий график" ml={60}>
                  Гибкий график
                </Radio>
                <Radio value="Удаленная работа" ml={60}>
                  Удаленная работа
                </Radio>
                <Radio value="Вахтовый метод" ml={60}>
                  Вахтовый метод
                </Radio>
              </RadioGroup>
            </Flex>
          </FormControl>
          {/* <Box>
            <Flex mb="30px">
              <FormLabel w={240} m="20px 50px 10px 00" color="#000000" fontWeight="550">
                Знание языков
              </FormLabel>
              <FormControl mr="5px">
                <Select borderRadius="4px 0 0 4px">
                  <option selected value="option1">
                    Английский
                  </option>
                  <option value="option2">Русский</option>
                </Select>
              </FormControl>
              <FormControl>
                <Select borderRadius="0 4px 4px 0">
                  <option selected value="option1">
                    Начальный
                  </option>
                  <option value="option2">Углубленный</option>
                  <option value="option3">Профессиональй</option>
                </Select>
              </FormControl>
            </Flex>
          </Box> */}
          <Box>
            <Button
              type="submit"
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
        </form>
      </>
    );
  }
  