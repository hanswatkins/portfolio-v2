import React from 'react';
import '../stylesheets/Form.css';

const Form = () => {
  return (
    <div>
      <form name='contact' method='post'>
        <input class='input' type='hidden' name='form-name' value='contact' />

        <label class='label' htmlFor='name'>
          Name
        </label>
        <br />
        <input class='input' type='text' id='name' name='name' required />

        <label class='label' htmlFor='email'>
          Email
        </label>
        <br />
        <input class='input' type='email' id='email' name='email' required />

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

        <input type='submit' value='Submit message' />
      </form>
    </div>
  );
};

export default Form;
