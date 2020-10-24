import { Button, Box, Textarea, Text, Flex, FormControl, Input, FormLabel, Heading, Tag, Image } from "@chakra-ui/core";

export function NewEvent() {
  return (
        <>
        <Box maxW={[326, 626]} >
            <Heading fontSize={18} mb={10}> Создание мероприятия</Heading>
        <FormControl isRequired>
            <Flex mb="30px">
                <FormLabel w={[150 ,300]} m="20px 50px 10px 00" color="#000000" fontWeight="550">
                Название мероприятия
                </FormLabel>
                <Input rounded="4px" placeholder="Text Here" w="70%" m="auto"></Input>
            </Flex>
            </FormControl>
            <FormControl isRequired>
            <Flex mb="30px">
                <FormLabel w={[150 ,300]} m="20px 50px 10px 00" color="#000000" fontWeight="550">
                Описание мероприятия
                </FormLabel>
                <Textarea rounded="4px" placeholder="Text Here" w="70%" m="auto" />
            </Flex>
            </FormControl>
            <FormControl isRequired>
            <Flex mb="30px">
                <FormLabel w={[150 ,300]} m="20px 50px 10px 00" color="#000000" fontWeight="550">
                Дата проведения
                </FormLabel>
                <Input rounded="4px" placeholder="Text Here" w="70%" m="auto"></Input>
            </Flex>
            </FormControl>
            <FormControl isRequired>
            <Flex mb="30px">
                <FormLabel w={[150 ,300]} m="20px 50px 10px 00" color="#000000" fontWeight="550">
                Дата проведения
                </FormLabel>
                <Input rounded="4px" type="file" w="70%" m="auto"></Input>
            </Flex>
            </FormControl>
            <Flex>
                <Button w={[53, 123]} fontSize={[11, 18]} mr="30px" background="#27AE60" color="white">Создать</Button>
                <Button w={[179, 249]} fontSize={[11, 18]} mr="30px" background="none" border="2px solid #27AE60" color="#27AE60">Сохранить в черновик</Button>
                <Button w={[111, 181]} fontSize={[11, 18]} background="none" border="2px solid #828282" color="#828282">Предпросмотр</Button>
            </Flex>
        </Box>
        </>
  );
}