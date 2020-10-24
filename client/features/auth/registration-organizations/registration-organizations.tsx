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
  FormLabel
} from "@chakra-ui/core";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { API_URL } from "../../../constants";

export function RegistrationOrganizations() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  function onSubmit(values) {
    console.log(values);
    const register = async () => {
      const res = await fetch(`${API_URL}/auth/signup/employer`, {
        mode: "cors",
        method: "post",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      if (res.status === 201) {
        router.push("/vacancies");
      }
    };

    register();
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired>
          <FormLabel m="20px 50px 10px 50px" color="#000000" fontWeight="550">
            Имя
          </FormLabel>
          <Input
            name="firstName"
            placeholder="Text"
            w="80%"
            m="0 auto"
            ref={register({ required: true, minLength: 2 })}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel m="20px 50px 10px 50px" color="#000000" fontWeight="550">
            Фамилия
          </FormLabel>
          <Input
            name="lastName"
            placeholder="Text"
            w="80%"
            m="0 auto"
            ref={register({ required: true, minLength: 2 })}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel m="20px 50px 10px 50px" color="#000000" fontWeight="550">
            E-mail
          </FormLabel>
          <Input name="email" ref={register({ required: true })} placeholder="Text" w="80%" m="0 auto" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel m="20px 50px 10px 50px" color="#000000" fontWeight="550">
            Пароль
          </FormLabel>
          <Input
            type="password"
            placeholder="Text"
            w="80%"
            m="0 auto"
            name="password"
            ref={register({ required: true, minLength: 8 })}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel m="20px 50px 10px 50px" color="#000000" fontWeight="550">
            Телефон
          </FormLabel>
          <Input placeholder="Text" w="80%" m="0 auto" name="phoneNumber" ref={register({ required: true })} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel m="20px 50px 10px 50px" color="#000000" fontWeight="550">
            Компания
          </FormLabel>
          <Input placeholder="Text" name="companyName" ref={register({ required: true })} w="80%" m="0 auto"></Input>
        </FormControl>
        <Box ml="52px" mt="20px">
          <Checkbox border="2px solid #77777" color="#777777" fontSize={16} outline="none" fontWeight={500}>
            Пользовательское соглашения
          </Checkbox>
        </Box>
        <Box>
          <Input
            type="submit"
            cursor="pointer"
            ml="auto"
            display="block"
            mr="50px"
            bg="#2A69AC"
            borderRadius={4}
            w={110}
            h={41}
            color="#fff"
            _hover={{ bg: "#2A69AC" }}
            _focus={{ bg: "#2A69AC" }}
            _active={{ bg: "inherit" }}
          ></Input>
        </Box>
      </form>
    </>
  );
}
