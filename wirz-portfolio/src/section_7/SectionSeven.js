import React from "react";
import "./SectionSeven.css";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import iphone from "./img/iphone.png";
import union from "./img/union.png";
import ellipse from "./img/ellipse_section-seven.png";

export const SectionSeven = () => {
  const { ref, inView } = useInView({
    threshold: 0.4, // Adjust the value between 0 and 1 according to when you want the animation to trigger
    triggerOnce: true, // Set to true so the animation only triggers once when the element comes into view
  });

  const animationHeader = useAnimation();
  const animationiPhone = useAnimation();
  const animationParagraphUpper = useAnimation();
  const animationParagraphLower = useAnimation();
  const animationButtonSectionParagraph = useAnimation();
  const animationButtons = useAnimation();
  const animationUnion = useAnimation();
  const animationEllipse = useAnimation();

  useEffect(() => {
    if (inView) {
      animationHeader.start({
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.3, delay: 1 },
      });
      animationiPhone.start({
        opacity: 1,
        transition: { type: "spring", duration: 1, delay: 1.5 },
      });
      animationParagraphUpper.start({
        opacity: 1,
        transition: { type: "spring", duration: 1, delay: 2.3 },
      });
      animationParagraphLower.start({
        opacity: 1,
        transition: { type: "spring", duration: 1, delay: 2.5 },
      });
      animationButtonSectionParagraph.start({
        opacity: 1,
        transition: { type: "spring", duration: 1, delay: 4 },
      });
      animationButtons.start({
        opacity: 1,
        transition: { type: "spring", duration: 1, delay: 4.8 },
      });
      animationUnion.start({
        opacity: 1,
        transition: { type: "spring", duration: 1, delay: 1.6 },
      });
      animationEllipse.start({
        opacity: 1,
        transition: { type: "spring", duration: 1, delay: 1.8 },
      });
    }
  });

  return (
    <div ref={ref} className="section-seven-container">
      <m.h1 className="section-seven_header" animate={animationHeader}>
        Interested?
      </m.h1>
      <m.img
        src={iphone}
        className="iphone"
        alt="iphone-conversation"
        animate={animationiPhone}
      />
      <m.img
        src={union}
        className="union"
        alt="union"
        animate={animationUnion}
      />
      <m.img
        src={ellipse}
        className="section-seven_ellipse"
        alt="ellipse"
        animate={animationEllipse}
      />
      <section className="section-seven_paragraph-section">
        <m.p animate={animationParagraphUpper}>
          Let me know if you could imagine inviting me for an interview.
          <br />
          Personally, I would be thrilled to hear from you!
        </m.p>
        <m.p animate={animationParagraphLower}>
          You can reach me on my phone: +41 78 627 67 57
          <br />
          or via email: carlo_ettisberger@hotmail.com
        </m.p>
      </section>
      <section className="section-seven_button-section">
        <m.p
          className="section-seven_button-section-paragraph"
          animate={animationButtonSectionParagraph}
        >
          And no worries, you can find <br />
          my cover letter right here:
        </m.p>
        <section className="section-seven_buttons">
          <a
            href="/cv/cv_motivationsschreiben.pdf"
            download="cv-motivationsschreiben-carlo-ettisberger"
            className="download-link"
          >
            <m.button
              className="section-seven_button coverletter-button"
              animate={animationButtons}
            >
              COVER LETTER
            </m.button>
          </a>
          <m.a
            href="https://github.com/heckspoiler"
            className="github-link"
            target="_blank"
            animate={animationButtons}
          >
            <m.svg
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              className="github-svg"
            >
              <path
                className="path"
                d="m256 0c-140.609375 0-256 115.390625-256 256 0 119.988281 84.195312 228.984375 196 256v-84.695312c-11.078125 2.425781-21.273438 2.496093-32.550781-.828126-15.128907-4.464843-27.421875-14.542968-36.546875-29.910156-5.816406-9.8125-16.125-20.453125-26.878906-19.671875l-2.636719-29.882812c23.253906-1.992188 43.371093 14.167969 55.3125 34.230469 5.304687 8.921874 11.410156 14.152343 19.246093 16.464843 7.574219 2.230469 15.707032 1.160157 25.183594-2.1875 2.378906-18.972656 11.070313-26.074219 17.636719-36.074219v-.015624c-66.679687-9.945313-93.253906-45.320313-103.800781-73.242188-13.976563-37.074219-6.476563-83.390625 18.238281-112.660156.480469-.570313 1.347656-2.0625 1.011719-3.105469-11.332032-34.230469 2.476562-62.546875 2.984375-65.550781 13.078125 3.867187 15.203125-3.890625 56.808593 21.386718l7.191407 4.320313c3.007812 1.792969 2.0625.769531 5.070312.542969 17.371094-4.71875 35.683594-7.324219 53.726563-7.558594 18.179687.234375 36.375 2.839844 54.464844 7.75l2.328124.234375c-.203124-.03125.632813-.148437 2.035157-.984375 51.972656-31.480469 50.105469-21.191406 64.042969-25.722656.503906 3.007812 14.128906 31.785156 2.917968 65.582031-1.511718 4.65625 45.058594 47.300781 19.246094 115.753906-10.546875 27.933594-37.117188 63.308594-103.796875 73.253907v.015624c8.546875 13.027344 18.816406 19.957032 18.761719 46.832032v105.722656c111.808594-27.015625 196-136.011719 196-256 .003906-140.609375-115.386719-256-255.996094-256zm0 0"
              />
            </m.svg>
          </m.a>
        </section>
      </section>
    </div>
  );
};
