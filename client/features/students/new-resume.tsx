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
import { userInfo } from "os";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { API_URL } from "../../constants";
import { useUserContext } from "../../store/user";

export function NewResume() {
  const { user, handleSetUser } = useUserContext();
  const { register, handleSubmit } = useForm();
  const [gender, setGender] = useState<"male" | "female">("male");

  const onSubmit = (values) => {
    const newResume = async () => {
      const res = await fetch(`${API_URL}/resumes`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({ ...values, gender }),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      console.log(res);

      if (res.status === 201) {
        const json = await res.json();

        if (user.resumes !== null) {
          const resumes = user.resumes.slice();
          resumes.push(json.data);
          handleSetUser({ resumes });
        }
      }
    };

    newResume();
  };

  return (
    <Box maxWidth={626} m="30px auto 10px ">
      <Text fontSize={24} mb={30}>
        Ваше резюме
      </Text>
      <Heading fontSize={18} mb={10}>
        Контактные данные
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired>
          <Flex mb="30px">
            <FormLabel w={300} color="#000000" fontWeight="550">
              Пол
            </FormLabel>
            <RadioGroup defaultValue="male" onChange={(e) => setGender(e.target.value as any)}>
              <Radio value="male" ml={60}>
                Мужской
              </Radio>
              <Radio value="female" ml={60}>
                Женский
              </Radio>
            </RadioGroup>
          </Flex>
        </FormControl>
        <FormControl isRequired>
          <Flex mb="30px">
            <FormLabel w={300} m="20px 50px 10px 00" color="#000000" fontWeight="550">
              Телефон
            </FormLabel>
            <Input
              rounded="4px"
              placeholder="Text Here"
              w="70%"
              m="auto"
              name="phoneNumber"
              ref={register({ required: true })}
            />
          </Flex>
        </FormControl>
        <FormControl isRequired>
          <Flex mb="30px">
            <FormLabel w={300} m="20px 50px 10px 00" color="#000000" fontWeight="550">
              Место проживания
            </FormLabel>
            <Input
              rounded="4px"
              name="address"
              placeholder="Text Here"
              w="70%"
              m="auto"
              ref={register({ required: true })}
            />
          </Flex>
        </FormControl>
        <FormControl isRequired>
          <Flex mb="30px">
            <FormLabel w={300} m="20px 50px 10px 00" color="#000000" fontWeight="550">
              Цель
            </FormLabel>
            <Input
              rounded="4px"
              placeholder="Text Here"
              w="70%"
              m="auto"
              name="goal"
              ref={register({ required: true })}
            />
          </Flex>
        </FormControl>
        <FormControl isRequired>
          <Flex mb="30px">
            <FormLabel w={300} m="20px 50px 10px 00" color="#000000" fontWeight="550">
              Образование
            </FormLabel>
            <Textarea
              rounded="4px"
              placeholder="-"
              w="70%"
              m=" auto"
              name="education"
              ref={register({ required: true })}
            />
          </Flex>
        </FormControl>
        <FormControl isRequired>
          <Flex mb="30px">
            <FormLabel w={300} m="20px 50px 10px 00" color="#000000" fontWeight="550">
              Опыт работы
            </FormLabel>
            <Textarea
              rounded="4px"
              name="workExperience"
              placeholder="-"
              w="70%"
              m=" auto"
              ref={register({ required: true })}
            ></Textarea>
          </Flex>
        </FormControl>
        <FormControl isRequired>
          <Flex mb="30px">
            <FormLabel w={300} m="20px 50px 10px 0" color="#000000" fontWeight="550">
              Дополнительные качества
            </FormLabel>
            <Input
              ref={register({ required: true })}
              name="extraSkills"
              rounded="4px"
              placeholder="Text Here"
              w="70%"
              m=" auto"
            ></Input>
          </Flex>
        </FormControl>
        <FormControl isRequired>
          <Flex mb="30px">
            <FormLabel w={300} m="20px 50px 10px 0" color="#000000" fontWeight="550">
              Личние качества
            </FormLabel>
            <Input
              ref={register({ required: true })}
              name="personalQualities"
              rounded="4px"
              placeholder="Text Here"
              w="70%"
              m=" auto"
            ></Input>
          </Flex>
        </FormControl>
        <FormControl isRequired>
          <Flex mb="30px">
            <FormLabel w={300} m="20px 50px 10px 0" color="#000000" fontWeight="550">
              Достижения
            </FormLabel>
            <Textarea
              name="achievements"
              rounded="4px"
              placeholder="-"
              ref={register({ required: true })}
              w="70%"
              m=" auto"
            ></Textarea>
          </Flex>
        </FormControl>
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
      </form>
    </Box>
  );
}
