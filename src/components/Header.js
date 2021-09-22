import React, { useState } from "react";
import {
  Spacer,
  Box,
  Text,
  VStack,
  Stack,
  HStack,
  Button,
  Image,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export default function Header() {
  return (
    <>
      {/* Header top bar */}
      <HStack w="100vw" h="10" bg="#010414">
        <HStack pl={["0px", "1px", "2px", "19%"]} spacing={6}>
          <Text
            as="button"
            _hover={{ fontWeight: "bold" }}
            color="white"
            fontSize={["8px", "10px", "10px", "14px"]}
            fontStyle="FS Albert Pro"
          >
            Consumer
          </Text>
          <Text
            as="button"
            _hover={{ fontWeight: "bold" }}
            color="white"
            fontSize={["8px", "10px", "10px", "14px"]}
            fontStyle="FS Albert Pro"
          >
            Business
          </Text>
          <Text
            as="button"
            _hover={{ fontWeight: "bold" }}
            color="white"
            fontSize={["8px", "10px", "10px", "14px"]}
            fontStyle="FS Albert Pro"
          >
            Corporate
          </Text>
          <Text
            as="button"
            _hover={{ fontWeight: "bold" }}
            color="white"
            fontSize={["8px", "10px", "10px", "14px"]}
            fontStyle="FS Albert Pro"
          >
            Our Brands
          </Text>
        </HStack>
        <Spacer />
        <HStack pr={["0px", "1px", "2px", "19%"]}>
          <HStack spacing={0}>
            <Search2Icon color="white" />
            <Button bg="transparent" _hover={{ bg: "none" }} size="sm">
              <Text
                color="white"
                fontSize={["8px", "10px", "10px", "14px"]}
                fontStyle="FS Albert Pro"
              >
                Search
              </Text>
            </Button>
          </HStack>
          <HStack spacing={0}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path
                fill="#fff"
                d="M17.2 18a.8.8 0 01-.795-.706l-.009-.235a2.4 2.4 0 00-2.255-2.259H6a2.4 2.4 0 00-2.4 2.4.8.8 0 01-1.6 0 4 4 0 013.827-4H14a4 4 0 014 4 .8.8 0 01-.8.8zM10 11.6a4.8 4.8 0 114.8-4.8 4.805 4.805 0 01-4.8 4.8zm0-8a3.2 3.2 0 103.2 3.2A3.2 3.2 0 0010 3.6z"
              />
            </svg>
            <Button bg="transparent" _hover={{ bg: "none" }} size="sm">
              <Text
                color="white"
                fontSize={["8px", "10px", "10px", "14px"]}
                fontStyle="FS Albert Pro"
              >
                Login
              </Text>
            </Button>
          </HStack>
        </HStack>
      </HStack>

      {/* Header second bar */}
      <HStack w="100vw" h="8.3vh" bg="#E6165D">
        <HStack pl={["1px", "1px", "2px", "19.7%"]} spacing={7}>
          <HStack bg="transparent" w={["50px", "50px", "50px", "95px"]}>
            <Image
              src="https://acm-assets.eco.astro.com.my/images/astro-logo-white.svg"
              w={["40px", "40px", "50px", "76px"]}
              h={["18px", "18px", "20px", "32px"]}
            />
          </HStack>
          <Text
            as="button"
            fontWeight="bold"
            color="white"
            fontSize={["8px", "10px", "10px", "14px"]}
            fontStyle="FS Albert Pro"
          >
            Products & Services
          </Text>
          <Text
            as="button"
            fontWeight="bold"
            color="white"
            fontSize={["8px", "10px", "10px", "14px"]}
            fontStyle="FS Albert Pro"
          >
            TV Guide
          </Text>
          <Text
            as="button"
            fontWeight="bold"
            color="white"
            fontSize={["8px", "10px", "10px", "14px"]}
            fontStyle="FS Albert Pro"
          >
            Promotions
          </Text>
          <Text
            as="button"
            fontWeight="bold"
            color="white"
            fontSize={["8px", "10px", "10px", "14px"]}
            fontStyle="FS Albert Pro"
          >
            My Account
          </Text>
          <Text
            as="button"
            fontWeight="bold"
            color="white"
            fontSize={["8px", "10px", "10px", "14px"]}
            fontStyle="FS Albert Pro"
          >
            Support
          </Text>
        </HStack>
      </HStack>
    </>
  );
}
