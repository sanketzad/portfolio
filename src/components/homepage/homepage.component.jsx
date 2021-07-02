import React from "react";
import Particle from "react-particles-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./homepage.styles.css";
import ParticleOptions from "../../particle.config";

const Homepage = ({
  data: { firstname, lastname, profileTitle, contact_info },
}) => {
  const socials_Array = Object.entries(contact_info);
  return (
    <div id="home" className="container">
      <Particle className="particles" params={ParticleOptions} />
      <div className="container__details">
        <h1 className="container__details__name">
          <span>{firstname}</span> {lastname}
        </h1>
        <h4 className="container__details__skill">{profileTitle}</h4>
        <a href="#aboutme">About Me</a>
      </div>
      <div className="socials">
        {socials_Array.map((social) => {
          return social[1] ? (
            <a
              key={social[0]}
              href={social[1]}
              target="_blank"
              rel="noreferrer"
              className="socials__item"
            >
              <FontAwesomeIcon
                icon={["fab", social[0]]}
                className="highlight"
                size="lg"
              />
            </a>
          ) : null;
        })}
      </div>
      <a href="#home">
        <FontAwesomeIcon icon="arrow-circle-up" size="lg" className="top" />
      </a>
    </div>
  );
};

export default Homepage;
