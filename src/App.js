import './App.css';
import React, {useState} from "react"
import {
  Center,
  ChakraProvider,
  HStack,
  Text,
  VStack,
  Image
} from "@chakra-ui/react"
import {Switch, Route, useHistory} from "react-router-dom";
import Channel from './components/Channel';

function App() {
  return (
    <ChakraProvider>
      <Route exact path="/">
      <Channel/>
      </Route>
    </ChakraProvider>
  );
}

export default App;
