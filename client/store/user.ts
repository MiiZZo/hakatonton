import { createContext, useContext, useState } from "react";

export interface User {
  user: {
    auth: boolean;
    role: "student" | "employer" | "ghost";
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };
  handleSetUser: (userData: Partial<User["user"]>) => void;
}

export const UserContext = createContext<User>({
  user: {
    auth: false,
    role: "ghost",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  },
  handleSetUser: () => {}
});

export const useUserContext = () => useContext(UserContext);
