import React, { useState, useDisclosure, useRef } from "react";
import {
  Spacer,
  Box,
  Text,
  VStack,
  Flex,
  Stack,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerFooter,
  Button,
  Image
} from "@chakra-ui/react";
import filter from "../assets/filter.png"
import Header from "./Header";
import Filter from "./Filter";

export default function Channel() {


  return (
    <Flex flexDir="row" overflowY="auto" overflowX="hidden">
      <VStack spacing={0}>
       <Header/>
        <Box w="100vw" h="50vh" bg="black" />
        <Box w="100vw" h="100vh" px="19.7%">
            <Flex flexDirection="column" pt="32px">
                <Flex align="baseline">
                <Text color="#333333" fontSize="32px" fontWeight="750">Category</Text>
                <Spacer/>
                <Filter/>
                </Flex>
            </Flex>

        </Box>
      </VStack>
    </Flex>
  );
}
