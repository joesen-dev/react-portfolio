import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement

      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h2>Contact me</h2>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            defaultValue={name}
            onBlur={handleChange}
            name='name'
            className='form-control'
            placeholder='John Smith'></input>
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            defaultValue={email}
            onBlur={handleChange}
            name='email'
            className='form-control'
            placeholder='name@example.com'></input>
        </div>
        <div className='mb-3'>
          <label htmlFor='message' className='form-label'>
            Type a message
          </label>
          <textarea
            name='message'
            defaultValue={message}
            onBlur={handleChange}
            rows='5'
            className='form-control'></textarea>
          {errorMessage && (
            <div>
              <p className='error-text'>{errorMessage}</p>
            </div>
          )}
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
