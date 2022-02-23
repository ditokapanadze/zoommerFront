import React, { useState, useRef, usreState } from "react";
import { Box, Slide, Image, Flex, useDisclosure } from "@chakra-ui/react";
import { MdAccountBox, MdChat, MdContactPhone } from "react-icons/md";
import Sign from "./Sign/Sign";

function SidebarActions({ toggleAuthModal, authModal }) {
  const [showLog, setShowLog] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  let ref = useRef(null);
  console.log("render");
  return (
    <Flex justify="space-between" alignItems={"center"} mt="20px">
      <Flex flexDirection="column" align={"center"}>
        <MdAccountBox style={{ color: "FF5400", fontSize: "34px" }} />
        <Box
          as="span"
          fontSize={"13px"}
          onClick={toggleAuthModal}
          onToggle={authModal}
        >
          Log in
        </Box>
        <Sign isOpen={authModal} onToggle={toggleAuthModal} />
      </Flex>
      <Flex flexDirection="column" align={"center"}>
        <MdChat style={{ color: "FF5400", fontSize: "34px" }} />
        <Box as="span" fontSize={"13px"}>
          Chat
        </Box>
      </Flex>
      <Flex flexDirection="column" align={"center"}>
        <MdChat style={{ color: "FF5400", fontSize: "34px" }} />
        <Box as="span" fontSize={"13px"}>
          Contact
        </Box>
      </Flex>
      <Flex flexDirection="column" align={"center"}>
        <MdContactPhone style={{ color: "FF5400", fontSize: "34px" }} />
        <Box as="span" fontSize={"13px"}>
          promotions
        </Box>
      </Flex>
    </Flex>
  );
}

export default SidebarActions;
