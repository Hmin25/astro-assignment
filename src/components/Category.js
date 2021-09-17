import React, { useState, useEffect } from "react";
import {
  Spacer,
  Box,
  Text,
  VStack,
  HStack,
  Button,
  Image
} from "@chakra-ui/react";

export default function Category(){

    const [allList, setAllList] = useState([]);

    useEffect(() => {
    
        
      }, [])

    //   async function getAllList() {
    //     await Axios.get(`https://contenthub-api.eco.astro.com.my/channel/all.json `, {
    //         params: {
    //             ID: data.phone
    //         }
    //     }).catch((err) => {
    //         console.log(err)
    //     }).then((res) => {
    //         setAllList(res.data.otp)
    //     })
    // }

    return(
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
    )
}