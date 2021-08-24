import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import './Socials.css';


function Socials() {
  return (
    <div className="social-container">
      <a
        href="https://www.linkedin.com/in/omar-qoran/"
        className="linkedin"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faLinkedin} size="4x" className="linked"/>
      </a>

      <a
        href="https://github.com/ogq10"
        className="github social"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faGithub} size="4x" className="git"/>
      </a>
    </div>
    
  );
}

export default Socials;
