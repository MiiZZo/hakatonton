import { useRouter } from "next/router";
import { Spinner } from "@chakra-ui/core";
import { useEffect, useState } from "react";
import { AuthForm } from "../features/auth/auth-form/auth-form";
import { useUserContext } from "../store/user";
import { Footer } from "../features/footer/footer"

export default function AuthPage() {
    const [isLoading, setIsLoading] = useState(true);
  const {user} = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (user.auth) {
      router.push("/");
    } else {
      setIsLoading(false);
    }
  });

  if (isLoading) {
    return <Spinner color="blue.500" />;
  }

  return <AuthForm />;
}
