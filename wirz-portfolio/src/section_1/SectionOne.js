import React from "react";
import "./SectionOne.css";
import heroImage from "./img/hero-image.png";
import star from "./icons/large-star.png";

export const SectionOne = () => {
  return (
    <div className="section-one_main-container">
      <div className="section-one_left-side-container">
        <img src={star} className="section-one_star" />
        <h1 className="section-one_main-title">
          HEY <br /> WIRZ!
        </h1>
        <div className="section-one_paragraph-container">
          <p className="section-one-paragraph">
            I understand that you are currently in need of a
          </p>
          <div className="section-one-paragraph-emphasize-container">
            <p className="section-one-paragraph-emphasize">
              Junior Web Developer
            </p>
          </div>
          <p className="section-one-paragraph">
            and I would like to work as such!
          </p>
        </div>
      </div>
      <div className="section-one_lower-paragraph-container">
        <p className="section-one_lower-paragraph">
          Maybe we'll find eachother
        </p>
      </div>
      <img src={heroImage} className="section-one_image" />
    </div>
  );
};
