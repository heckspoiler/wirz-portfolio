import React from "react";
import "./SectionThree.css";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import ellipse from "./img/ellipse.png";
import rohnerMagenbrot from "./img/rohner_magenbrot.png";
import yummy from "./img/yummy.png";

export const SectionThree = () => {
  return (
    <m.div>
      <m.section className="section-three_text-container">
        <h1 className="section-three_title"></h1>
      </m.section>
    </m.div>
  );
};
