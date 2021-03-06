import { Button, Box, Text, Flex, Heading, Tag, Image } from "@chakra-ui/core";

export function Event() {
  return (
    <>
      <Box rounded={15} border="1px solid #E2E8F0" maxW={300} mb="20px">
        <Image h={130} roundedTop={15} src="fon.svg"></Image>
        <Flex m="0px 24px">
          <Heading size="md">Title Paragraph</Heading>
          <Text color="#BDBDBD" m="auto" mr="-4px">
            21.12.2112
          </Text>
        </Flex>
        <Text m="10px 24px" maxW={252}>
          Lorem ipsum carrots, enhanced undergraduate developer, but they d occaecat time.
        </Text>
        <Flex maxW="252px" m="0 24px 18px">
          <Tag size="sm" mr="5px">
            IT
          </Tag>
          <Tag size="sm" mr="5px">
            SQL
          </Tag>
          <Tag size="sm" background="none" fontSize="14px">
            +7
          </Tag>
          <Button ml="42px" h="30px" fontSize="13px" background="none" border="2px solid #3182CE" color="#3182CE">
            Подробнее
          </Button>
        </Flex>
      </Box>
    </>
  );
}
