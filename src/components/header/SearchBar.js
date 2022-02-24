import React from "react";
import {
  Box,
  Image,
  Flex,
  Fade,
  Input,
  FormControl,
  InputGroup,
  InputRightElement,
  Collapse,
  Text,
} from "@chakra-ui/react";
import { IoIosClose } from "react-icons/io";

function SearchBar({ searchOpen, searchToggle }) {
  console.log(searchOpen);
  return (
    <Collapse
      in={searchOpen}
      direction={"top"}
      style={{
        display: searchOpen ? "flex" : "none",

        justifyContent: "center",
      }}
    >
      <FormControl>
        <InputGroup>
          {" "}
          <Input
            placeholder="Search Store"
            borderRadius={"30px"}
            border="2px"
            height={"30px"}
            pl={"20px"}
            my="5px"
            width={"250px"}
          />
          <InputRightElement>
            <Box mt="10px" mr="10px" cursor={"pointer"} onClick={searchToggle}>
              <IoIosClose fontSize={"25px"} />
            </Box>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Collapse>
  );
}

export default SearchBar;
