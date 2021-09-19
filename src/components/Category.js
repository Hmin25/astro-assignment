import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Stack,
  VStack,
  HStack,
  Button,
  Image,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import Axios from "axios";

export default function Category() {
  const [allChannels, setAllList] = useState([]);
  const [scheduleTime, setScheduleTime] = useState("");
  const [scheduleTitle, setScheduleTitle] = useState("");

  useEffect(() => {
    getAllList();
  }, []);

  async function getAllList() {
    await Axios.get(`https://contenthub-api.eco.astro.com.my/channel/all.json `)
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        setAllList(res.data.response);
        console.log(res.data.response);

        // for (let i = 0; i < res.data.response.length; i++) {
        //   console.log(
        //     "Item ",
        //     i,
        //     " .currentSchedule is: ",
        //     res.data.response[i].currentSchedule[0].title
        //   );
        // }
      });
  }

  // const scratchInfo = () => {
  //   allChannels.map((currentSchedule) => {
  //     currentSchedule.forEach((schedule) => {
  //       setScheduleTitle(schedule.title);

  //       tempScheduleTime = schedule.datetime;

  //       setScheduleTime(tempScheduleTime.substring(10,15));
  //     })
  //   })
  //   scratchInfo();
  // }

  const displayChannelInfo = () => {
    if (allChannels && allChannels.length > 0) {
      return allChannels.map((channel) => (
        <Box
          as="button"
          borderRadius="4px"
          w="19vw"
          h="18vh"
          boxShadow="1px 1px 6px #D3D3D3"
        >
          <HStack pl="4">
            <Image src={channel.originalImage} w="70px" h="100%" />
            <VStack>
              <Text>{channel.stbNumber}</Text>
              <Text fontWeight="bold">{channel.title}</Text>
            </VStack>
          </HStack>
          <Table variant="unstyled" size="sm" overflowY="hidden">
            <Thead>
              <Tr>
                <Th />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>on Now</Td>
                <Td>
                  {channel.currentSchedule.length > 0
                    ? channel.currentSchedule[0].title
                    : "No schedule"}
                </Td>
              </Tr>
              <Tr>
                <Td>{channel.currentSchedule.length > 1
                    ? channel.currentSchedule[1].datetime.substring(10,16)
                    : "-"}</Td>
                <Td>{channel.currentSchedule.length > 1
                    ? channel.currentSchedule[1].title
                    : "No schedule"}</Td>
              </Tr>
              <Tr>
                <Td>{channel.currentSchedule.length > 2
                    ? channel.currentSchedule[2].datetime.substring(10,16)
                    : "-"}</Td>
                <Td>{channel.currentSchedule.length > 2
                    ? channel.currentSchedule[2].title
                    : "No schedule"}</Td>
              </Tr>
            </Tbody>
            <Tfoot></Tfoot>
          </Table>
        </Box>
      ));
    }
  };

  return (
    <Stack flexDirection="column" overflowY="auto">
      <HStack spacing="2%">
        <VStack cursor="pointer" w="11%" spacing={0}>
          <Image
            borderTopRadius="4px"
            w="100%"
            src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_VariantB_all.jpg"
            alt="All Channels"
          />
          <Button borderBottomRadius="4px" borderTopRadius="0px" h="8" w="100%">
            All Channels
          </Button>
        </VStack>

        <VStack cursor="pointer" w="11%" spacing={0}>
          <Image
            borderTopRadius="4px"
            w="100%"
            src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_sports3.jpg"
            alt="Sports"
          />
          <Button borderBottomRadius="4px" borderTopRadius="0px" h="8" w="100%">
            Sports
          </Button>
        </VStack>

        <VStack cursor="pointer" w="11%" spacing={0}>
          <Image
            borderTopRadius="4px"
            w="100%"
            src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_malay7.jpg"
            alt="Malay"
          />
          <Button borderBottomRadius="4px" borderTopRadius="0px" h="8" w="100%">
            Malay
          </Button>
        </VStack>

        <VStack cursor="pointer" w="11%" spacing={0}>
          <Image
            borderTopRadius="4px"
            w="100%"
            src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_tamil10.jpg"
            alt="Indian"
          />
          <Button borderBottomRadius="4px" borderTopRadius="0px" h="8" w="100%">
            Indian
          </Button>
        </VStack>

        <VStack cursor="pointer" w="11%" spacing={0}>
          <Image
            borderTopRadius="4px"
            w="100%"
            src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_chinese10.jpg"
            alt="Chinese"
          />
          <Button borderBottomRadius="4px" borderTopRadius="0px" h="8" w="100%">
            Chinese
          </Button>
        </VStack>

        <VStack cursor="pointer" w="11%" spacing={0}>
          <Image
            borderTopRadius="4px"
            w="100%"
            src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_international8.jpg"
            alt="International"
          />
          <Button borderBottomRadius="4px" borderTopRadius="0px" h="8" w="100%">
            International
          </Button>
        </VStack>

        <VStack cursor="pointer" w="11%" spacing={0}>
          <Image
            borderTopRadius="4px"
            w="100%"
            src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_AstroFirst1.jpg"
            alt="Astro First"
          />
          <Button borderBottomRadius="4px" borderTopRadius="0px" h="8" w="100%">
            Astro First
          </Button>
        </VStack>

        <VStack cursor="pointer" w="11%" spacing={0}>
          <Image
            borderTopRadius="4px"
            w="100%"
            src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_AstroBest1.jpg"
            alt="Astro Best"
          />
          <Button borderBottomRadius="4px" borderTopRadius="0px" h="8" w="100%">
            Astro Best
          </Button>
        </VStack>
      </HStack>

      <Grid
        paddingTop="4%"
        templateColumns="repeat(3, 1fr)"
        gap={3}
        overflowY="auto"
      >
        {allChannels && displayChannelInfo()}
      </Grid>
    </Stack>
  );
}
