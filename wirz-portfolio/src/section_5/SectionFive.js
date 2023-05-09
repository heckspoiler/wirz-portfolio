import React from "react";
import "./SectionFive.css";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import circles from "./icons/Wireframe/circles.png";
import ellipseFive from "./img/ellipse_section-five.png";
import roadmap from "./img/roadmap.png";

export const SectionFive = () => {
  return (
    <div className="section-five_container">
      <m.h1 className="section-five_title">Education</m.h1>
      <m.img src={circles} className="section-five_circles" />
      <m.img src={ellipseFive} className="section-five_ellipse" />
      <m.img src={roadmap} className="roadmap" />
      <m.p className="section-five_paragraph">
        So many wrong turns to get on the right track, huh...
      </m.p>
    </div>
  );
};
