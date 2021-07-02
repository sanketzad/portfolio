import React from "react";

import "./about-me.styles.css";
import { default as pic } from "../../images/sanket.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMe = ({ data: { aboutMe } }) => (
  <section id="aboutme" className="aboutme">
    <div className="aboutme__container">
      <h1 className="aboutme__heading">About Me</h1>
      <div className="aboutme__continer__details">
        <div className="aboutme__container__image">
          <img src={pic} alt="Sanket" className="myimage" />
        </div>
        <div className="aboutme__container__content">
          <FontAwesomeIcon icon="quote-left" size="3x" className="quotes" />{" "}
          {aboutMe}{" "}
          <FontAwesomeIcon icon="quote-right" size="3x" className="quotes" />
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
