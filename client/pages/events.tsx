import { Event } from "../features/event/event";
import { HeaderTop } from "../features/header";
import { Flex, Button, Grid, Box, Heading, SimpleGrid } from "@chakra-ui/core";
import { SumLeftMenu } from "../features/vacancies/vacancy-left-menu";

export default function EventPage() {
  return (
    <>
      <Box m="0 auto" maxW={1670}>
        <HeaderTop />
        <Flex justifyContent="space-between">
          <SumLeftMenu />

          <Box mt="-65px">
            <Flex>
              <Heading fontSize={36} mb="20px" ml="50px">Мероприятия</Heading>
              <Button _focus={{ outline: "none" }} ml="auto" pl="40px" borderRadius="4px" border="1px solid #2D3748" backgroundColor="#fff" _before={{ content: '"+"', zIndex: 50, position: "absolute", top: "2px", left: "10px", color: "black", fontSize: "25px" }} position="relative">Создать Мероприятие</Button>
            </Flex>
            <Flex justifyContent="space-between" flexWrap="wrap" alignItems="flex-start" ml="50px">
              <Event />
              <Event />
              <Event />
              <Event />
              <Event />
              <Event />
              <Event />
              <Event />
              <Event />
              <Event />
              <Event />
              <Event />
            </Flex>
          </Box>
        </Flex>

      </Box>

    </>
  );
}
