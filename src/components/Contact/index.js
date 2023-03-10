import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../../utils/helpers';

export default function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      if (validateEmail(inputValue)) {
        setErrorMessage('');
        setEmail(inputValue);
        // Check if the email is valid after input is done (using onBlur to trigger once cursor leaves email input box)
      } else {
        setErrorMessage('');
      setErrorMessage('Please enter a valid email');
    }} else if (inputType === 'message') {
      if (!setMessage(inputValue)) {
        setErrorMessage('Please enter a message')
      } else {
        setErrorMessage('');
        setMessage(inputValue);
      }
    } else {
      if (checkPassword(inputValue)) {
        setErrorMessage('');
        setPassword(inputValue);
      } else {
        setErrorMessage(
          `Please enter a password`
        );
    }
  }
  };
  

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    alert(`Hello`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setMessage('');
    setPassword('');
    setEmail('');
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form className="form">
        <input
          defaultValue={email}
          name="email"
          onBlur={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          defaultValue={message}
          name="message"
          onBlur={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <input
          defaultValue={password}
          name="password"
          onBlur={handleInputChange}
          type="password"
          placeholder="Password"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}