import React from 'react';
import '../../styles/contact.css';

export default function Contact() {
  return (
    <main className="contact">
      <h2>Contact me</h2>
      <br />
      <h3>LinkedIn</h3>
      <a href="https://www.linkedin.com/in/hayleyarodgers/">
        https://www.linkedin.com/in/hayleyarodgers/
      </a>
      <br />
      <br />
      <h3>GitHub</h3>
      <a href="https://github.com/hayleyarodgers">
        https://github.com/hayleyarodgers
      </a>
      <br />
      <br />
      <h3>Email</h3>
      <a href="mailto:hayleyarodgers88@gmail.com">hayleyarodgers88@gmail.com</a>
      <br />
      <br />
      <h3>Or message me directly!</h3>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 mx-auto">
            <form className="contact-form">
              <label className="d-flex justify-content-between my-4" for="name">
                Name
                <input
                  className="w-75 form-control"
                  id="name"
                  name="name"
                  type="text"
                />
              </label>
              <label
                className="d-flex justify-content-between my-4"
                for="email">
                Email
                <input
                  className="w-75 form-control"
                  id="email"
                  name="email"
                  type="email"
                />
              </label>
              <label
                className="d-flex justify-content-between my-4"
                for="message">
                Message
                <textarea
                  rows="3"
                  className="w-75 form-control"
                  id="message"
                  placeholder="Write your message here."></textarea>
              </label>
              <button className="btn btn-lg btn-primary rounded-0 my-4">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
