import React from "react";
import "./SectionFive.css";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import circles from "./icons/Wireframe/circles.png";
import ellipseFive from "./img/ellipse_section-five.png";
import roadmap from "./img/roadmap.png";
import arrowSectionFive from "./img/arrow_section-five.png";

export const SectionFive = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // Adjust the value between 0 and 1 according to when you want the animation to trigger
    triggerOnce: true, // Set to true so the animation only triggers once when the element comes into view
  });

  const animationTitleFifth = useAnimation();
  const animationCircleOverlay = useAnimation();
  const animationRoadmap = useAnimation();
  const animationEllipseFive = useAnimation();
  const animationParagraph = useAnimation();
  const animationArrow = useAnimation();

  useEffect(() => {
    if (inView) {
      animationTitleFifth.start({
        opacity: 1,
        transition: { type: "spring", duration: 3, bounce: 0.3, delay: 1 },
      });
      animationCircleOverlay.start({
        scale: 0,
        transition: { type: "spring", duration: 2.5, bounce: 0.3, delay: 0.4 },
      });
      animationRoadmap.start({
        opacity: 1,
        left: "50%",
        transition: { duration: 1.5, bounce: 0.3, delay: 1.4 },
      });
      animationEllipseFive.start({
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 1.8 },
      });
      animationParagraph.start({
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 4 },
      });
      animationArrow.start({
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 5 },
      });
    }
  }, [inView]);
  return (
    <div className="section-five_container" ref={ref}>
      <m.h1 className="section-five_title" animate={animationTitleFifth}>
        Education
      </m.h1>
      <m.div
        className="section-five_circle-overlay"
        animate={animationCircleOverlay}
      ></m.div>
      <m.img src={circles} className="section-five_circles" />
      <m.img
        src={ellipseFive}
        className="section-five_ellipse"
        animate={animationEllipseFive}
      />
      <m.img src={roadmap} className="roadmap" animate={animationRoadmap} />
      <m.p className="section-five_paragraph" animate={animationParagraph}>
        So many wrong turns to get on the right track!
      </m.p>
      <m.img
        src={arrowSectionFive}
        animate={animationArrow}
        className="section-five_arrow"
      />
    </div>
  );
};
