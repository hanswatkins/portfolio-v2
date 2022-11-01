import React from 'react';
import '../stylesheets/Home.css';
import hansPic from '../photos/hans-pic.jpg';

const Home = () => {
  return (
    <body>
      <div class='columns'>
        <div class='column'></div>

        <div class='column'>
          <div class='container'>
            <div class='card'>
              <div class='card-image'>
                <figure class='image is-1by1'>
                  <img src={hansPic} alt='Placeholder' />
                </figure>
              </div>
              <div class='card-content'>
                <div class='media'>
                  <div class='media-left'>
                    <figure class='image is-48x48'>
                      <img src={hansPic} alt='Placeholder' />
                    </figure>
                  </div>
                  <div class='media-content'>
                    <p class='title is-4'>Hans Watkins</p>
                    <p class='subtitle is-6'>@hanswatkins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='column'></div>
      </div>
    </body>
  );
};

export default Home;
