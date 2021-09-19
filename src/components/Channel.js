import React, { useState, useEffect } from "react";
import {
  Spacer,
  Box,
  Text,
  VStack,
  Flex,
  Button,
  Image
} from "@chakra-ui/react";
import filter from "../assets/filter.png"
import Header from "./Header";
import Filter from "./Filter";
import Category from "./Category";
import SlideShow from "./SlideShow";

export default function Channel() {



  return (
    <Flex flexDir="row" overflowY="auto" overflowX="hidden">
      <VStack spacing={0}>
       <Header/>
        <Box w="100vw" h="50vh" bg="black">
            {/* <SlideShow/> */}
        </Box>
        <Box w="100vw" h="100vh" px="19.7%" overflowY="scroll">
            <Flex flexDirection="column" pt="32px">
                <Flex align="baseline" pt="32px">
                <Text color="#333333" fontSize="32px" fontWeight="750">Category</Text>
                <Spacer/>
                <Filter/>
                </Flex>

                <Category/>


            </Flex>

        </Box>
      </VStack>
    </Flex>
  );
}
