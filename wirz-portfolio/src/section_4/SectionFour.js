import React from "react";
import "./SectionFour.css";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import dots from "./icons/Wireframe/dots.svg";
import ellipse from "./icons/ellipse_section-4.png";
import arrow from "./icons/arrow_section-4.png";
import passugger from "./img/passugger.png";
import schwarz from "./img/schwarz-architekten.png";
import parki from "./img/parki.png";
import rio from "./img/rio_bar.png";

export const SectionFour = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // Adjust the value between 0 and 1 according to when you want the animation to trigger
    triggerOnce: true, // Set to true so the animation only triggers once when the element comes into view
  });

  const animationTitleFourth = useAnimation();
  const animationFirst = useAnimation();
  const animationSecond = useAnimation();
  const animationThird = useAnimation();
  const animationFourth = useAnimation();
  const animationText = useAnimation();
  const animationImage = useAnimation();

  useEffect(() => {
    if (inView) {
      animationTitleFourth.start({
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 1 },
      });
      animationFirst.start({
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 1.3 },
      });
      animationSecond.start({
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 1.6 },
      });
      animationThird.start({
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 1.9 },
      });
      animationFourth.start({
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 2.1 },
      });
      animationText.start({
        opacity: 1,
        transition: { type: "spring", duration: 3, bounce: 0.3, delay: 2.6 },
      });
      animationImage.start({
        opacity: 1,
        transition: { type: "spring", duration: 3, bounce: 0.3, delay: 3.2 },
      });
    }
  }, [inView]);

  return (
    <div className="section-four_container" ref={ref}>
      <m.h1 className="section-four_title" animate={animationTitleFourth}>
        WORK EXPERIENCE
      </m.h1>
      <m.img
        src={ellipse}
        className="section-four_ellipse"
        animate={animationImage}
      />
      <table className="section-four_job-table">
        <tr className="section-four_image-row">
          <td>
            <m.img
              src={passugger}
              className="img-passugger"
              animate={animationFirst}
            />
          </td>
          <td>
            <m.img
              src={schwarz}
              className="img-schwarz"
              animate={animationSecond}
            />
          </td>
          <td>
            <m.img src={parki} className="img-parki" animate={animationThird} />
          </td>
          <td>
            <m.img src={rio} className="img-rio" animate={animationFourth} />
          </td>
        </tr>
        <tr className="section-four_date-row">
          <td>
            <m.p className="section-four_job-date" animate={animationFirst}>
              2011 - 2012
            </m.p>
          </td>
          <td>
            <m.p className="section-four_job-date" animate={animationSecond}>
              2012 - 2014
            </m.p>
          </td>
          <td>
            <m.p className="section-four_job-date" animate={animationThird}>
              2018-2021
            </m.p>
          </td>
          <td>
            <m.p className="section-four_job-date" animate={animationFourth}>
              2013-2018 / 2021 -2023
            </m.p>
          </td>
        </tr>
        <tr className="section-four_job-subtitle">
          <td>
            <m.h2
              className="section-four_job-subheader"
              animate={animationText}
            >
              Tasks & Responsibilities
            </m.h2>
          </td>
          <td>
            <m.h2
              className="section-four_job-subheader"
              animate={animationText}
            >
              Tasks & Responsibilities
            </m.h2>
          </td>
          <td>
            <m.h2
              className="section-four_job-subheader"
              animate={animationText}
            >
              Tasks & Responsibilities
            </m.h2>
          </td>
          <td>
            <m.h2
              className="section-four_job-subheader"
              animate={animationText}
            >
              Tasks & Responsibilities
            </m.h2>
          </td>
        </tr>
        <tr className="section-four_job-list">
          <td>
            <ul className="section-four_job-list">
              <m.li animate={animationText}>Backoffice / Administration</m.li>
              <m.li animate={animationText}>Production</m.li>
              <m.li animate={animationText}>Warehouse Work</m.li>
              <m.li animate={animationText}>Assistant</m.li>
            </ul>
          </td>
          <td>
            <ul>
              <m.li animate={animationText}>Backoffice / Administration</m.li>
              <m.li animate={animationText}>HR</m.li>
            </ul>
          </td>
          <td>
            <ul>
              <m.li animate={animationText}>Bartender</m.li>
            </ul>
          </td>
          <td>
            {" "}
            <ul>
              <m.li animate={animationText}>
                Shift Manager / Deputy Manager
              </m.li>
              <m.li animate={animationText}>Orders</m.li>
              <m.li animate={animationText}>Bartender</m.li>
              <m.li animate={animationText}>Runner</m.li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
};
