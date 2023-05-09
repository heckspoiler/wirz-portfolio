import React from "react";
import "./SectionTwo.css";
import { motion as m } from "framer-motion";
import card from "./img/info-card.svg";
import portrait from "./img/portrait.png";
import arrow from "./icons/arrow-section-2.png";
import arrowCurvy from "./icons/arrow-curvy-section-2.svg";

export const SectionTwo = () => {
  return (
    <m.div className="section-two_main-container">
      <m.h1
        className="section-two_main-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Who dis?
      </m.h1>
      <div className="section-two_img-section">
        <m.img className="section-two_arrow" src={arrow} />
        <m.img className="section-two_info-card" src={card} />
        <m.img className="section-two_portrait" src={portrait} />
        <m.img className="section-two_arrow-curvy" src={arrowCurvy} />
      </div>
    </m.div>
  );
};
