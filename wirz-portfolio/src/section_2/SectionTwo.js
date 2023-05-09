import React from "react";
import "./SectionTwo.css";
import { motion as m } from "framer-motion";
import card from "./img/info-card.svg";
import portrait from "./img/portrait.png";
import arrow from "./icons/arrow-section-2.png";
import arrowCurvy from "./icons/arrow-curvy-section-2.svg";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export const SectionTwo = () => {
  const { ref, inView } = useInView();

  const animationTitle = useAnimation();
  const animationArrow = useAnimation();
  const animationImage = useAnimation();
  const animationCard = useAnimation();
  const animationCurlyArrow = useAnimation();

  useEffect(() => {
    if (inView) {
      animationTitle.start({
        opacity: 1,
        transition: { type: "spring", duration: 2, bounce: 0.3, delay: 0.5 },
      });
      animationArrow.start({
        opacity: 1,
        transition: { type: "spring", duration: 2, bounce: 0.3, delay: 1 },
      });
      animationImage.start({
        left: "50rem",
        ease: "easeInOut",
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 1.5 },
      });
      animationCard.start({
        opacity: 1,
        transition: { type: "spring", duration: 2.3, bounce: 0.3, delay: 2.3 },
      });
      animationCurlyArrow.start({
        opacity: 1,
        transition: { type: "spring", duration: 5, bounce: 0.3, delay: 4 },
      });

      if (!inView) {
        animationTitle.start({ opacity: 0 });
        animationImage.start({ x: "2000px" });
      }
    }
    console.log("use effect hook, inView = ", inView);
  }, [inView]);
  return (
    <m.div className="section-two_main-container" ref={ref}>
      <m.h1 className="section-two_main-title" animate={animationTitle}>
        Who dis?
      </m.h1>
      <m.img
        className="section-two_arrow"
        src={arrow}
        animate={animationArrow}
      />
      <m.div className="section-two_img-section">
        <m.img
          className="section-two_info-card"
          src={card}
          animate={animationCard}
        />
        <m.img
          className="section-two_portrait"
          src={portrait}
          animate={animationImage}
        />
        <m.img
          className="section-two_arrow-curvy"
          src={arrowCurvy}
          animate={animationCurlyArrow}
        />
      </m.div>
    </m.div>
  );
};
