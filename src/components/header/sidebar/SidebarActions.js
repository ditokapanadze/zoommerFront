import React, { useState } from "react";
import { Box, Slide, Image, Flex } from "@chakra-ui/react";
import { MdAccountBox, MdChat, MdContactPhone } from "react-icons/md";
import Sign from "./Sign/Sign";

function SidebarActions() {
  const [showLog, setShowLog] = useState(false);
  return (
    <Flex justify="space-between" alignItems={"center"} mt="20px">
      <Flex flexDirection="column" align={"center"}>
        <MdAccountBox style={{ color: "FF5400", fontSize: "34px" }} />
        <Box as="span" fontSize={"13px"} onClick={() => setShowLog(!showLog)}>
          Log in
        </Box>
        {showLog ? <Sign /> : ""}
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
