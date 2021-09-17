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
import Axios from 'axios';

export default function Category(){

    const [allList, setAllList] = useState([]);

    useEffect(() => {
        getAllList();
      }, [allList])

      async function getAllList() {
        // await Axios.get(`https://contenthub-api.eco.astro.com.my/channel/all.json `)
        .catch((err) => {
            console.log(err)
        }).then((res) => {
            setAllList(res.data.response)
        })
    }

    const getChannelNameNTitle = (name) => {
        name.forEach()
    }

    return(
        <Stack flexDirection="column">
        <HStack spacing="2%">
        <VStack cursor="pointer" w="11%" spacing={0}>
                <Image borderTopRadius="4px" w="100%" src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_VariantB_all.jpg" alt="All Channels"/>
                <Button borderBottomRadius="4px" borderTopRadius="0px" h="8" w="100%">
                All Channels
                </Button>
        </VStack>

        <VStack cursor="pointer" w="11%" spacing={0}>
                <Image borderTopRadius="4px" w="100%" src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_sports3.jpg" alt="Sports"/>
                <Button borderBottomRadius="4px" borderTopRadius="0px" h="8" w="100%">
                Sports
                </Button>
        </VStack>

        <VStack cursor="pointer" w="11%" spacing={0}>
                <Image borderTopRadius="4px" w="100%" src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_malay7.jpg" alt="Malay"/>
                <Button borderBottomRadius="4px" borderTopRadius="0px" h="8" w="100%">
                Malay
                </Button>
        </VStack>

        <VStack cursor="pointer" w="11%" spacing={0}>
                <Image borderTopRadius="4px" w="100%" src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_tamil10.jpg" alt="Indian"/>
                <Button borderBottomRadius="4px" borderTopRadius="0px" h="8" w="100%">
                Indian
                </Button>
        </VStack>

        <VStack cursor="pointer" w="11%" spacing={0}>
                <Image borderTopRadius="4px" w="100%" src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_chinese10.jpg" alt="Chinese"/>
                <Button borderBottomRadius="4px" borderTopRadius="0px" h="8" w="100%">
                Chinese
                </Button>
        </VStack>

        <VStack cursor="pointer" w="11%" spacing={0}>
                <Image borderTopRadius="4px" w="100%" src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_international8.jpg" alt="International"/>
                <Button borderBottomRadius="4px" borderTopRadius="0px" h="8" w="100%">
                International
                </Button>
        </VStack>

        <VStack cursor="pointer" w="11%" spacing={0}>
                <Image borderTopRadius="4px" w="100%" src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_AstroFirst1.jpg" alt="Astro First"/>
                <Button borderBottomRadius="4px" borderTopRadius="0px" h="8" w="100%">
                Astro First
                </Button>
        </VStack>

        <VStack cursor="pointer" w="11%" spacing={0}>
                <Image borderTopRadius="4px" w="100%" src="https://de-acm-assets.eco.astro.com.my/images/content-hub/channel-categories/chcategory_AstroBest1.jpg" alt="Astro Best"/>
                <Button borderBottomRadius="4px" borderTopRadius="0px" h="8" w="100%">
                Astro Best
                </Button>
        </VStack>
        </HStack>


        <Grid paddingTop="4%" templateColumns="repeat(3, 1fr)" gap={3}>
            <Box as="button" borderRadius="4px" w="19vw" h="18vh" boxShadow="1px 1px 6px #D3D3D3">
            <HStack pl="4">
                <Image src="https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/395_144.png" w="80px" h="100%"/>
                <VStack left={0}>
                    <Text>CH101</Text>
                    <Text fontWeight="bold">TV1 HD</Text>
                </VStack>
            </HStack>
            <Table size="sm">
  <Thead>
   <Tr><Th/></Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>inches</Td>
      <Td>millimetres (mm)</Td>
    </Tr>
    <Tr>
      <Td>feet</Td>
      <Td>centimetres (cm)</Td>
    </Tr>
    <Tr>
      <Td>yards</Td>
      <Td>metres (m)</Td>
    </Tr>
  </Tbody>
  <Tfoot>
 
  </Tfoot>
</Table>
            </Box>
            <Box as="button" borderRadius="4px" w="19vw" h="18vh" boxShadow="1px 1px 6px #D3D3D3">

            </Box>
            <Box as="button" borderRadius="4px" w="19vw" h="18vh" boxShadow="1px 1px 6px #D3D3D3">

            </Box>
            <Box as="button" borderRadius="4px" w="19vw" h="18vh" boxShadow="1px 1px 6px #D3D3D3">

            </Box>
            <Box as="button" borderRadius="4px" w="19vw" h="18vh" boxShadow="1px 1px 6px #D3D3D3">

            </Box>
            
        </Grid>

</Stack>
    )
}