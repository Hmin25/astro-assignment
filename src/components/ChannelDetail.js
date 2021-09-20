import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
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

export default function ChannelDetail({ categoryData }) {

  const [currentChannelId, setCurrentChannelId] = useState("");
  const history = useHistory();

  const displayChannelInfo = () => {
    if (categoryData && categoryData.length > 0) {
      return categoryData.map((channel, index) => (
        <Box
          as="button"
          borderRadius="4px"
          w="20vw"
          h="18vh"
          boxShadow="1px 1px 6px #D3D3D3"
          key={index}
          onClick={() => {
            setCurrentChannelId(channel.id);
            // history.push(`/channel/${channel.title}${channel.id}`);
            history.push("/channel/detail", currentChannelId);
          }}
        >
          <HStack pl="4">
            <Image src={channel.originalImage} w="70px" h="100%" />
            <VStack align="self-start" spacing={0}>
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
                <Td>
                  {channel.currentSchedule.length > 1
                    ? channel.currentSchedule[1].datetime.substring(10, 16)
                    : "-"}
                </Td>
                <Td>
                  {channel.currentSchedule.length > 1
                    ? channel.currentSchedule[1].title
                    : "No schedule"}
                </Td>
              </Tr>
              <Tr>
                <Td>
                  {channel.currentSchedule.length > 2
                    ? channel.currentSchedule[2].datetime.substring(10, 16)
                    : "-"}
                </Td>
                <Td>
                  {channel.currentSchedule.length > 2
                    ? channel.currentSchedule[2].title
                    : "No schedule"}
                </Td>
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
        {displayChannelInfo()}
      </Grid>
    </Stack>
  );
}
