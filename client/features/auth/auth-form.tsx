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
import { RegistrationStudent } from "./registration-student";
import { RegistrationOrganizations } from "./registration-organizations";
import { useState } from "react";
import { LoginForm } from "./login-form";
import { User, useUserContext } from "../../store/user";

export function AuthForm() {
  const [formType, setFormType] = useState<"student" | "employer">("student");
  const { user, handleSetUser } = useUserContext();

  const handleChangeForm = (e) => {
    setFormType(e.target.value);
  };

  const handleLogin = (userData: Partial<User>) => {
    handleSetUser({ ...userData, auth: true });
  };

  return (
    <Flex justifyContent="center" alignItems="center" minH="100vh" backgroundColor="#ccc">
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
            <Tab _focus={{ borderColor: "inherit" }} _active={{ borderColor: "inherit" }} fontSize={18}>
              Авторизация
            </Tab>
            <Tab _focus={{ borderColor: "inherit" }} _active={{ borderColor: "inherit" }} fontSize={18}>
              Регистрация
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <LoginForm handleLogin={handleLogin} />
            </TabPanel>
            <TabPanel>
              <RadioGroup defaultValue="student" mt={5} onChange={handleChangeForm}>
                <Radio value="student" ml={60}>
                  Студент
                </Radio>
                <Radio value="employer" ml={60}>
                  Работодатель
                </Radio>
              </RadioGroup>
              {(formType === "student" && <RegistrationStudent />) || <RegistrationOrganizations />}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}
