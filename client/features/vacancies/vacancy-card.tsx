import { Button, Box, Flex, Heading } from "@chakra-ui/core";

export function NewCards() {
  return (
    <Box
      w="1110px"
      overflow="hidden"
      position="relative"
      borderRadius={15}
      background="linear-gradient(135deg, #FFFFFF 0%, #FDFDFD 100%)"
      border="1px solid #E2E8F0"
      display="inline-block"
      padding="30px 50px"
      m="30px 0 10px 0"
    >
      <Flex justifyContent="space-between" fontSize={20} mb="10px">
        <Heading as="h3" fontSize="20px">
          Title Paragraph
        </Heading>
        <Box fontSize={20} color="#fff" textAlign="center" padding-bottom="2px">
          <Box
            zIndex={0}
            position="absolute"
            right="-10%"
            top="-55%"
            background="#27AE60"
            boxShadow="box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25), inset 0px 0px 23px rgba(0, 0, 0, 0.2)"
            borderRadius="50%"
            h={250}
            w={250}
          ></Box>
          <Box zIndex={2} position="absolute" right={5} top={4}>
            1500 Р
          </Box>
        </Box>
      </Flex>
      <Box fontSize="14px" mb="10px">
        ООО “Моя оборона”
      </Box>
      <Box fontSize="14px" mb="10px">
        г. Брусино
      </Box>
      <Box fontSize="16px" mb="10px">
        Officiis placeat distinctio fuga et. In quis vero architecto? Deserunt
        rerum quisquam facere exercitationem et natus ut harum quo suscipit
        dolor eius fugit ex veniam, quas distinctio est tenetur impedit aut
        eaque, eos laborum ea provident dolore? Iusto? Lorem ipsum dolor sit
        amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
        venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus
        non enim praesent elementum facilisis leo, vel fringilla est ullamcorper
        eget nulla facilisi etiam dignissim diam quis
      </Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Box
            fontSize={12}
            color="#2D9CDB"
            border="1px solid #2D9CDB"
            display="inline-block"
            padding="0px 7px"
            borderRadius={5}
          >
            TAG
          </Box>
          <Box
            fontSize={12}
            color="#F2994A"
            border="1px solid #F2994A"
            display="inline-block"
            padding="0px 7px"
            borderRadius={5}
            ml={15}
          >
            TAG
          </Box>
        </Box>
        <Button
          fontSize={12}
          color="#3182CE"
          border="1px solid #3182CE"
          h="21px"
          borderRadius={4}
          _focus={{ outline: "none" }}
          padding="10px 10px"
        >
          Подробнее
        </Button>
      </Flex>
    </Box>
  );
}
