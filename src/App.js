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
    </ChakraProvider>
  );
}

export default App;
