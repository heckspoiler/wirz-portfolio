import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { SectionOne } from "./section_1/SectionOne";
import { SectionTwo } from "./section_2/SectionTwo";
import { SectionThree } from "./section_3/SectionThree";
import { SectionFour } from "./section_4/SectionFour";
import { SectionFive } from "./section_5/SectionFive";
import { SectionSix } from "./section_6/SectionSix";
import { SectionSeven } from "./section_7/SectionSeven";

function App() {
  return (
    <div className="App">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </div>
  );
}

export default App;
