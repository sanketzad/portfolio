import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./skills.styles.css";
import SkillItem from "../skill-item/skill-item.component";

const SkillsSection = ({ data: { skills } }) => (
  <section id="skills" className="skills">
    <div className="skills_details">
      <FontAwesomeIcon icon="code" size="4x" className="font_icon" />
      <h1 className="skills__heading">Skills</h1>
      <p className="skills__desc">Skills explanation goes here</p>
      <div className="skills__container">
        {skills.map((skill) => (
          <SkillItem skill={skill} />
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
