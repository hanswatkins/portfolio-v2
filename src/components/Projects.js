import React from 'react';
import '../stylesheets/Projects.css';
import jsPixartPic from '../photos/jspixartpic.jpeg';
import weatherPic from '../photos/weatherPic.png';
import meetNEat from '../photos/meetNEat.png';

const Projects = () => {
  return (
    <section class='section is-large' style={{ backgroundColor: '#d4d3c3' }}>
      <div class='block'></div>
      <div class='columns'>
        <div class='column'></div>
        <div class='column'>
          <div class='card'>
            <div class='card-image'>
              <figure class='image is-1by1'>
                <img src={jsPixartPic} alt='Placeholder' />
              </figure>
            </div>
            <div class='card-content'>
              <p class='title'>JS Pixart</p>
              <div class='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <br />
              </div>
            </div>
          </div>
        </div>
        <div class='column'>
          <div class='card'>
            <div class='card-image'>
              <figure class='image is-1by1'>
                <img src={weatherPic} alt='Placeholder' />
              </figure>
            </div>
            <div class='card-content'>
              <p class='title'>What's the Weather?</p>
              <div class='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <br />
              </div>
            </div>
          </div>
        </div>

        <div class='column'>
          <div class='card'>
            <div class='card-image'>
              <figure class='image is-1by1'>
                <img src={meetNEat} alt='Placeholder' />
              </figure>
            </div>
            <div class='card-content'>
              <p class='title'>Meet-N-Eat</p>
              <div class='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <br />
              </div>
            </div>
          </div>
        </div>
        <div class='column'></div>
      </div>
    </section>
  );
};

export default Projects;
