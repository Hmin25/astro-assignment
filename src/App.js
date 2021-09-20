import './App.css';
import React, {useState} from "react"
import {
  Center,
  ChakraProvider,
  HStack,
  Flex,
  VStack,
  Image
} from "@chakra-ui/react"
import {Switch, Route, useHistory} from "react-router-dom";
import Channel from './components/Channel';
import Header from "./components/Header";
import ChannelFullDetails from './components/ChannelFullDetails';


function App() {
  return (
    <ChakraProvider>
      <Route exact path="/">
      <Flex flexDir="row" overflowY="auto" overflowX="hidden">
      <VStack spacing={0}>
        <Header />
      <Channel/>
      </VStack>
      </Flex>
      </Route>

      {/* <Route path="/channel/:id" component={ChannelFullDetails}/> */}
      <Route path="/channel/detail">
      {/* <Flex flexDir="row" overflowY="auto" overflowX="hidden">
      <VStack spacing={0}> */}
        <Header />
      <ChannelFullDetails/>
      {/* </VStack>
      </Flex> */}
      </Route>

    </ChakraProvider>
  );
}

export default App;
