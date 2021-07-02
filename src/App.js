import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowCircleUp,
  faHamburger,
  faBars,
  faExternalLinkAlt,
  faCode,
  faKeyboard,
  faLaptopCode,
  faQuoteLeft,
  faQuoteRight,
  faUserTie,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import AboutMe from "./components/about-me/about-me.component";
import ContactMe from "./components/contact-me/contact-me.component";

import Header from "./components/header/header.component.jsx";
import Homepage from "./components/homepage/homepage.component";
import Projects from "./components/projects/projects.component";
import SkillsSection from "./components/skills/skills.component";

import PORTFOLIO_DATA from "./portfolio-data";

library.add(
  fab,
  faArrowCircleUp,
  faHamburger,
  faBars,
  faExternalLinkAlt,
  faCode,
  faKeyboard,
  faLaptopCode,
  faQuoteLeft,
  faQuoteRight,
  faUserTie,
  faEnvelope
);

const {
  firstname,
  lastname,
  profileTitle,
  shortname,
  contact_info,
  aboutMe,
  skills,
  projects,
} = PORTFOLIO_DATA;

function App() {
  return (
    <React.Fragment>
      <Header data={{ shortname }} />
      <div className="main__container">
        <Homepage
          data={{ firstname, lastname, profileTitle, shortname, contact_info }}
        />
        <AboutMe data={{ aboutMe }} />
        <Projects data={{ projects }} />
        <SkillsSection data={{ skills }} />
        <ContactMe />
      </div>
    </React.Fragment>
  );
}

export default App;
