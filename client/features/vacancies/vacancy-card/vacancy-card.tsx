import { Button, Box, Flex, Heading, Image, Link } from "@chakra-ui/core";
import NavLink from "next/link";

interface Props {
  id: number;
  title: string;
  salaryFrom: number;
  salaryUpTo: number;
  employment: string;
  schedule: string;
  responsibilities: string;
  keySkills: string;
  employer: any;
}

export function NewCards(props: Props) {
  return (
    <Box
      w="1100px"
      overflow="hidden"
      position="relative"
      borderRadius={15}
      background="linear-gradient(135deg, #FFFFFF 0%, #FDFDFD 100%)"
      border="1px solid #E2E8F0"
      padding="30px 50px"
      m="0px 0 10px 0"
    >
      <Box
        zIndex={0}
        position="absolute"
        right="-14%"
        top="-65%"
        background="#27AE60"
        boxShadow="box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25), inset 0px 0px 23px rgba(0, 0, 0, 0.2)"
        borderRadius="50%"
        h={250}
        w={250}
      ></Box>
      <Flex justifyContent="space-between" fontSize={20} mb="10px">
        <Box>
          <NavLink href={`/vacancy/${props.id}`}>
            <Link>
              <Heading as="h3" fontSize="20px">
                {props.title}
              </Heading>
            </Link>
          </NavLink>
          <Heading as="h3" fontSize="20px" mt="5px" color="#27AE60">
            от {props.salaryFrom} руб.
          </Heading>
        </Box>
        <Box fontSize={20} color="#fff" textAlign="center" padding-bottom="2px">
          <Box zIndex={2} position="absolute" right={5} top={3}>
            <Image src="/star.svg"></Image>
          </Box>
        </Box>
      </Flex>
      <Box fontSize="14px" mb="10px">
        {props.employer.companyName}
      </Box>
      <Box fontSize="14px" mb="10px">
        г. Москва
      </Box>
      <Box fontSize="16px" mb="10px">
        {props.responsibilities}
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
