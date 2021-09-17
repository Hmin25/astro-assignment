import React, { useState, useRef } from "react";
import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerFooter,
  Button,
  Image,
  Box,
  Grid
} from "@chakra-ui/react";
import filter from "../assets/filter.png";

export default function Filter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        bg="transparent"
        _hover={{ bg: "none" }}
        _focus={{ bg: "none", borderColor: "none" }}
        onClick={onOpen}
        fontSize="14px"
        fontWeight="700"
        ref={btnRef} 
      >
        Refine
        <Image src={filter} w="4" h="4" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Channel Number</DrawerHeader>

          <DrawerBody>
              <Grid templateColumns="repeat(3, 1fr)" gap={2}>
              <Button fontSize="14px" fontWeight="400" h="35px">100-199</Button>
              <Button fontSize="14px" fontWeight="400" h="35px">100-199</Button>
              <Button fontSize="14px" fontWeight="400" h="35px">100-199</Button>
              <Button fontSize="14px" fontWeight="400" h="35px">100-199</Button>
              <Button fontSize="14px" fontWeight="400" h="35px">100-199</Button>
              <Button fontSize="14px" fontWeight="400" h="35px">100-199</Button>

              </Grid>
          </DrawerBody>

          <DrawerFooter > 
            <Button borderRadius="4px" fontSize="14px" w="full" variant="outline" borderColor="#010414" borderWidth={2} mr={3} onClick={onClose}>
              RESET
            </Button>
            <Button borderRadius="4px" fontSize="14px" w="full" bgColor="#E6165D" color="white">APPLY</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
