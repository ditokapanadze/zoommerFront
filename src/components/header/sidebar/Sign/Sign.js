import React, { useRef } from "react";
import SignIn from "./SignIn";
import { Box, Slide, Image, Flex, Collapse } from "@chakra-ui/react";
import Register from "./Register";

function Sign({ isOpen, onToggle }) {
  console.log(isOpen);
  return (
    <Collapse
      in={isOpen}
      style={{
        position: "absolute",
        left: "20px",
        top: "130px",
      }}
    >
      <SignIn toggleAuthModal={onToggle} />
    </Collapse>
  );
}

export default Sign;
