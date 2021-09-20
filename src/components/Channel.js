import React, { useState, useEffect, useRef } from "react";
import {
  Spacer,
  Box,
  Text,
  VStack,
  Flex,
  InputRightAddon,
  Input,
  InputGroup,
  Stack,
} from "@chakra-ui/react";
import Axios from "axios";
import Header from "./Header";
import Filter from "./Filter";
import SlideShow from "./SlideShow";
import { Search2Icon } from "@chakra-ui/icons";
import ChannelDetail from "./ChannelDetail";

export default function Channel() {
  const [inputData, setInputData] = useState("");
  const [search, setSearch] = useState("");

  const [allChannels, setAllChannel] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleChange = (event) => setInputData(event.target.value);

  // const searchCallback = useRef(() => {});
  // const setSearchCallback = (callback) => {
  //   if (callback) {
  //     searchCallback.current = callback;
  //   } else {
  //     searchCallback.current = () => {};
  //   }
  // };

  const onClickSearch = () => {

    console.log("InputData is: ", inputData);
    let tempChannelList = [];
    for (let i = 0; i < allChannels.length; i++) {
      if (
        allChannels[i].title.toLowerCase().includes(inputData) == true ||
        allChannels[i].stbNumber.includes(inputData) == true
      ) {
        tempChannelList.push(allChannels[i]);
      }
    }

    setFilteredData(tempChannelList);
    // setIsSearchClicked(true);
  };

  useEffect(() => {
    async function getAllList() {
      await Axios.get(
        `https://contenthub-api.eco.astro.com.my/channel/all.json `
      )
        .catch((err) => {
          console.log(err);
        })
        .then((res) => {

          setAllChannel(res.data.response);
          setFilteredData(res.data.response);
        });
    }

    getAllList();
  }, []);

  const displayCurrentCategory = () => {
    return <ChannelDetail categoryData={filteredData} />;
  };


  return (
    <>
      <Box w="100vw" h="50vh" bg="black">
        <Box
          pt="25px"
          align="center"
          color="white"
          fontSize="32px"
          fontWeight="750"
        >
          CONTENT GUIDE
        </Box>
        <Stack pt={4} align="center">
          <InputGroup borderRadius="15px" size="md" w="42vw">
            <Input
              color="white"
              variant="filled"
              placeholder="Search Channels, TV Shows, Movies"
              name="searchKeyword"
              onBlur={(e) => {
                setInputData(e.target.value);
              }}
            />
            <InputRightAddon
              borderColor="transparent"
              bgColor="#E6165D"
              cursor="pointer"
              onClick={() => {
                console.log("Is clicked!");
                var a = document.querySelector(
                  "input[name=searchKeyword]"
                ).value;
                setTimeout(() => {
                  onClickSearch();
                }, 0);
              }}
            >
              <Search2Icon color="white" />
            </InputRightAddon>
          </InputGroup>
        </Stack>
        {/* <SlideShow/> */}
      </Box>
      <Box w="100vw" h="100vh" px="18%" overflowY="scroll">
        <Flex flexDirection="column" pt="32px">
          <Flex align="baseline" pt="32px">
            <Text color="#333333" fontSize="32px" fontWeight="750">
              Category
            </Text>
            <Spacer />
            <Filter dataFromParent={allChannels} setFilteredData={setFilteredData}/>
          </Flex>

          {filteredData && displayCurrentCategory()}
        </Flex>
      </Box>

    </>
  );
}
