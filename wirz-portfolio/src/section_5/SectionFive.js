import React from "react";
import "./SectionFive.css";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import circles from "./icons/Wireframe/circles.png";

export const SectionFive = () => {
  return (
    <div className="section-five_container">
      <h1 className="section-five_title">Education</h1>
      <img src={circles} className="section-five_circles" />
    </div>
  );
};
