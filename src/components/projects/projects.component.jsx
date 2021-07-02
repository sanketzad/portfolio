import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./projects.styles.css";
import ProjectItem from "../project-item/project-item.component";

const Projects = ({ data: { projects } }) => (
  <section id="projects" className="projects">
    <div className="projects__details">
      <FontAwesomeIcon icon="laptop-code" size="4x" className="font_icon" />
      <h1 className="projects__heading">Projects</h1>
      <section className="projects__continer">
        {projects.map((project) => (
          <ProjectItem key={project.projectName} project={project} />
        ))}
      </section>
    </div>
  </section>
);

export default Projects;
