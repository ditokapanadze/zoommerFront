import logo from "./logo.svg";
import React, { useRef } from "react";
import "./App.css";
import Header from "./components/header/Headaer";
import Sidebar from "./components/header/sidebar/Sidebar";
import Slider from "./components/slider/Slider";
import Offers from "./components/offers/Offers";
import { useDisclosure } from "@chakra-ui/react";

function App() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div className="App">
      <Header onToggle={onToggle} />
      <Sidebar isOpen={isOpen} onToggle={onToggle} />
      <Slider />
      <Offers />
    </div>
  );
}

export default App;
