import React from "react";
import { Box, Slide, Image, Flex } from "@chakra-ui/react";
import logo from "../../../assets/img/logo.svg";
import { GrClose } from "react-icons/gr";
import SidebarActions from "./SidebarActions";
import Menuitems from "./Menuitems";
import { MdPhoneIphone, MdOutlineVideogameAsset } from "react-icons/md";
import { BsLaptop } from "react-icons/bs";
import { GrGamepad } from "react-icons/gr";

import { FiMonitor, FiCamera } from "react-icons/fi";

function Sidebar({ isOpen, onToggle }) {
  console.log(isOpen);
  const menuData = [
    { icon: <MdPhoneIphone />, text: "Mobile Phones" },
    { icon: <BsLaptop />, text: "Laptops" },
    { icon: <FiMonitor />, text: "TV | Monitors" },
    { icon: <FiCamera />, text: "Digital | Video | Cameras" },
    { icon: <GrGamepad />, text: "Gaming" },
  ];
  return (
    <Slide in={isOpen} direction="left" style={{ zIndex: 10 }}>
      <Box bg="white" p={15}>
        <Flex justify="space-between" align="center">
          <Image src={logo} style={{ height: "35px" }} />
          <GrClose onClick={onToggle} style={{ cursor: "pointer" }} />
        </Flex>
        <SidebarActions />
      </Box>
      <Box backgroundColor="#F5F5F5" pt="10px">
        <Box pt="30px" bg="white"></Box>
        {menuData.map((item) => (
          <Menuitems icon={item.icon} text={item.text} />
        ))}
      </Box>
    </Slide>
  );
}

export default Sidebar;
