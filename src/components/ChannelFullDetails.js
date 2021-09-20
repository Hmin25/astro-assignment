import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Text,
  VStack,
  Image,
  HStack,
  Stack,
  Flex,
  Button,
  Box,
} from "@chakra-ui/react";
import Axios from "axios";
import Header from "./Header";

export default function ChannelFullDetails() {

  let {id, name} = useParams();

  const DAY = {
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
  };
  const [currentChannelData, setCurrentChannelData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getCurrentIdData() {
      await Axios.get(
        // `https://contenthub-api.eco.astro.com.my/channel/${id}.json  `
        `http://localhost:3000/temp.json`
      )
        .catch((err) => {
          console.log(err);
        })
        .then((res) => {
          setCurrentChannelData(res.data.response);
        });
    }
    getCurrentIdData();
  }, []);

  // function displayChannelDetails() {}

  const displayCurrentChannelDetails = () => {
    if (currentChannelData && currentChannelData.length > 0) {
      return currentChannelData.map((currentChannel, index) => (
        <>
          <Stack pl="26%" flexDir="row" align="baseline">
            <Button
              bgColor="transparent"
              _hover={{ bg: "none", fontWeight: "bold" }}
              onClick={() => history.push("/")}
            >
              content
            </Button>
            <Text> {" > "} </Text>
            <Button
              cursor="text"
              fontStyle="normal"
              bgColor="transparent"
              _hover={{ bg: "none" }}
            >
              {currentChannel.title}
            </Button>
          </Stack>
          <Flex px="32%" pt="3.5%" flexDir="column">
            <HStack>
              <Image src={currentChannel.originalImage} w="70px" h="100%" />
              <VStack align="self-start" spacing={0}>
                <Text>CH{currentChannel.stbNumber}</Text>
                <Text fontWeight="bold">{currentChannel.title}</Text>
              </VStack>
            </HStack>
            <Stack pt="4">
              <Text>{currentChannel.description}</Text>
            </Stack>

            <HStack fontSize="12px" fontWeight="400" spacing={0} pt="6%">
              <Button
                textAlign="left"
                size="sm"
                bg="none"
                _hover={{ bg: "none", fontWeight: "bold" }}
              >
                TODAY
              </Button>
              <Button
                size="sm"
                bg="none"
                _hover={{ bg: "none", fontWeight: "bold" }}
              >
                MON
              </Button>
              <Button
                size="sm"
                bg="none"
                _hover={{ bg: "none", fontWeight: "bold" }}
              >
                TUE
              </Button>
              <Button
                size="sm"
                bg="none"
                _hover={{ bg: "none", fontWeight: "bold" }}
              >
                WED
              </Button>
              <Button
                size="sm"
                bg="none"
                _hover={{ bg: "none", fontWeight: "bold" }}
              >
                THU
              </Button>
              <Button
                size="sm"
                bg="none"
                _hover={{ bg: "none", fontWeight: "bold" }}
              >
                FRI
              </Button>
              <Button
                size="sm"
                bg="none"
                _hover={{ bg: "none", fontWeight: "bold" }}
              >
                SAT
              </Button>
            </HStack>
          </Flex>
        </>
      ));
    }
  };

  // return <Box>{currentChannelData && displayCurrentChannelDetails()}</Box>;
  return( <> <Text>Current ID is: {id}</Text>
  {currentChannelData && displayCurrentChannelDetails()} </>);
}
