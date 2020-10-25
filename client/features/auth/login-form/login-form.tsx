import { Button, Input, Box, Checkbox } from "@chakra-ui/core";
import { useForm } from "react-hook-form";
import { API_URL } from "../../../constants";
import { User } from "../../../store/user";

interface Props {
  handleLogin: (userData: Partial<User>) => void;
}

export function LoginForm({ handleLogin }: Props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    const login = async () => {
      const res = await fetch(`${API_URL}/auth/signin`, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      if (res.status === 200) {
        const json = await res.json();
        handleLogin(json.data);
      }
    };

    login();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Login" name="email" ref={register({ required: true })} w="80%" m="0 auto" mt={55} />
      <Box position="relative">
        <Input
          placeholder="Password"
          w="80%"
          m="0 auto"
          mt={15}
          type="password"
          pr={70}
          name="password"
          ref={register({ required: true })}
        />
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
        <Checkbox border="2px solid #77777" color="#777777" fontSize={16} outline="none" fontWeight={500}>
          Запомните пароль
        </Checkbox>
      </Box>
      <Box>
        <Input
          cursor="pointer"
          type="submit"
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
          value="Войти"
        />
      </Box>
    </form>
  );
}
