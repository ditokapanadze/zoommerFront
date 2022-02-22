import React from "react";
import {
  Box,
  Slide,
  Image,
  Flex,
  Text,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";
import Register from "./Register";
function SignIn() {
  return (
    <Box
      overflow="hidden"
      position="relative"
      px="20px"
      pb="20px"
      pt="5px"
      width={"250px"}
      bg="red"
      style={{ zIndex: 10 }}
      position={"relative"}
    >
      <Box
        style={{ zIndex: 2 }}
        w="0"
        he="0"
        borderStyle="solid"
        position={"absolute"}
        borderWidth="10px"
        borderTopWidth="0px"
        top="-10px"
        left={"110px"}
        borderColor="transparent"
        borderBottomColor="gray"
      ></Box>
      <Text as="h3">ავტორიზაცია</Text>
      <Stack spacing={3}>
        <Input placeholder="ელ-ფოსტა" height={"30px"} outline="none" mb="5px" />
        <Input placeholder="პაროლი" height={"30px"} outline="none" />
        <Text textAlign={"right"} fontSize={"12px"}>
          დაგავიწყდა პაროლი?
        </Text>
      </Stack>
      <Flex justify={"space-between"} mt="15px">
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
          შესვლა
        </Button>
        <Button
          border="none"
          colorScheme="blue"
          bg="White"
          color={"black"}
          fontWeight="600"
          letterSpacing={"1px"}
          cursor="pointer"
          borderRadius="5px"
          py="10px"
        >
          რეგისტრაცია
        </Button>
      </Flex>
      <Flex
        align={"center"}
        justify="space-between"
        w="100%"
        opacity="0.3"
        mt="10px"
      >
        <Box h="2px" w="40%" background={"gray"}></Box>
        <Text mb="5px" fontSize={"14px"} fontWeight="600">
          -ან-
        </Text>
        <Box h="2px" w="40%" background={"gray"}></Box>
      </Flex>
      <Register />
    </Box>
  );
}

export default SignIn;
