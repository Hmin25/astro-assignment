import React, { useState, useRef, useEffect } from "react";
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
  Spacer,
  Input,
  HStack,
  Text,
  VStack,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import filter from "../assets/filter.png";

export default function Filter({ dataFromParent, setFilteredData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [value, setValue] = useState("");
  const [tempDisplayData, setTempDisplayData] = useState();
  const [minChannelNum, setMinChannelNum] = useState("");
  const [maxChannelNum, setMaxChannelNum] = useState("");

  // useEffect(() => {
  //   sortOrder();
  // }, [tempDisplayData, value]);


  function sortOrder() {
    if (tempDisplayData && tempDisplayData != null && tempDisplayData != undefined) {
      let tempChannelNameList = [];

      if (tempDisplayData && tempDisplayData.length > 0) {
        tempDisplayData.map((data, index) =>
          tempChannelNameList.push(data.title.toUpperCase())
        );
      }

      if (value === "asc") {
        tempChannelNameList.sort();
      } else if(value === "desc"){
        tempChannelNameList.sort().reverse();
      } else{
        return;
      }

      let tempFilteredData = [];

      for (let j = 0; j < tempChannelNameList.length; j++) {
        for (let i = 0; i < tempDisplayData.length; i++) {
          if (
            tempChannelNameList[j] === tempDisplayData[i].title.toUpperCase()
          ) {
            tempFilteredData.push(tempDisplayData[i]);
          }
        }
      }
      setFilteredData(tempFilteredData);
    } else {
      let tempChannelNameList = [];

      if (dataFromParent && dataFromParent.length > 0) {
        dataFromParent.map((data, index) =>
          tempChannelNameList.push(data.title.toUpperCase())
        );
      }

      if (value === "asc") {
        tempChannelNameList.sort();
      } else if(value === "desc"){
        tempChannelNameList.sort().reverse();
      } else{
        return;
      }

      let tempFilteredData = [];

      for (let j = 0; j < tempChannelNameList.length; j++) {
        for (let i = 0; i < dataFromParent.length; i++) {
          if (
            tempChannelNameList[j] === dataFromParent[i].title.toUpperCase()
          ) {
            tempFilteredData.push(dataFromParent[i]);
          }
        }
      }
      setFilteredData(tempFilteredData);
    }
  }

  function sortByChannelNumber() {
    let tempNumberList = [];

    if (dataFromParent && dataFromParent.length > 0) {
      dataFromParent.map((data, index) => tempNumberList.push(data.stbNumber));
    }

    let numberList = [];

    let minMax = [];
    minMax.push(minChannelNum, maxChannelNum);

    let maxNumber = Math.max(...minMax);
    let minNumber = Math.min(...minMax);

    for (let j = minNumber; j <= maxNumber; j++) {
      numberList.push(j.toString());
    }

    if(minChannelNum > maxChannelNum){
      numberList.reverse();
    }

    let tempFilteredData2 = [];

    for (let k = 0; k < numberList.length; k++) {
      for (let i = 0; i < dataFromParent.length; i++) {
        if (numberList[k] === dataFromParent[i].stbNumber) {
          tempFilteredData2.push(dataFromParent[i]);
        }
      }
    }
    setTempDisplayData(tempFilteredData2);
    setFilteredData(tempFilteredData2);
    
  }

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
          <DrawerHeader>Sort by</DrawerHeader>

          <DrawerBody>
            <VStack>
              <Text>Channel Number</Text>
              <HStack>
                <Input
                  maxLength="4"
                  type="number"
                  variant="outline"
                  size="md"
                  w="70px"
                  onBlur={(e) => {
                    setMinChannelNum(e.target.value);
                  }}
                />
                <Text> - </Text>
                <Input
                  maxLength="4"
                  type="number"
                  variant="outline"
                  size="md"
                  w="70px"
                  onBlur={(e) => {
                    setMaxChannelNum(e.target.value);
                  }}
                />
              </HStack>

              <Spacer />
              <Spacer />
              <Spacer />

              <Text>Channel Name</Text>
              <RadioGroup defaultValue="" onChange={setValue} value={value}>
                <Stack spacing={5} direction="row">
                  <Radio color="#E6165D" value="asc">
                    a-z
                  </Radio>
                  <Radio color="#E6165D" value="desc">
                    z-a
                  </Radio>
                </Stack>
              </RadioGroup>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              borderRadius="4px"
              fontSize="14px"
              w="full"
              variant="outline"
              borderColor="#010414"
              borderWidth={2}
              mr={3}
              onClick={() => {
                onClose();
                setMinChannelNum("");
                setMaxChannelNum("");
                setValue("");
                setFilteredData(dataFromParent);
                setTempDisplayData();
              }}
            >
              RESET
            </Button>
            <Button
              borderRadius="4px"
              fontSize="14px"
              w="full"
              bgColor="#E6165D"
              color="white"
              onClick={() => {
                if (minChannelNum != null && maxChannelNum != null) {
                  sortByChannelNumber();
                  sortOrder();
                }
                else{
                  sortOrder();
                }
                // sortOrder();
                onClose();
              }}
            >
              APPLY
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
