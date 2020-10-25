import { Box, Flex, Image, Link } from "@chakra-ui/core";

export function Footer() {
    return (
        <Box padding="10px 0" borderTop="2px solid #f1f1f1" mt="50px">
            <Flex justifyContent="space-evenly" alignItems="center">
                <Box><Link href="tel:88003553535" fontSize="24px">8-(800)-355-35-35</Link></Box>
                <Flex>
                    <Link href="#"><Image src="/facebook.svg" margin="0 30px" h="41px" w="20px"></Image></Link>
                    <Link href="#"><Image src="/twiter.svg" margin="0 30px" h="41px" w="20px"></Image></Link>
                    <Link href="#"><Image src="/inst.svg" margin="0 30px" h="41px" w="20px"></Image></Link>
                </Flex>
                <Link href="mailto:info@skfu.com" fontSize="24px">info@skfu.com</Link>
            </Flex>
            <Flex justifyContent="center" alignItems="center" m="10px 0">
                <Box textAlign="center" fontSize="20px" color="#111111">Copyright © 2020. Kraktus</Box>
                <Box textAlign="center" fontSize="20px" margin="0px 10px"><Image src="/kraktus.svg"></Image></Box>
                <Box textAlign="center" fontSize="20px"> All rights reserved.</Box>
            </Flex>
        </Box>
    );
}