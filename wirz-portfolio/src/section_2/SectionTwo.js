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
  const { ref, inView } = useInView({
    threshold: 0.6, // Adjust the value between 0 and 1 according to when you want the animation to trigger
    triggerOnce: true, // Set to true so the animation only triggers once when the element comes into view
  });

  const animationTitle = useAnimation();
  const animationArrow = useAnimation();
  const animationImage = useAnimation();
  const animationCard = useAnimation();
  const animationCurlyArrow = useAnimation();

  useEffect(() => {
    if (inView) {
      animationTitle.start({
        opacity: 1,
        transition: { type: "spring", duration: 2, bounce: 0.3 },
      });
      animationArrow.start({
        opacity: 1,
        transition: { type: "spring", duration: 2, bounce: 0.3, delay: 0.5 },
      });
      animationImage.start({
        marginLeft: 0,
        ease: "easeInOut",
        opacity: 1,
        transition: { type: "spring", duration: 1, bounce: 0.3, delay: 1 },
      });
      animationCard.start({
        opacity: 1,
        transition: { type: "spring", duration: 2.3, bounce: 0.3, delay: 1.8 },
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
        <div className="section-two_portrait-container">
          <m.img
            className="section-two_portrait"
            src={portrait}
            animate={animationImage}
          />
        </div>
        <m.img
          className="section-two_arrow-curvy"
          src={arrowCurvy}
          animate={animationCurlyArrow}
        />
      </m.div>
    </m.div>
  );
};
