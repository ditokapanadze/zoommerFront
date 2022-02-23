import React from "react";
import { Box, Slide, Image, Flex, useDisclosure, Text } from "@chakra-ui/react";
import logo from "../../../assets/img/logo.svg";
import { GrClose } from "react-icons/gr";
import SidebarActions from "./SidebarActions";
import Menuitems from "./Menuitems";
import { MdPhoneIphone, MdOutlineVideogameAsset } from "react-icons/md";
import { BsLaptop } from "react-icons/bs";
import { GrGamepad } from "react-icons/gr";

import { FiMonitor, FiCamera } from "react-icons/fi";

function Sidebar({ sidebarOpen, sidebarToggle }) {
  const { isOpen: authModal, onToggle: toggleAuthModal } = useDisclosure();
  const menuData = [
    { icon: <MdPhoneIphone />, text: "Mobile Phones" },
    { icon: <BsLaptop />, text: "Laptops" },
    { icon: <FiMonitor />, text: "TV | Monitors" },
    { icon: <FiCamera />, text: "Digital | Video | Cameras" },
    { icon: <GrGamepad />, text: "Gaming" },
    { icon: <GrGamepad />, text: "Gaming" },
    { icon: <GrGamepad />, text: "Gaming" },
    { icon: <GrGamepad />, text: "Gaming" },
  ];
  return (
    <Slide
      in={sidebarOpen}
      direction="left"
      style={{ zIndex: 10, height: "100vh", backgroundColor: "white" }}
    >
      <Box bg="white" p={15}>
        <Flex justify="space-between" align="center">
          <Image src={logo} style={{ height: "35px" }} />
          <GrClose
            onClick={() => {
              sidebarToggle();
              toggleAuthModal();
            }}
            style={{ cursor: "pointer" }}
          />
        </Flex>
        <SidebarActions
          authModal={authModal}
          toggleAuthModal={toggleAuthModal}
        />
      </Box>
      <Box backgroundColor="#F5F5F5" pt="10px">
        <Box pt="30px" bg="white"></Box>
        {menuData.map((item) => (
          <Menuitems icon={item.icon} text={item.text} />
        ))}
      </Box>
      <Flex direction="column" mt="30px" p="15" fontWeight={"600"}>
        <Text>ონლაინ განვადება</Text>
        <Text my="5">ადგილზე მიტანის სერვისი</Text>
        <Text>ფილიალები</Text>
      </Flex>
    </Slide>
  );
}

export default Sidebar;
