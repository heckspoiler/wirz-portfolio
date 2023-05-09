import React from "react";
import "./SectionThree.css";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import ellipse from "./img/ellipse.png";
import rohnerMagenbrot from "./img/rohner_magenbrot.png";
import yummy from "./img/yummy.png";
import arrow from "./img/arrow-section-three.png";

export const SectionThree = () => {
  const { ref, inView } = useInView({
    threshold: 0.4, // Adjust the value between 0 and 1 according to when you want the animation to trigger
    triggerOnce: true, // Set to true so the animation only triggers once when the element comes into view
  });

  const animationTitle = useAnimation();
  const animationFirstParagraph = useAnimation();
  const animationSecondParagraph = useAnimation();
  const animationArrow = useAnimation();
  const animationMagenbrot = useAnimation();
  const animationBackground = useAnimation();
  const animationYummy = useAnimation();

  useEffect(() => {
    if (inView) {
      animationTitle.start({
        fontSize: "4rem",
        opacity: 1,
        transition: { type: "spring", duration: 1, bounce: 0.3, delay: 0.8 },
      });
      animationMagenbrot.start({
        marginLeft: "6rem",
        ease: "easeInOut",
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 30,
          duration: 2,
          delay: 1.2,
        },
      });
      animationBackground.start({
        opacity: 1,
        transition: { type: "spring", duration: 2, bounce: 0.3, delay: 1.6 },
      });
      animationYummy.start({
        height: "14rem",
        width: "14rem",
        transition: { type: "spring", duration: 1, bounce: 0.6, delay: 1.9 },
      });
      animationFirstParagraph.start({
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.3,
          delay: 2.3,
        },
      });
      animationSecondParagraph.start({
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 2.8 },
      });

      animationArrow.start({
        opacity: 1,
        transition: { type: "spring", duration: 2, bounce: 0.3, delay: 4 },
      });

      // if (!inView) {
      //   animationTitle.start({ opacity: 0 });
      //   animationImage.start({ x: "2000px" });
      // }
    }
    console.log("use effect hook, inView = ", inView);
  }, [inView]);
  return (
    <m.div className="section-three_container" ref={ref}>
      <m.section className="section-three_text-container">
        <m.h1 className="section-three_title" animate={animationTitle}>
          Joy <br />
          and
          <br />
          Motivation
        </m.h1>
        <m.p
          className="section-three_paragraph para-1"
          animate={animationFirstParagraph}
        >
          I spend most of my day in the world of web development and design.
          It's like an endless rollercoaster ride, except I never get nauseous.
        </m.p>
        <m.p
          className="section-three_paragraph para-2"
          animate={animationSecondParagraph}
        >
          Definitely not an expert (yet), but working every day to improve my
          skills and stay in the saddle.
        </m.p>
      </m.section>
      <m.section className="section-three_img-container">
        <m.img
          src={ellipse}
          className="section-three_ellipse"
          animate={animationBackground}
        />
        <m.img
          src={rohnerMagenbrot}
          className="section-three_rohner-magenbrot"
          animate={animationMagenbrot}
        />
        <m.img
          src={yummy}
          className="section-three_yummy"
          animate={animationYummy}
          layout
        />
        <m.img
          src={arrow}
          className="section-three_arrow"
          animate={animationArrow}
        />
      </m.section>
    </m.div>
  );
};
