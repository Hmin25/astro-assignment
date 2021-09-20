import React, { useState, useEffect } from "react";
import {
  Text,
  VStack,
  Image,
  HStack,
  Stack,
  Flex,
  Button
} from "@chakra-ui/react";
import Axios from "axios";

export default function ChannelFullDetails (){ 

  return (
    <>
    <Flex px="32%" pt="3.5%" flexDir="column">
      <HStack>
        <Image src="https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/106_144.png"w="70px" h="100%" />
        <VStack align="self-start" spacing={0}>
          <Text>CH103</Text>
          <Text fontWeight="bold">TV3</Text>
        </VStack>
      </HStack>
      <Stack pt="4">
        <Text>TV3 is a Malaysian free-to-air television channel airing various types of programmes, drama and news. Find out more on CH103 now!</Text>
        </Stack>

        <HStack fontSize="12px" fontWeight="400" spacing={0} pt="6%">
          <Button textAlign="left" size="sm" bg="none" _hover={{bg:"none", fontWeight:"bold"}}>TODAY</Button>
          <Button size="sm" bg="none" _hover={{bg:"none", fontWeight:"bold"}}>MON</Button>
          <Button size="sm" bg="none" _hover={{bg:"none", fontWeight:"bold"}}>TUE</Button>
          <Button size="sm" bg="none" _hover={{bg:"none", fontWeight:"bold"}}>WED</Button>
          <Button size="sm" bg="none" _hover={{bg:"none", fontWeight:"bold"}}>THU</Button>
          <Button size="sm" bg="none" _hover={{bg:"none", fontWeight:"bold"}}>FRI</Button>
          <Button size="sm"bg="none" _hover={{bg:"none", fontWeight:"bold"}}>SAT</Button>

        </HStack>
        </Flex>
    </>
  );
}
