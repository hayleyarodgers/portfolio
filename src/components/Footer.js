import React from 'react';
import linkedinLogo from '../assets/images/linkedinLogo.png';
import githubLogo from '../assets/images/githubLogo.png';
import emailLogo from '../assets/images/emailLogo.png';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div id="contact-bar">
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
          <img src={emailLogo} alt="Email logo" />
        </a>
      </div>
      <i>
        Made using React on Gadigal Land. To see the source code, click
        <a href="https://github.com/hayleyarodgers/portfolio"> here</a>.
      </i>
    </footer>
  );
}
