import React from 'react';
import '../stylesheets/Projects.css';
import jsPixartPic from '../photos/jspixartpic.jpeg';
import weatherPic from '../photos/weatherPic.png';
import meetNEat from '../photos/meetNEat.png';

const Projects = () => {
  return (
    <div class='container-adjust'>
      <section class='section is-medium' style={{ backgroundColor: '#fafafa' }}>
        <div class='container-max-width'>
          <h1 class='projects-title has-text-centered'>Projects.</h1>
          <div class='columns'>
            <div class='column'>
              <section class='section border-bottom pb-6'>
                <div class='container'>
                  <div class='columns'>
                    <div class='column'>
                      <a href='https://js-pixart.netlify.app/'>
                        <div
                          class='card py-4 is-showdow-2xl is-shadow-none is-cursor-pointer transform is-duration-500 hover-translate-y'
                          style={{
                            backgroundColor: '#fafafa',
                            outline: '1px solid',
                          }}
                        >
                          <div class='card-image p-5 pb-6'>
                            <figure class='image'>
                              <img
                                class='is-img-center'
                                src={jsPixartPic}
                                alt='Placeholder image'
                              />
                            </figure>
                          </div>
                          <div class='card-content py-5'>
                            <div class='content'>
                              <h2 class='mt-2 mb-6'>JS Pixart</h2>
                              <p class='mb-4'>
                                A pixel art app using DOM manipulation to change
                                the color of 8000 tiny divs based on the user's
                                color selection.
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div class='column'>
              <section class='section border-bottom pb-6'>
                <div class='container'>
                  <div class='columns'>
                    <div class='column'>
                      <a href='https://hans-weather.netlify.app/'>
                        <div
                          class='card py-4 is-showdow-2xl is-shadow-none is-cursor-pointer transform is-duration-500 hover-translate-y'
                          style={{
                            backgroundColor: '#fafafa',
                            outline: '1px solid',
                          }}
                        >
                          <div class='card-image p-5 pb-6'>
                            <figure class='image'>
                              <img class='is-img-center' src={weatherPic} />
                            </figure>
                          </div>
                          <div class='card-content py-5'>
                            <div class='content'>
                              <h2 class='mt-2 mb-6'>What's The Weather?</h2>
                              <p class='mb-4'>
                                A weather app connected to an API which returns
                                current weather, UV index, wind speed, and wind
                                direction.
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div class='column'>
              <section class='section border-bottom pb-6'>
                <div class='container'>
                  <div class='columns'>
                    <div class='column'>
                      <a href='https://meet-n-eat.netlify.app/home'>
                        <div
                          class='card py-4 is-showdow-2xl is-shadow-none is-cursor-pointer transform is-duration-500 hover-translate-y'
                          style={{
                            backgroundColor: '#fafafa',
                            outline: '1px solid',
                          }}
                        >
                          <div class='card-image p-5 pb-6'>
                            <figure class='image'>
                              <img
                                class='is-img-center'
                                src={meetNEat}
                                alt='Placeholder image'
                              />
                            </figure>
                          </div>
                          <div class='card-content py-5'>
                            <div class='content'>
                              <h2 class='mt-2 mb-6'>Meet-N-Eat</h2>
                              <p class='mb-4'>
                                A MERN app for meeting friends based on mutually
                                "liked" restaurants. Made on an agile team of
                                four.
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
