import {
  Box,
  Slide,
  Text,
  Flex,
  Stack,
  Input,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { FaRegEyeSlash, FaRegEye, FaChevronLeft } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Register({ isOpen, onToggle, toggleAuthModal }) {
  const [checked, setCheked] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showRepass, setShowRepass] = useState(false);

  return (
    <Slide
      in={isOpen}
      w="150px"
      height={"100px"}
      style={{ position: "absolute" }}
    >
      <Box bg="#e4dede" p="15">
        <Flex align={"center"}>
          <Flex
            align={"center"}
            justifyContent="center"
            w="20px"
            h="20px"
            bg="gray"
            borderRadius={"50%"}
            onClick={onToggle}
          >
            <FaChevronLeft fontSize={"10px"} style={{ cursor: "pointer" }} />
          </Flex>

          <Text ml="10px" fontWeight={"600"}>
            რეგისტრაცია
          </Text>
          <Box ml={"auto"} onClick={toggleAuthModal} p={5} cursor="pointer">
            <AiOutlineCloseCircle />
          </Box>
        </Flex>
        <Stack spacing={3} position={"relative"} mt="20px">
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
              mb="10px"
            />
            <Box cursor={"pointer"} onClick={() => setShowPass(!showPass)}>
              {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
            </Box>
          </Flex>
          <Flex align={"center"} justify="space-between">
            {" "}
            <Input
              placeholder="გაიმეორეთ პაროლი"
              type={showRepass ? "text" : "password"}
              height={"30px"}
              w="85%"
              outline="none"
            />
            <Box cursor={"pointer"} onClick={() => setShowRepass(!showRepass)}>
              {showRepass ? <FaRegEye /> : <FaRegEyeSlash />}
            </Box>
          </Flex>
        </Stack>

        <Flex spacing={5} direction="row" justify="center" mt="10px">
          <input
            type="checkbox"
            className="checkbox"
            id="scales"
            name="scales"
            onChange={() => setCheked(!checked)}
          />
          <label for="scales" style={{ fontSize: "12px" }}>
            ვეთანხმები წესებს და პირობებს
          </label>
        </Flex>
        <Button
          mt="5px"
          border="none"
          bg="#FF5000"
          opacity={checked ? 1 : 0.6}
          color={"white"}
          fontWeight="600"
          letterSpacing={"1px"}
          cursor="pointer"
          borderRadius="5px"
          py="10px"
        >
          ავოტირიზაცია
        </Button>
      </Box>
    </Slide>
  );
}

export default Register;

// sendNotification

// user[]

// await Promise.all(users.map(user => sendNotification(user)))

// let promises = []

// users.forEach(user => promises.push(sendNotification(user)))

// await Promise.all(promises)
