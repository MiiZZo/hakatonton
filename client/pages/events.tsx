import { Event } from "../features/event/event";
import { HeaderTop } from "../features/header";
import { Flex, Button, Grid, Box, Heading, SimpleGrid } from "@chakra-ui/core";
import { SumLeftMenu } from "../features/vacancies/vacancy-left-menu";

export default function EventPage() {
  return (
    <>
      <HeaderTop  />
      
      
      <Grid   alignItems="flex-start" maxW={1550}>

      <Flex>
        <Heading fontSize={36} ml={390} mb="20px">Мероприятия</Heading>
        <Button _focus={{ outline: "none" }} ml="auto"  pl="40px" borderRadius="4px" border="1px solid #2D3748" backgroundColor="#fff" _before={{ content: '"+"', zIndex: 50, position: "absolute", top: "2px", left: "10px",  color: "black", fontSize: "25px" }} position="relative">Создать Мероприятие</Button> 
      </Flex>
      <Flex>
        <SumLeftMenu />

        <SimpleGrid ml={33} columns={4} spacingX={30} spacingY={35}>
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
        </SimpleGrid>
      </Flex>
        
      </Grid>
    </>
  );
}
