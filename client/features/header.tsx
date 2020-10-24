import { Box, Flex, Image, Link } from "@chakra-ui/core";

export function HeaderTop() {
  return (
    <Flex justifyContent="space-between" alignItems="center" mb="100px">
      <Link
        href="#"
        fontSize={53}
        fontWeight={900}
        pl="50px"
        _focus={{ border: "none" }}
      >
        <i>SKFU</i>
      </Link>
      <Flex justifyContent="space-between" mr="50px">
        <Link
          href="#"
          m="0 20px"
          _focus={{ border: "none" }}
          position="relative"
          className="headerLink"
        >
          <Box
            className="GreenHover"
            zIndex={-1}
            position="absolute"
            transform="rotate(30deg)"
            left="-120px"
            top="-210px"
            background="#27AE60"
            boxShadow="box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25), inset 0px 0px 23px rgba(0, 0, 0, 0.2)"
            borderRadius={30}
            h={250}
            w={250}
          ></Box>
          Главная
        </Link>
        <Link
          href="#"
          m="0 20px"
          _focus={{ border: "none" }}
          position="relative"
        >
          <Box
            zIndex={-1}
            display="none"
            position="absolute"
            transform="rotate(29deg)"
            left="-80px"
            top="-210px"
            background="#27AE60"
            boxShadow="box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25), inset 0px 0px 23px rgba(0, 0, 0, 0.2)"
            borderRadius={30}
            h={250}
            w={250}
          ></Box>
          Крутая Главная
        </Link>
        <Link
          href="#"
          m="0 20px"
          _focus={{ border: "none" }}
          position="relative"
        >
          <Box
            zIndex={-1}
            position="absolute"
            transform="rotate(29deg)"
            left="-90px"
            display="none"
            top="-210px"
            background="#27AE60"
            boxShadow="box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25), inset 0px 0px 23px rgba(0, 0, 0, 0.2)"
            borderRadius={30}
            h={250}
            w={250}
          ></Box>
          Мега Главная
        </Link>
        <Link
          href="#"
          m="0 20px"
          _focus={{ border: "none" }}
          position="relative"
        >
          <Box
            display="none"
            zIndex={-1}
            position="absolute"
            transform="rotate(29deg)"
            left="-80px"
            top="-210px"
            background="#27AE60"
            boxShadow="box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25), inset 0px 0px 23px rgba(0, 0, 0, 0.2)"
            borderRadius={30}
            h={250}
            w={250}
          ></Box>
          Снова Главная
        </Link>
      </Flex>
      <Image src="/Ellipse 1.svg" h="40px" w="40px" mr="50px"></Image>
    </Flex>
  );
}
