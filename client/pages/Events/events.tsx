import { Event } from "../../features/event/event";
import { HeaderTop } from "../../features/header";
import { Flex, Box, Heading, SimpleGrid } from "@chakra-ui/core";
import { SumLeftMenu } from "../../features/vacancies/vacancy-left-menu";

export default function EventPage() {
  return (
    <>
      <HeaderTop />
      <Heading fontSize={36} ml={390} mb={10}>
        Мероприятия
      </Heading>
      <Flex alignItems="flex-start" maxW={1550}>
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
    </>
  );
}
