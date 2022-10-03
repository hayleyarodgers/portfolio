import React from "react";
import "../../styles/contact.css";

import linkedinLogo from "../../assets/images/linkedinLogo.png";
import githubLogo from "../../assets/images/githubLogo.png";
import emailIcon from "../../assets/images/emailIcon.png";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contact() {
  return (
    <main className="contact">
      <h2>Contact me</h2>
      <p>
        Let's connect via{" "}
        <a
          href="https://www.linkedin.com/in/hayleyarodgers/"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </a>
        ,{" "}
        <a
          href="https://github.com/hayleyarodgers"
          target="_blank"
          rel="noopener noreferrer">
          GitHub
        </a>{" "}
        or{" "}
        <a
          href="mailto:hayleyarodgers88@gmail.com"
          target="_blank"
          rel="noopener noreferrer">
          Email
        </a>
        .
      </p>
      <div className="large-contact-bar my-4">
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
      </div>
      <br />
      <Form className="w-50 mx-auto">
        <h3>Or, get in touch directly!</h3>
        <FloatingLabel label="Your name" className="mb-3">
          <Form.Control type="text" />
        </FloatingLabel>
        <FloatingLabel label="Your email address" className="mb-3">
          <Form.Control type="email" />
        </FloatingLabel>
        <FloatingLabel label="Your message" className="mb-3">
          <Form.Control as="textarea" />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </main>
  );
}
