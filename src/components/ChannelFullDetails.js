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
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import Axios from "axios";

export default function ChannelFullDetails() {
  const [currentChannelData, setCurrentChannelData] = useState([]);
  const [individualDayData, setIndividualDayData] = useState([]);
  const [fullScheduleData, setFullScheduleData] = useState([]);
  const history = useHistory();

  let { id, name } = useParams();

  const DAY = {
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
  };

  const actualToday = new Date().getDay();

  function getDayStringBasedOnNumber(dayNumber) {
    switch (dayNumber) {
      case DAY.SUNDAY:
        return "SUN";
        break;
      case DAY.MONDAY:
        return "MON";
        break;
      case DAY.TUESDAY:
        return "TUE";
        break;
      case DAY.WEDNESDAY:
        return "WED";
        break;
      case DAY.THURSDAY:
        return "THU";
        break;
      case DAY.FRIDAY:
        return "FRI";
        break;
      case DAY.SATURDAY:
        return "SAT";
        break;
      default:
        console.log("Not supposed to see this! Day is not within SUN to SAT");
        break;
    }
  }

  useEffect(() => {
    async function getCurrentChannelData() {
      await Axios.get(
        `https://contenthub-api.eco.astro.com.my/channel/${id}.json  `
        // `http://localhost:3000/temp.json`
      )
        .catch((err) => {
          console.log(err);
        })
        .then((res) => {
          let data = [];
          data.push(res.data.response);

          let scheduleData = Object.values(data[0].schedule);

          // First one is always today
          scheduleData[0].currentDay = "TODAY";
          scheduleData[0].currentDayNumber = actualToday;

          // scheduleData.length is always 7
          for (let i = 1; i < scheduleData.length; i++) {
            let currentDayNumber =
              scheduleData[i - 1].currentDayNumber + 1 > 6
                ? scheduleData[i - 1].currentDayNumber + 1 - 7
                : scheduleData[i - 1].currentDayNumber + 1;
            scheduleData[i].currentDayNumber = currentDayNumber;
            scheduleData[i].currentDay =
              getDayStringBasedOnNumber(currentDayNumber);
          }

          console.log("scheduleData: ", scheduleData);
          setFullScheduleData(scheduleData);
          setIndividualDayData(scheduleData[0]);
          setCurrentChannelData(data);
        });
    }
    getCurrentChannelData();
  }, []);

  const displayCurrentChannelData = () => {
    if (currentChannelData && currentChannelData.length > 0) {
      return currentChannelData.map((currentChannel, index) => (
        <>
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
        </>
      ));
    }
  };

 
  const displayDayButtonsVersion2 = () => {
    return fullScheduleData.map((schedule, index) => (
      <Button
        key={index}
        textAlign="left"
        size="sm"
        bg="none"
        _hover={{ bg: "none", fontWeight: "bold" }}
        onClick={() => {
          // displayInvididualDayData(schedule);
          setIndividualDayData(schedule);
          console.log("Clicked!");
        }}
      >
        {schedule.currentDay}
      </Button>
    ));
  };

  const displayInvididualDayData = () => {
    if (individualDayData.length > 0) {
      return individualDayData.map((currentData, index) => (
        <>
          <HStack pl="15px" spacing="50px" height="8vh">
            <Text>{currentData.datetime.substring(10, 16)}</Text>
            <Text>{currentData.title}</Text>
          </HStack>
          {/* <Table variant="unstyled" colSpan={0} size="sm" overflowY="hidden">
            <Tbody>
              <Tr>
                <Td>{currentData.datetime.substring(10, 16)}</Td>
                <Td>
                {currentData.title}
                </Td>
              </Tr>
              </Tbody>
              </Table> */}
        </>
      ));
    }
  };

  return (
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
          {name}
        </Button>
      </Stack>

      <Flex px="32%" pt="3%" flexDir="column">
        {displayCurrentChannelData()}
        <HStack fontSize="12px" fontWeight="400" spacing={0} pt="6%">
          {fullScheduleData.length > 0 && displayDayButtonsVersion2()}
        </HStack>
        <VStack h="100vh" pt="3%" align="start" spacing="8px">
          {individualDayData.length > 0 && displayInvididualDayData()}
        </VStack>
      </Flex>
    </>
  );
}
