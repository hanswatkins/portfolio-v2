import React from 'react';

const Contact = () => {
  return (
    <body>
      <form
        name='Portfolio_Contact'
        method='POST'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        action='submit'
      >
        <div className='form-group'>
          <input
            type='text'
            name='name'
            placeholder='name'
            className='form-control'
          />
          <input
            type='email'
            placeholder='email'
            name='email'
            className='form-control'
          />
          <textarea
            name='message'
            rows='5'
            placeholder='message'
            className='form-control'
          ></textarea>
          <div data-netlify-recaptcha='true'></div>
        </div>
        <button type='submit' className='submit-btn btn'>
          send me your message!
        </button>
      </form>
    </body>
  );
};

export default Contact;
