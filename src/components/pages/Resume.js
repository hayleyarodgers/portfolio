import React from "react";
import "../../styles/resume.css";
import resume from "../../assets/pdfs/resume.pdf";

export default function Resume() {
  return (
    <main>
      <h2>My resume</h2>
      <p>
        To view a downloadable copy, click{" "}
        <a href={resume} target="_blank" rel="noopener noreferrer">
          here
        </a>
        . Otherwise, keep reading!
      </p>
      <br />
      <div id="resume-skills" className="d-flex">
        <div className="pe-5">
          <h3>Front-end skills</h3>
          <ul className="formatted-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript ES6+</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Handlebars</li>
            <li>React.js</li>
            <li>And, responsive design.</li>
          </ul>
        </div>
        <div className="ps-5">
          <h3>Back-end skills</h3>
          <ul className="formatted-list">
            <li>APIs</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
            <li>And, PWAs.</li>
          </ul>
        </div>
      </div>
      <br />
      <div id="resume-experience">
        <h3>Experience</h3>
        <div className="timeline-item">
          <h4>Operations Manager (Systems) at Atomi, Jun 2021 - Jul 2022</h4>
          <p>
            <i>
              Created, maintained and improved the efficiency of all systems
              used in the content team.
            </i>
          </p>
          <ul className="formatted-list">
            <li>
              Engineered a highly customised, automated, scalable workflow
              management system using Jira software plus extensive Confluence
              training guides to transition an 80+ person team into using it.
            </li>
            <li>
              Integrated content and sales systems (Jira and HubSpot) to
              streamline communication between teams, allowing for quick and
              efficient responses to customer requests.
            </li>
            <li>
              Created a GoogleSheets-based system to provide quantitative
              reports on employee performance, resulting in a more than 300%
              reduction in time spent by managers on manual calculations per
              month.
            </li>
            <li>
              Routinely analysed the latest developments in ed-tech and
              collaborated with internal and external stakeholders to adapt
              content creation and marketing strategy.
            </li>
          </ul>
        </div>
        <div className="timeline-item">
          <h4>Science Team Lead at Atomi, Jan 2020 - Jul 2022</h4>
          <p>
            <i>
              Managed and provided ongoing professional development to a
              multifaceted team of 30+ designers and academics across multiple
              subject teams, including Biology, Chemistry, Physics and
              Psychology.
            </i>
          </p>
          <ul className="formatted-list">
            <li>
              Planned and managed Agile sprints in Jira whilst strategising
              resource allocation to leverage the team’s strengths, eliminate
              bottlenecks and hit ambitious company goals.
            </li>
            <li>
              Ran monthly team meetings, social events and 1:1s to communicate
              feedback, set and maintain expectations, foster company culture
              and boost team morale.
            </li>
            <li>
              Delivered 50+ syllabus-aligned science courses to Y7-12 students
              across Australia and the UK.
            </li>
            <li>
              Interviewed, onboarded and trained 15+ new staff members resulting
              in 95% employee retention.
            </li>
            <li>Awarded MVP of the Content Team 2020.</li>
          </ul>
        </div>
        <div className="timeline-item">
          <h4>Senior Content Creator at Atomi, Jun 2018 - Dec 2019</h4>
          <p>
            <i>
              Created and reviewed content across Biology, Chemistry, Physics,
              Psychology, PDHPE and Maths.
            </i>
          </p>
          <ul className="formatted-list">
            <li>
              Reviewed, edited and uploaded written, visual and audio content at
              multiple stages of production to uphold strict quality standards.
            </li>
            <li>
              Facilitated regular in-person feedback sessions to discuss
              strategies for improvement.
            </li>
          </ul>
        </div>
        <div className="timeline-item">
          <h4>Biology Content Creator at Atomi, Jan 2017 - May 2018</h4>
          <p>
            <i>
              Created educational science content for Y11-12 Biology students.
            </i>
          </p>
          <ul className="formatted-list">
            <li>
              Planned, scripted, wireframed, designed and produced educational
              videos and quizzes using a combination of Keynote, Camtasia and
              GoogleSheets.
            </li>
            <li>
              Consulted with the marketing team to create content for the
              company’s blog and social media.
            </li>
            <li>Awarded Best Rookie Season 2017.</li>
          </ul>
        </div>
      </div>
      <br />
      <div id="resume-education">
        <h3>Education</h3>
        <div className="timeline-item">
          <h4>Certificate in Full Stack Web Development</h4>
          <p>
            <i>The University of Sydney Coding Bootcamp</i>
          </p>
          <ul className="formatted-list">
            <li>99% average.</li>
          </ul>
        </div>
        <div className="timeline-item">
          <h4>
            Bachelor of Science (Advanced), majoring in Biochemistry and
            Microbiology
          </h4>
          <p>
            <i>The University of Sydney</i>
          </p>
          <ul className="formatted-list">
            <li>6.47 GPA.</li>
          </ul>
        </div>
        <div className="timeline-item">
          <h4>High School Certificate</h4>
          <p>
            <i>Model Farms High School</i>
          </p>
          <ul className="formatted-list">
            <li>99.55 ATAR.</li>
            <li>
              Ranked 6th in the state for HSC Biology and 12th in the state for
              HSC Chemistry.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
