import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.styles.css";

const Header = ({ data: { shortname } }) => (
  <header>
    <div className="header__container">
      <h1 className="logo">
        <a href="#home">{shortname}</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#aboutme">
              About Me <FontAwesomeIcon icon="user-tie" />
            </a>
          </li>
          <li>
            <a href="#projects">
              Projects <FontAwesomeIcon icon="keyboard" />
            </a>
          </li>
          <li>
            <a href="#skills">
              Skills <FontAwesomeIcon icon="code" />
            </a>
          </li>
          <li>
            <a href="#contactme">
              Contact me <FontAwesomeIcon icon="envelope" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <FontAwesomeIcon icon="hamburger" size="2x" className="hamburger" />
  </header>
);

export default Header;
