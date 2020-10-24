import { Button, Link, Box, Flex, Select, Image, Stack, Tag, TagLabel, TagCloseButton } from "@chakra-ui/core";


export function NewCardsAccount() {
    return (
        <Flex w="1100px" justifyContent="space-between" alignItems="center" background="linear-gradient(135deg, #FFFFFF 0%, #FDFDFD 100%)" border="1px solid #CBD5E0" padding="10px" mb="15px">
            <Flex alignItems="center">
                <Box><Image src="/accout.svg" h="50px" w="50px"></Image></Box>
                <Box ml={5}>
                    <Box fontSize="18px" fontWeight="550">Маслёнок Алексей</Box>
                    <Flex alignItems="center">
                        <Tag color="#EB5757" border="1px solid #EB5757" background="inherit">IT</Tag>
                        <Tag ml={2} fontSize="12px" color="#F2994A" border="1px solid #F2994A" background="inherit">SQL</Tag>
                        <Tag ml={2} fontSize="12px" color="#27AE60" border="1px solid #27AE60" background="inherit">PHP</Tag>
                        <Box ml={2} fontSize="12px" color="#828282">+7</Box>
                    </Flex>
                </Box>
                <Flex alignItems="center">
                    <Box color="#FD7474" ml={5} border="1px solid #FD7474" fontSize="18px" padding="0px 10px" rounded={7}>5 Курс</Box>
                    <Box color="#27AE60" ml={3} border="1px solid #27AE60" fontSize="18px" rounded={7} padding="0px 10px">Прикл. инф.</Box>
                    <Box color="#FD7474" ml={3} border="1px solid #FD7474" fontSize="18px" rounded={7} padding="0px 10px">Трудовая книга</Box>
                    <Box color="#BB6BD9" ml={3} border="1px solid #BB6BD9" fontSize="18px" rounded={7} padding="0px 10px">Достижения</Box>
                </Flex>
            </Flex>
            <Flex alignItems="center">
                <Link mr="10px"><Image src="/chat.svg"></Image></Link>
                <Button color="#3182CE" background="inherit" fontWeight="550" border="1px solid #3182CE" fontSize="12px" rounded={7} padding="0px 10px" h="21px" _focus={{ outline: 'none' }}>Подробнее</Button>
            </Flex>
        </Flex>
    );
}