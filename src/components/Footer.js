import React from "react";

import resume from "../assets/pdfs/resume.pdf";

import linkedinLogo from "../assets/images/linkedinLogo.png";
import githubLogo from "../assets/images/githubLogo.png";
import emailIcon from "../assets/images/emailIcon.png";
import resumeIcon from "../assets/images/resumeIcon.png";

import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contact-bar my-4">
        <a
          href="https://www.linkedin.com/in/hayleyarodgers/"
          target="_blank"
          rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn logo" />
        </a>
        <a
          href="https://github.com/hayleyarodgers"
          target="_blank"
          rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub logo" />
        </a>
        <a
          href="mailto:hayleyarodgers88@gmail.com"
          target="_blank"
          rel="noopener noreferrer">
          <img src={emailIcon} alt="Email logo" />
        </a>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <img src={resumeIcon} alt="Email logo" />
        </a>
      </div>
      <p>Hayley Rodgers, 2022</p>
      <i>
        Made using React.js on Gadigal Land. To see the source code, click
        <a
          href="https://github.com/hayleyarodgers/portfolio"
          target="_blank"
          rel="noopener noreferrer">
          {" "}
          here
        </a>
        .
      </i>
    </footer>
  );
}
