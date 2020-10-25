import { CSSReset, ThemeProvider, Box } from "@chakra-ui/core";
import { useState } from "react";
import { User, UserContext } from "../store/user";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState<User["user"]>({
    auth: false,
    role: "ghost",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    resumes: null
  });

  const handleSetUser = (userData: Partial<User["user"]>) => {
    setUser({ ...user, ...userData });
  };

  return (
    <ThemeProvider>
      <CSSReset />
      <UserContext.Provider value={{ user, handleSetUser }}>
          <Component {...pageProps} />
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
