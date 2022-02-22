import React from "react";
import { Box, Slide, Image, Flex, Text } from "@chakra-ui/react";

function Menuitems({ icon, text }) {
  return (
    <Flex
      alignContent="center"
      alignItems="center"
      pl={15}
      pr={15}
      pt={10}
      pb={10}
      bg="white"
      opacity="0.8"
    >
      <Flex
        alignContent="center"
        alignItems="center"
        border="10px"
        borderColor="red"
        mr={20}
      >
        {icon}
      </Flex>
      <Text m={0} fontSize="14px" fontWeight={"500"}>
        {text}
      </Text>
    </Flex>
  );
}

export default Menuitems;
