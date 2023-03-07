import React from 'react';

export default function Contact() {
    return (
      <div class="container">
      <div class= "card-contents"></div>
        <h1>Contact Page</h1>
        <form>
          <input placeholder="name" id="name" />
          <input placeholder="email" id="email" />
          <input placeholder="message" id="message" />
          <button id="submit">Submit</button>
          <div>
            <h3 id="response"></h3>
          </div>
        </form>
      </div>
    );
  }