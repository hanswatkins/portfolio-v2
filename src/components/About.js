import React from 'react';
import umgPic from '../photos/umgPic.jpg';
import spotifyPic from '../photos/spotifyPic.jpg';
import '../stylesheets/About.css';

const About = () => {
  return (
    <body>
      <div class='columns'>
        <div class='column is-one-quarter'></div>

        <div class='column'>
          <section class='section'>
            <h1 class='title is-1'>About</h1>
            <div class='block'>
              <p>
                I began my career as a freelance music producer. I had the
                privilege of{' '}
                <a
                  className='about-link'
                  href='https://open.spotify.com/track/66zE85sYeTb6cmVdZbJtK2?si=66b96654352b4f22'
                >
                  recording at Spotify's recording studio
                </a>{' '}
                in Los Angeles,{' '}
                <a
                  className='about-link'
                  href='https://www.youtube.com/watch?v=CcxzkM5i8Ns'
                >
                  developing partnerships
                </a>{' '}
                with Universal Music Group, Bluenote Records, and{' '}
                <a
                  className='about-link'
                  href='https://www.ableton.com/en/blog/studies-sound-arbour-lo-fi-beats-and-musical-exploration/'
                >
                  Ableton
                </a>
                , and making music for every major{' '}
                <a
                  className='about-link'
                  href='https://www.youtube.com/watch?v=45zum9ZXiDY'
                >
                  "24/7 lofi beats to study to"
                </a>{' '}
                live stream out there.
                <div class='block'></div>
                <figure class='image is-16by9'>
                  <img
                    src={umgPic}
                    alt='My hands on a synthesizer from a birds-eye view with various musical equipment on the table'
                    style={{ borderRadius: '2%' }}
                  ></img>
                </figure>
                <div class='block'></div>
                Now, my curiosity has led me in the direction of Software
                Engineering. In August, I graduated from General Assembly's
                Software Engineering Immersive with over 500 hours of
                engineering experience and several full stack applications.
                Check out some of my <a href='#'>projects!</a>
              </p>

              <div class='block'></div>
              <h2 class='title is-2'>Technologies</h2>
              <div class='block'>
                <div class='columns'>
                  <div class='column'>
                    <ul>
                      <li>&#10095; HTML5</li>
                      <li>&#10095; JavaScript</li>
                      <li>&#10095; Node.js</li>
                      <li>&#10095; MongoDB</li>
                      <li>&#10095; Python</li>
                      <li>&#10095; Postgres</li>
                    </ul>
                  </div>
                  <div class='column'>
                    <ul>
                      <li>&#10095; CSS3</li>
                      <li>&#10095; React.js</li>
                      <li>&#10095; Express</li>
                      <li>&#10095; Mongoose</li>
                      <li>&#10095; Django</li>
                      <li>&#10095; AWS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class='column is-one-quarter'></div>
      </div>
    </body>
  );
};

export default About;
