import React from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import { BsSearch, BsCart3 } from "react-icons/bs";

import menuIcon from "../../assets/img/menu.svg";
import logo from "../../assets/img/logo.svg";
import { Height } from "@material-ui/icons";
function Headaer({ onToggle }) {
  console.log(onToggle);
  return (
    <Box p={15} bg="white">
      <Flex justify="space-between" align="center">
        <Flex align="center">
          <Box onClick={onToggle}>
            <Image
              src={menuIcon}
              alt="menu icon"
              mr="10"
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Box>
            <Image src={logo} alt="zoomer logo" w={100} />
          </Box>
        </Flex>

        <Box>
          <BsSearch
            style={{ color: "black", fontSize: "20px", marginRight: "20px" }}
          />
          <BsCart3 style={{ color: "black", fontSize: "20px" }} />
        </Box>
      </Flex>
    </Box>
  );
}

export default Headaer;
