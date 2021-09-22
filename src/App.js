import "./App.css";
import React, { useState } from "react";
import {
  Center,
  ChakraProvider,
  HStack,
  Flex,
  VStack,
  Image,
} from "@chakra-ui/react";
import {
  Switch,
  Route,
  useHistory,
  BrowserRouter as Router,
} from "react-router-dom";
import Channel from "./components/Channel";
import Header from "./components/Header";
import ChannelFullDetails from "./components/ChannelFullDetails";

function App() {
  return (
    <ChakraProvider>
      <Router>
      <Flex flexDir="column" overflowY="auto" overflowX="hidden">
        <Header />
        </Flex>
        <Switch>
          <Route exact path="/">
            <Flex flexDir="row" overflowY="auto" overflowX="hidden">
              <VStack spacing={0}>
                <Channel />
              </VStack>
            </Flex>
          </Route>

          <Route path="/channel/:name-:id" component={ChannelFullDetails} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
