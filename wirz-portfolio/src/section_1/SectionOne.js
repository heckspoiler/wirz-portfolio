import React from "react";
import "./SectionOne.css";
import heroImage from "./img/hero-image.png";
import star from "./icons/large-star.png";
import arrow from "./icons/arrow-first-section.png";
import { motion as m } from "framer-motion";

export const SectionOne = () => {
  return (
    <m.div
      className="section-one_main-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="section-one_left-side-container">
        <m.img
          src={star}
          className="section-one_star"
          initial={{ height: 0, width: 0 }}
          animate={{ height: "3rem", width: "3rem" }}
          transition={{ duration: 1 }}
        />
        <m.h1
          className="section-one_main-title"
          initial={{ fontSize: "3rem", marginLeft: "-10rem" }}
          animate={{ fontSize: "4rem", marginLeft: "0" }}
          transition={{ duration: 1 }}
        >
          HEY <br /> WIRZ!
        </m.h1>
        <section className="section-one_paragraph-container">
          <p className="section-one-paragraph">
            I understand that you are currently in need of a
          </p>
          <section className="section-one-paragraph-emphasize-container">
            <p className="section-one-paragraph-emphasize">
              Junior Web Developer
            </p>
          </section>
          <p className="section-one-paragraph">
            and I would like to work as such!
          </p>
        </section>
      </section>
      <m.section
        className="section-one_lower-paragraph-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1.5 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <p className="section-one_lower-paragraph">
          Maybe we'll find eachother
        </p>
      </m.section>
      <m.img
        src={heroImage}
        className="section-one_image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      />
      <m.img
        src={arrow}
        className="section-one_arrow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1.5 }}
        transition={{ duration: 1, delay: 3 }}
      />{" "}
    </m.div>
  );
};
