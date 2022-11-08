import React from 'react';
import '../stylesheets/Contact.css';

const Contact = () => {
  return (
    <section class='section is-large'>
      <div class='block'></div>
      <h2 class='contact-title'>Get in touch.</h2>
      <div class='columns'>
        <div class='column'></div>
        <div class='column'>
          <form name='contact' method='post'>
            <input
              class='input'
              type='hidden'
              name='form-name'
              value='contact'
            />
            <label class='label' htmlFor='name'>
              Name
            </label>
            <br />
            <input class='input' type='text' id='name' name='name' required />
            <label class='label' htmlFor='email'>
              Email
            </label>
            <br />
            <input
              class='input'
              type='email'
              id='email'
              name='email'
              required
            />
            <label class='label' htmlFor='message'>
              Message
            </label>
            <br />
            <textarea
              class='textarea'
              id='message'
              name='message'
              required
            ></textarea>
            <div class='field'>
              <p class='control'>
                <button class='button'>Submit</button>
              </p>
            </div>
          </form>
        </div>
        <div class='column'></div>
      </div>
    </section>
  );
};

export default Contact;
