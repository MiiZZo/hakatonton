import {
  Button,
  Box,
  Input,
  Text,
  Checkbox,
  Stack,
  Flex,
  Heading,
  Tag,
  Textarea,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Select,
  FormControl,
  Radio,
  RadioGroup,
  FormLabel,
  Grid
} from "@chakra-ui/core";

export function Event() {
  return (
    <>
      <Box rounded={15} border="1px solid #E2E8F0" maxH={300} maxW={300}>
        <Box h={130} roundedTop={15} background="#f1f1f1"></Box>
        <Flex  m="10px 24px">
          <Heading  size="md" >Title Paragraph</Heading>
          <Text m="auto" mr="-4px" >
            21.12.2112
          </Text>
        </Flex>
        <Text m="10px 24px" maxW={252}>
          Lorem ipsum carrots, enhanced undergraduate developer, but they do
          occaecat time.
        </Text>
        <Flex maxW="252px" m="0px 24px 18px">
            <Tag mr="5px" >IT</Tag>
            <Tag textAlign="center"  >SQL</Tag>
            <Text mt="6px" fontSize="14px">+7</Text> 
            <Button ml="42px" h="30px" background="none" border="2px solid #3182CE" color= "#3182CE">Подробнее</Button>
        </Flex>
        
      </Box>
    </>
  );
}
