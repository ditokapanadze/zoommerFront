import React, { useState } from "react";
import {
  Box,
  Slide,
  Image,
  Flex,
  Text,
  Input,
  Stack,
  Button,
  useDisclosure,
  InputGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import Register from "./Register";
import { VscAccount } from "react-icons/vsc";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

function SignIn({ toggleAuthModal }) {
  const { isOpen, onToggle } = useDisclosure();
  const [showPass, setShowPass] = useState(false);

  return (
    <Box
      overflow="hidden"
      position="relative"
      px="20px"
      pb="20px"
      pt="5px"
      bg="#e4dede"
      width={"280px"}
      style={{ zIndex: 10 }}
      borderRadius="5px"
    >
      <Flex justify="space-between" pt={10}>
        <Text as="h4" mt={0}>
          ავტორიზაცია
        </Text>
        <Box m={0} cursor={"pointer"} onClick={toggleAuthModal}>
          <AiOutlineCloseCircle />
        </Box>
      </Flex>

      <Stack spacing={3} position={"relative"}>
        <Flex align={"center"} justify="space-between">
          {" "}
          <Input
            placeholder="ელ-ფოსტა"
            type="email"
            w="85%"
            height={"30px"}
            outline="none"
            mb="5px"
            type="email"
          />
          <VscAccount />
        </Flex>
        <Flex align={"center"} justify="space-between">
          {" "}
          <Input
            placeholder="პაროლი"
            type={showPass ? "text" : "password"}
            height={"30px"}
            w="85%"
            outline="none"
          />
          <Box cursor={"pointer"} onClick={() => setShowPass(!showPass)}>
            {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
          </Box>
        </Flex>

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
          bg="#E4DEDE"
          color={"black"}
          fontWeight="600"
          letterSpacing={"1px"}
          cursor="pointer"
          borderRadius="5px"
          py="10px"
          onClick={onToggle}
          _hover={{ color: "#FF5000" }}
        >
          რეგისტრაცია
        </Button>
      </Flex>
      <Flex
        align={"center"}
        justify="space-between"
        w="100%"
        opacity="0.3"
        my="20px"
      >
        <Box h="2px" w="40%" background={"gray"}></Box>
        <Text mb="5px" fontSize={"14px"} fontWeight="600">
          -ან-
        </Text>
        <Box h="2px" w="40%" background={"gray"}></Box>
      </Flex>
      <Register
        isOpen={isOpen}
        onToggle={onToggle}
        toggleAuthModal={toggleAuthModal}
      />
    </Box>
  );
}

export default SignIn;
