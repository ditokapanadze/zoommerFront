import React from "react";
import SignIn from "./SignIn";
import { Box, Slide, Image, Flex } from "@chakra-ui/react";
import Register from "./Register";

function Sign() {
  return (
    <Flex bg="pink">
      <SignIn />
    </Flex>
  );
}

export default Sign;
