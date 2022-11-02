import React from 'react';
import '../stylesheets/Projects.css';
import jsPixartPic from '../photos/jspixartpic.jpeg';
import weatherPic from '../photos/weatherPic.png';
import meetNEat from '../photos/meetNEat.png';

const Projects = () => {
  return (
    <div class='container-adjust'>
      <section class='section is-large' style={{ backgroundColor: '#d4d3c3' }}>
        <div class='container'>
          <div class='columns'>
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
                    A pixel art app using DOM manipulation to change the color
                    of 8000 tiny divs based on the user's color selection.
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
                    A weather app using weatherapi.com's API which returns the
                    current weather condition, a weather icon, temperature, UV
                    index, and wind speed and direction.
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
                    A full stack MERN app for meeting friends based on mutually
                    "liked" restaurants. Created using agile methodologies and a
                    team of 4 in one week.
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
