import React from "react";
import Tilt from "react-tilt";

import "./skill-item.styles.css";

const SkillItem = ({ skill }) => (
  <Tilt className="Tilt br1 shadow-2" options={{ max: 55 }}>
    <div className="skill__card">{skill}</div>
  </Tilt>
);

export default SkillItem;
