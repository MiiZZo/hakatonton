import { Box, Flex, Image, Link } from "@chakra-ui/core";
import NavLink from "next/link";

export default {
  breakpoints: ["3", "48em", "62em", "80em"],
};

export function HeaderTop() {
  return (
    <Flex justifyContent="space-between" alignItems="center" mb="100px">
      <Link href="/vacancies" fontSize={53} fontWeight={900} pl="50px" _focus={{ border: "none" }}>
        <i>SKFU</i>
      </Link>
      <Flex justifyContent="space-between" mr="50px">
        <NavLink href="/vacancies">
          <Link href="#" m="0 20px" _focus={{ border: "none" }} position="relative" className="headerLink">
            <Box
              className="GreenHover"
              zIndex={-1}
              opacity="0"
              position="absolute"
              left="-80px"
              top="-210px"
              background="#27AE60"
              boxShadow="box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25), inset 0px 0px 23px rgba(0, 0, 0, 0.2)"
              borderRadius={30}
              h={250}
              w={250}
            ></Box>
            Вакансии
          </Link>
        </NavLink>
        <NavLink href="/resumes">
          <Link href="#" m="0 20px" _focus={{ border: "none" }} position="relative" className="headerLink">
            <Box
            className="GreenHover"
              zIndex={-1}
              position="absolute"
              left="-80px"
              opacity="0"
              top="-210px"
              background="#27AE60"
              boxShadow="box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25), inset 0px 0px 23px rgba(0, 0, 0, 0.2)"
              borderRadius={30}
              h={250}
              w={250}
            ></Box>
            Резюме
          </Link>
        </NavLink>
      </Flex>
      <NavLink href="/personal-account">
        <Image src="/Ellipse 1.svg" cursor="pointer" h="40px" w="40px" mr="50px"></Image>
      </NavLink>
    </Flex>
  );
}
