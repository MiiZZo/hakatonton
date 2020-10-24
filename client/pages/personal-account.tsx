import { SumLeftMenu } from "../features/vacancies/vacancy-left-menu/vacancy-left-menu";
import { NewCards } from "../features/vacancies/vacancy-card/vacancy-card";
import { HeaderTop } from "../features/header/header";
import { Button, Box, Flex, Select, Image, Stack, Tag, TagLabel, TagCloseButton } from "@chakra-ui/core";
import { NewCardsAccount } from "../features/new-cards-personal/new-cards-personal"
import { Footer } from "../features/footer/footer"


export default function PersonalAccount() {
    return (
        <>
            <HeaderTop />
            <Flex maxW={1670} margin="0 auto" padding="0 20px">
                <SumLeftMenu />
                <Box w="1110px" ml="50px">

                    <Flex justifyContent="space-between" mt="-60px">
                        <Flex flexDirection="column" h="300px" justifyContent="space-between" background="linear-gradient(135deg, #FFFFFF 0%, #FDFDFD 100%)" rounded={14} border="1px solid #CBD5E0" w="550px" padding="10px 20px">
                            <Box>
                                <Box fontSize="24px" fontWeight="700">Название учебного заведения</Box>
                                <Box fontSize="16px">Lorem ipsum carrots, enhanced undergraduate developer, but they do occaecat time and vitality, such as labor and obesity. </Box>
                            </Box>
                            <Flex justifyContent="space-between" fontWeight="550" fontSize="20px">
                                <Flex alignItems="center" mb="10px">
                                    <Tag color="#EB5757" border="1px solid #EB5757" background="inherit">IT</Tag>
                                    <Tag ml={2} fontSize="12px" color="#F2994A" border="1px solid #F2994A" background="inherit">SQL</Tag>
                                    <Tag ml={2} fontSize="12px" color="#27AE60" border="1px solid #27AE60" background="inherit">PHP</Tag>
                                    <Box ml={2} fontSize="12px" color="#828282">+15</Box>
                                </Flex>
                                <Box>256</Box>
                            </Flex>
                        </Flex>

                        <Flex flexDirection="column" h="300px" justifyContent="space-between" background="linear-gradient(135deg, #FFFFFF 0%, #FDFDFD 100%)" rounded={14} border="1px solid #CBD5E0" w="500px" padding="10px 20px">
                            <Box>
                                <Box fontSize="24px" fontWeight="700">Статистика</Box>
                            </Box>
                            <Flex alignItems="center" mb="10px">

                            </Flex>
                        </Flex>
                    </Flex>

                    <Flex mb="21px" justifyContent="space-between">
                        <Box as="h2" fontSize="36px" fontWeight="550">Студенты</Box>
                    </Flex>

                    <NewCardsAccount />
                    <NewCardsAccount />
                    <NewCardsAccount />
                    <NewCardsAccount />
                    <NewCardsAccount />
                    <NewCardsAccount />
                    <NewCardsAccount />
                    <NewCardsAccount />
                </Box>
            </Flex>
            
            <Footer />
        </>
    );
}
