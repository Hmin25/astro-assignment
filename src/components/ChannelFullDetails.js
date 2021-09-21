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
  const [currentChannelData, setCurrentChannelData] = useState([]);
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

  let day = new Date().getDay();
  let currentDay;
  function sorting() {
    switch (day) {
      case DAY.SUNDAY:
        currentDay = "SUN";
        break;
      case DAY.MONDAY:
        currentDay = "MON";
        break;
      case DAY.TUESDAY:
        currentDay = "TUE";
        break;
      case DAY.WEDNESDAY:
        currentDay = "WED";
        break;
      case DAY.THURSDAY:
        currentDay = "THU";
        break;
      case DAY.FRIDAY:
        currentDay = "FRI";
        break;
      case DAY.SATURDAY:
        currentDay = "SAT";
        break;
      default:
        console.log("Not supposed to see this! Day is not within SUN to SAT");
        break;
    }
  }

  useEffect(() => {
    async function getCurrentChannelData() {
      await Axios.get(
        // `https://contenthub-api.eco.astro.com.my/channel/${id}.json  `
        `http://localhost:3000/temp.json`
      )
        .catch((err) => {
          console.log(err);
        })
        .then((res) => {
          let data = [];
          data.push(res.data.response);

          setCurrentChannelData(data);
        });
    }
    getCurrentChannelData();
  }, []);

  // useEffect(() => {
  //   getDayData();
  // }, []);

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

  const getDays = () => {
    let dayList = [];
    if (currentChannelData && currentChannelData.length > 0) {
      //get all schedule data of current channel
      let scheduleData = Object.values(currentChannelData[0].schedule);

      return scheduleData.map((schedule) => {
        if (schedule === scheduleData[0]) {
          day = day;
          currentDay = "TODAY";
        } else {
          if (day > 5) {
            day = 0;
            sorting();
          } else {
            day++;
            sorting();
          }
        }

        return (
          <Button
            textAlign="left"
            size="sm"
            bg="none"
            _hover={{ bg: "none", fontWeight: "bold" }}
            // onClick={() => getDayData(dayData={schedule})}
            // onClick={() => getDayData(dayData={scheduleData[i]})}
          >
            {currentDay}
          </Button>
        );
      });
      //   for (let i = 0; i < scheduleData.length; i++) {

      //     if (i === 0) {
      //       day = day;
      //       sorting();
      //       dayList.push(currentDay);
      //     } else {
      //       if (day > 5) {
      //         day = 0;
      //         sorting();
      //         dayList.push(currentDay);
      //       } else {
      //         day++;
      //         sorting();
      //         dayList.push(currentDay);
      //       }
      //     }
      //   }

      //   dayList.forEach(() => {
      //     return (
      //           <Button
      //             textAlign="left"
      //             size="sm"
      //             bg="none"
      //             _hover={{ bg: "none", fontWeight: "bold" }}
      //             // onClick={() => getDayData(dayData={schedule})}
      //             // onClick={() => getDayData(dayData={scheduleData[i]})}
      //           >
      //             {dayList}
      //           </Button>
      //         );
      //   })
    }
  };

  // function getDayData(dayData) {
  //   if (dayData && dayData.length > 0) {
  //     return dayData.map((currentData, index) => (
  //       <HStack align="start" spacing="8px">
  //         <Text>on Now</Text>
  //         <Text>Title</Text>
  //       </HStack>
  //     ));
  //   }
  // }

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
          {getDays()}
        </HStack>
      </Flex>
    </>
  );
}
