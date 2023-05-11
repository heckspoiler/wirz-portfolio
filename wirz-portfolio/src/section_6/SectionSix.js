import React from "react";
import "./SectionSix.css";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import ableton from "./img/ableton.png";
import css from "./img/css.png";
import figma from "./img/figma.png";
import html from "./img/html.png";
import illustrator from "./img/illustrator.png";
import indesign from "./img/indesign.png";
import javascript from "./img/javascript.png";
import photoshop from "./img/photoshop.png";
import react from "./img/react.png";
import tailwind from "./img/tailwind.png";
import scale from "./img/scale.png";
import arrowSix from "./img/arrow_section-six.png";
import ellipseOrange from "./img/ellipse_orange.png";
import ellipseRed from "./img/ellipse_red.png";

export const SectionSix = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Adjust the value between 0 and 1 according to when you want the animation to trigger
    triggerOnce: true, // Set to true so the animation only triggers once when the element comes into view
  });
  const animationHeader = useAnimation();
  const animationScale = useAnimation();
  const animationFirst = useAnimation();
  const animationSecond = useAnimation();
  const animationThird = useAnimation();
  const animationFourth = useAnimation();
  const animationFifth = useAnimation();
  const animationOrangeEllipse = useAnimation();
  const animationRedEllipse = useAnimation();
  const animationArrow = useAnimation();

  useEffect(() => {
    if (inView) {
      animationHeader.start({
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 1 },
      });
      animationScale.start({
        opacity: 1,
        left: "0%",
        transition: { duration: 1.5, bounce: 0.3, delay: 2.7 },
      });
      animationFirst.start({
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 1.5 },
      });

      animationFirst.start({
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 1.5 },
      });

      animationSecond.start({
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 1.7 },
      });
      animationThird.start({
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 1.9 },
      });

      animationFourth.start({
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 2.1 },
      });

      animationFifth.start({
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 2.3 },
      });

      animationOrangeEllipse.start({
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 2.5 },
      });

      animationRedEllipse.start({
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 2.5 },
      });

      animationArrow.start({
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 4.5 },
      });
    }
  }, [inView]);
  return (
    <div className="section-six_container" ref={ref}>
      <m.img
        src={ellipseOrange}
        className="section-six_ellipse ellipse-orange"
        animate={animationOrangeEllipse}
      />
      <m.img
        src={ellipseRed}
        className="section-six_ellipse ellipse-red"
        animate={animationRedEllipse}
      />
      <m.img
        src={arrowSix}
        className="section-six_arrow"
        animate={animationArrow}
      />

      <m.h1 className="section-six_header" animate={animationHeader}>
        SKILLS
      </m.h1>
      <section className="section-six_scale-container">
        <m.img
          src={scale}
          className="section-six_scale"
          animate={animationScale}
        />
      </section>
      <section className="section-six_skills-container">
        <section className="section-six_skills-design">
          <m.img
            src={photoshop}
            className="section-six_skill photoshop"
            animate={animationFirst}
          />
          <m.img
            src={illustrator}
            className="section-six_skill illustrator"
            animate={animationSecond}
          />
          <m.img
            src={indesign}
            className="section-six_skill idesign"
            animate={animationThird}
          />
          <m.img
            src={figma}
            className="section-six_skill figma"
            animate={animationFourth}
          />
        </section>
        <section className="section-six_skills-programming">
          <m.img
            src={html}
            className="section-six_skill html"
            animate={animationFifth}
          />
          <m.img
            src={css}
            className="section-six_skill css"
            animate={animationFifth}
          />
          <m.img
            src={javascript}
            className="section-six_skill javascript"
            animate={animationFourth}
          />
          <m.img
            src={react}
            className="section-six_skill react"
            animate={animationThird}
          />
          <m.img
            src={tailwind}
            className="section-six_skill tailwind"
            animate={animationSecond}
          />
        </section>

        <section className="section-six_skills-varia">
          <m.img
            src={ableton}
            className="section-six_skill ableton"
            animate={animationFirst}
          />
        </section>
      </section>
    </div>
  );
};
