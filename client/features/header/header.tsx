import { Box, Flex, Image, Link } from "@chakra-ui/core";

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
        <Link href="/vacancies" m="0 20px" _focus={{ border: "none" }} position="relative" className="headerLink">
          <Box
            className="GreenHover"
            opacity="0"
            zIndex={-1}
            position="absolute"
            left="-110px"
            top="-210px"
            background="#27AE60"
            boxShadow="box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25), inset 0px 0px 23px rgba(0, 0, 0, 0.2)"
            borderRadius={30}
            h={250}
            w={250}
          ></Box>
          Главная
        </Link>
        <Link href="/events" m="0 20px" _focus={{ border: "none" }} position="relative" className="headerLink">
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
          Мероприятия
        </Link>
        <Link href="#" m="0 20px" _focus={{ border: "none" }} position="relative" className="headerLink">
          <Box
          className="GreenHover"
            zIndex={-1}
            position="absolute"
            left="-100px"
            opacity="0"
            top="-210px"
            background="#27AE60"
            boxShadow="box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25), inset 0px 0px 23px rgba(0, 0, 0, 0.2)"
            borderRadius={30}
            h={250}
            w={250}
          ></Box>
          Контакты
        </Link>
        <Link href="personal-account" m="0 20px" _focus={{ border: "none" }} position="relative" className="headerLink">
          <Box
            className="GreenHover"
            opacity="0"
            zIndex={-1}
            position="absolute"
            left="-70px"
            top="-210px"
            background="#27AE60"
            boxShadow="box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25), inset 0px 0px 23px rgba(0, 0, 0, 0.2)"
            borderRadius={30}
            h={250}
            w={250}
          ></Box>
          Личный кабинет
        </Link>
      </Flex>
      <Image src="/Ellipse 1.svg" h="40px" w="40px" mr="50px"></Image>
    </Flex>
  );
}
