import {
  Button,
  Box,
  Input,
  Checkbox,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Radio,
  RadioGroup
} from "@chakra-ui/core";
import { RegistrationStudent } from "../auth/registration-student";
import { RegistrationOrganizations } from "../auth/registration-organizations";
import { useState } from "react";

export function LoginForm() {
  const [formType, setFormType] = useState<"student" | "employer">("student");

  const handleChangeForm = (e) => {
    setFormType(e.target.value);
  }

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      backgroundColor="#ccc"
    >
      <Box
        backgroundColor="#FFFFFF;"
        boxShadow="0px 35px 80px rgba(0, 0, 0, 0.05), 0px 14.6222px 38.8187px rgba(0, 0, 0, 0.0359427), 0px 7.81771px 25.3357px rgba(0, 0, 0, 0.0298054), 0px 4.38254px 17.5049px rgba(0, 0, 0, 0.025), 0px 2.32754px 11.4114px rgba(0, 0, 0, 0.0201946), 0px 0.96854px 5.75589px rgba(0, 0, 0, 0.0140573);"
        borderRadius={30}
        w={510}
        minH={400}
        pb={10}
        margin="30px 0"
      >
        <Tabs>
          <TabList display="flex" justifyContent="center" pt={50} border="none">
            <Tab
              _focus={{ borderColor: "inherit" }}
              _active={{ borderColor: "inherit" }}
              fontSize={18}
            >
              Авторизация
            </Tab>
            <Tab
              _focus={{ borderColor: "inherit" }}
              _active={{ borderColor: "inherit" }}
              fontSize={18}
            >
              Регистрация
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Input placeholder="Login" w="80%" m="0 auto" mt={55}></Input>
              <Box position="relative">
                <Input
                  placeholder="Password"
                  w="80%"
                  m="0 auto"
                  mt={15}
                  type="password"
                  pr={70}
                ></Input>
                <Button
                  top={0}
                  right={50}
                  position="absolute"
                  zIndex={50}
                  border={0}
                  color="#718096"
                  bg="none"
                  _hover={{ bg: "inherit" }}
                  _focus={{ bg: "inherit" }}
                  _active={{ bg: "inherit" }}
                >
                  SHOW
                </Button>
              </Box>
              <Box ml="52px" mt="20px">
                <Checkbox
                  border="2px solid #77777"
                  color="#777777"
                  fontSize={16}
                  outline="none"
                  fontWeight={500}
                >
                  Запомните пароль
                </Checkbox>
              </Box>
              <Box>
                <Button
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
                >
                  Войти
                </Button>
              </Box>
            </TabPanel>
            <TabPanel>
              <RadioGroup defaultValue="student" mt={5} onChange={handleChangeForm}>
                <Radio value="student" ml={60}>
                  Студент
                </Radio>
                <Radio value="employer" ml={60} >
                  Работодатель
                </Radio>
              </RadioGroup>
              {formType === "student" && <RegistrationStudent /> || <RegistrationOrganizations />}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}
