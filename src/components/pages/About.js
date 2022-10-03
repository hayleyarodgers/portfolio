import React from "react";
import profileIcon from "../../assets/images/hayleyrodgers.png";
import "../../styles/about.css";

export default function About() {
  return (
    <main>
      <h2>About me</h2>
      <div id="about" className="py-4">
        <div id="profile-icon">
          <img src={profileIcon} alt="Hayley Rodgers" />
        </div>
        <div id="text">
          <p>Hi, I'm Hayley! 👋</p>
          <p>
            I'm a <strong>full stack software developer</strong> with a
            background in start-ups and science, passionate about learning new
            skills to solve detail-oriented problems in better ways.
          </p>
        </div>
      </div>
      <br />
      <h3>I'm currently...</h3>
      <p>
        Completing a certificate in full stack web development from the
        University of Sydney. Click <a href="#resume">here</a> to learn about
        how I got to this point.
      </p>
      <br />
      <h3>My skills include...</h3>
      <ul className="formatted-list">
        <li>JavaScript ES6+</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>And, React.js.</li>
      </ul>
      <p>
        Click <a href="#portfolio">here</a> to see these skills (and more!) in
        action.
      </p>
      <br />
      <h3>I'm looking for...</h3>
      <p>
        Opportunities to use my new skills, champion my professional development
        through mentorship and involve working towards a meaningful mission as
        part of a wider team. If it sounds like we might be on the same
        wavelength, please click <a href="#contact">here</a> to get in touch.
      </p>
    </main>
  );
}
