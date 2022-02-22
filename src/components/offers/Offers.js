import React from "react";
import { Box, Image, Flex, Text, Button } from "@chakra-ui/react";
import { BsSearch, BsCart3 } from "react-icons/bs";
import salePhoto from "../../assets/img/photo.png";
import Hoticon from "../../assets/img/hot.svg";
function Offers() {
  return (
    <Box>
      <Flex p={15} justify="space-between" alignItems="center">
        <Flex alignItems="center">
          <Flex
            w="40px"
            h={"40px"}
            bg="white"
            alignItems="center"
            justifyContent={"center"}
            borderRadius="10px"
            mr="10px"
            boxShadow="0 2px 20px 0 rgb(0 0 0 / 8%)"
          >
            <Image src={Hoticon} w="20px" />
          </Flex>
          <Text fontWeight={"700"} color="#093251">
            {" "}
            Hot Offers
          </Text>
        </Flex>
        <Button
          border="none"
          colorScheme="blue"
          bg="#FF5000"
          color={"white"}
          fontWeight="600"
          letterSpacing={"1px"}
          px="25px"
          cursor="pointer"
          borderRadius="5px"
          py="10px"
        >
          All
        </Button>
      </Flex>
      <Flex p={15} justify="space-between">
        <Flex
          borderRadius="5px"
          w="48%"
          flexDirection={"column"}
          alignItems="center"
          px="10px"
          pb="20px"
          bg="white"
        >
          <Box>
            <Image src={salePhoto} width="100%" />
          </Box>
          <Text fontWeight={"600"} textAlign={"center"} mb="10px">
            Sony WH-1000XM4 Wireless Noise
          </Text>
          <Text color={"#FF5000"} mb="20px" fontSize={"18px"} fontWeight="600">
            345 ლ{" "}
            <Box
              color={"black"}
              opacity={"0.7"}
              as="span"
              textDecoration={"line-through"}
              fontSize="14px"
            >
              500 ლ
            </Box>
          </Text>

          <Text fontWeight={"600"}>
            Add To Cart <BsCart3 style={{ marginLeft: "10px" }} />
          </Text>
          <Box
            h="5px"
            w="98%"
            bg="#FF5000"
            borderRadius={"5px"}
            mt="10px"
          ></Box>
        </Flex>
        <Flex
          borderRadius="5px"
          w="48%"
          flexDirection={"column"}
          alignItems="center"
          px="10px"
          pb="20px"
          bg="white"
        >
          <Box>
            <Image src={salePhoto} width="100%" />
          </Box>
          <Text fontWeight={"600"} textAlign={"center"} mb="10px">
            Sony WH-1000XM4 Wireless Noise
          </Text>
          <Text color={"#FF5000"} mb="20px" fontSize={"18px"} fontWeight="600">
            345 ლ{" "}
            <Box
              color={"black"}
              opacity={"0.7"}
              as="span"
              textDecoration={"line-through"}
              fontSize="14px"
            >
              500 ლ
            </Box>
          </Text>

          <Text fontWeight={"600"}>
            Add To Cart <BsCart3 style={{ marginLeft: "10px" }} />
          </Text>
          <Box
            h="5px"
            w="98%"
            bg="#FF5000"
            borderRadius={"5px"}
            mt="10px"
          ></Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Offers;
