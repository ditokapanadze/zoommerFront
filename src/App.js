import logo from "./logo.svg";
import React, { useRef, useState } from "react";
import "./App.css";
import Header from "./components/header/Headaer";
import Sidebar from "./components/header/sidebar/Sidebar";
import Slider from "./components/slider/Slider";
import Offers from "./components/offers/Offers";
import { useDisclosure } from "@chakra-ui/react";
import SearchBar from "./components/header/SearchBar";
import Map from "./components/map/Map";

function App() {
  const { isOpen: sidebarOpen, onToggle: sidebarToggle } = useDisclosure();
  const { isOpen: searchOpen, onToggle: searchToggle } = useDisclosure();
  const [show, setShow] = useState(false);
  console.log("test");
  return (
    <div className="App">
      <Header
        sidebarToggle={sidebarToggle}
        sidebarOpen={sidebarOpen}
        searchOpen={searchOpen}
        searchToggle={searchToggle}
        setShow={setShow}
        show={show}
      />
      <SearchBar searchOpen={searchOpen} searchToggle={searchToggle} />
      <Sidebar sidebarOpen={sidebarOpen} sidebarToggle={sidebarToggle} />
      <Slider />
      <Offers />
      {/* <Map /> */}
    </div>
  );
}

export default App;
