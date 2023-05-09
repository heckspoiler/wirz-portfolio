import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { SectionOne } from "./section_1/SectionOne";
import { SectionTwo } from "./section_2/SectionTwo";
import { SectionThree } from "./section_3/SectionThree";

function App() {
  return (
    <div className="App">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default App;
