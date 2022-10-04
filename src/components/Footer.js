import React from "react";

import resume from "../assets/pdfs/resume.pdf";

import linkedinLogo from "../assets/images/linkedinLogo.png";
import linkedinLogoOrange from "../assets/images/linkedinLogoOrange.png";
import githubLogo from "../assets/images/githubLogo.png";
import githubLogoOrange from "../assets/images/githubLogoOrange.png";
import phoneIcon from "../assets/images/phoneIcon.png";
import phoneIconOrange from "../assets/images/phoneIconOrange.png";
import emailIcon from "../assets/images/emailIcon.png";
import emailIconOrange from "../assets/images/emailIconOrange.png";
import resumeIcon from "../assets/images/resumeIcon.png";
import resumeIconOrange from "../assets/images/resumeIconOrange.png";

import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contact-bar my-4">
        <a
          href="https://www.linkedin.com/in/hayleyarodgers/"
          target="_blank"
          rel="noopener noreferrer">
          <div className="icon-container">
            <img src={linkedinLogo} alt="LinkedIn logo" className="overlay" />
            <img src={linkedinLogoOrange} alt="LinkedIn logo" />
          </div>
        </a>
        <a
          href="https://github.com/hayleyarodgers"
          target="_blank"
          rel="noopener noreferrer">
          <div className="icon-container">
            <img src={githubLogo} alt="GitHub logo" className="overlay" />
            <img src={githubLogoOrange} alt="GitHub logo" />
          </div>
        </a>
        <a
          href="mailto:hayleyarodgers88@gmail.com"
          target="_blank"
          rel="noopener noreferrer">
          <div className="icon-container">
            <img src={emailIcon} alt="Email icon" className="overlay" />
            <img src={emailIconOrange} alt="Email icon" />
          </div>
        </a>
        <a href="tel:+61478239095" target="_blank" rel="noopener noreferrer">
          <div className="icon-container">
            <img src={phoneIcon} alt="Phone icon" className="overlay" />
            <img src={phoneIconOrange} alt="Phone icon" />
          </div>
        </a>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <div className="icon-container">
            <img src={resumeIcon} alt="Resume icon" className="overlay" />
            <img src={resumeIconOrange} alt="Resume icon" />
          </div>
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
