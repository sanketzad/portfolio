import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./project-item.styles.css";
const images = require.context("../../images", true);

const loadImage = (imageName) => images(`./${imageName}`).default;

const ProjectItem = ({ project }) => {
  const { projectName, tagLine, description, toolsUsed, url, images } = project;
  return (
    // style={url ? { cursor: "pointer" } : null}, add if you want whole card to be clickable
    <div className="item__container">
      <div className="item__desc">
        <h4>{projectName}</h4>
        <h5>{tagLine}</h5>
        <p>{description}</p>
        <p>
          <span>Tools:</span> {toolsUsed}
        </p>
        {url ? (
          <p style={{ color: "black" }}>
            <a href={url} target="_blank" rel="noreferrer">
              Project Demo <FontAwesomeIcon icon="external-link-alt" />
            </a>
          </p>
        ) : null}
      </div>
      <div className="item__img">
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop
          stopOnHover
        >
          {images.map((img) => {
            return (
              <div key={img.id}>
                <img src={loadImage(img.src)} alt={img.text} />
                <p className="legend">{img.text}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectItem;

//<img src="https://unsplash.it/1000/1000" alt="Project" />
