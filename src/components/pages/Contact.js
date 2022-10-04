import React, { useState } from "react";

import "../../styles/contact.css";

import linkedinLogo from "../../assets/images/linkedinLogo.png";
import linkedinLogoOrange from "../../assets/images/linkedinLogoOrange.png";
import githubLogo from "../../assets/images/githubLogo.png";
import githubLogoOrange from "../../assets/images/githubLogoOrange.png";
import emailIcon from "../../assets/images/emailIcon.png";
import emailIconOrange from "../../assets/images/emailIconOrange.png";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [messageErrorMessage, setMessageErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, set the state of the field
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // Note: no back end so unable to code for submitting messages yet.
  const handleFormSubmit = (event) => {
    // Prevent page refresh
    event.preventDefault();

    // Coming soon

    // Clear form after a successful message
    setName("");
    setEmail("");
    setMessage("");
    setNameErrorMessage("");
    setEmailErrorMessage("");
    setMessageErrorMessage("");
  };

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
      </div>
      <br />
      <Form className="w-50 mx-auto">
        <h3>Or, get in touch directly!</h3>
        <Form.Control
          type="text"
          name="name"
          className="mb-2"
          onBlur={(event) => {
            const { target } = event;
            const inputValue = target.value;
            setName(inputValue);

            !name
              ? setNameErrorMessage("Please add your name.")
              : setNameErrorMessage("");
          }}
          onChange={handleInputChange}
          placeholder="Your name"
          aria-describedby="nameHelpBlock"
        />
        <Form.Text id="nameHelpBlock" className="mb-4" muted>
          {nameErrorMessage}
        </Form.Text>
        <Form.Control
          type="email"
          name="email"
          className="mb-2"
          onBlur={(event) => {
            const { target } = event;
            const inputValue = target.value;
            setEmail(inputValue);

            !email || !validateEmail(email)
              ? setEmailErrorMessage("Please add a valid email address.")
              : setEmailErrorMessage("");
          }}
          onChange={handleInputChange}
          placeholder="Your email"
          aria-describedby="emailHelpBlock"
        />
        <Form.Text id="emailHelpBlock" className="mb-4" muted>
          {emailErrorMessage}
        </Form.Text>
        <Form.Control
          as="textarea"
          name="message"
          className="mb-2"
          onBlur={(event) => {
            const { target } = event;
            const inputValue = target.value;
            setMessage(inputValue);

            !message
              ? setMessageErrorMessage("Please add your message.")
              : setMessageErrorMessage("");
          }}
          onChange={handleInputChange}
          placeholder="Your message"
          aria-describedby="messageHelpBlock"
        />
        <Form.Text id="messageHelpBlock" className="mb-4" muted>
          {messageErrorMessage}
        </Form.Text>
        <br />
        <Button variant="primary" type="submit" onClick={handleFormSubmit}>
          Send
        </Button>
      </Form>
    </main>
  );
}
