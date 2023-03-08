import React from 'react';

export default function Contact() {
    return (
      <div class="container">
      <div class= "card-contents"></div>
        <h1>Contact Page</h1>
        <form className="contact-me">
          <input placeholder="name" className="contact-input" id="name" />
          <input placeholder="email" className="contact-input" id="email" />
          <input placeholder="message" className="contact-input" id="message" />
          <button id="submit">Submit</button>
          <div>
            <h3 id="response"></h3>
          </div>
        </form>
      </div>
    );
  }