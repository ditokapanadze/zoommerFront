import React from "react";
import { Box, Image, Flex, useDisclosure } from "@chakra-ui/react";
import { BsSearch, BsCart3 } from "react-icons/bs";

import menuIcon from "../../assets/img/menu.svg";
import logo from "../../assets/img/logo.svg";
import { Search } from "@material-ui/icons";
import SearchBar from "./SearchBar";

function Headaer({
  sidebarToggle,
  sidebarOpen,
  searchOpen,
  searchToggle,
  setShow,
  show,
}) {
  const handleToggle = () => setShow(!show);

  return (
    <Box p={15} bg="white">
      <Flex justify="space-between" align="center">
        <Flex align="center">
          <Box
            // onClick={sidebarToggle}
            onClick={handleToggle}
          >
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
            onClick={searchToggle}
          />
          <BsCart3 style={{ color: "black", fontSize: "20px" }} />
        </Box>
      </Flex>
    </Box>
  );
}

export default Headaer;
