import React from 'react';

const Contact = () => {
  return (
    <body>
      <form name='contact' netlify netlify-honeypot='bot-field' hidden>
        <input type='text' name='name' />
        <input type='email' name='email' />
        <textarea name='message'></textarea>
      </form>

      <form name='contact' method='post'>
        <input type='hidden' name='form-name' value='contact' />
        <p>
          <label>
            Your Name: <input type='text' name='name' />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type='email' name='email' />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name='message'></textarea>
          </label>
        </p>
        <p>
          <button type='submit'>Send</button>
        </p>
      </form>
    </body>
  );
};

export default Contact;
