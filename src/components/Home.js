import React from 'react';
import '../stylesheets/Home.css';

const Home = () => {
  return (
    <section
      class='hero is-fullheight'
      style={{ backgroundColor: '#2f4a5c', color: '#f1e7db' }}
    >
      <div class='hero-body'>
        <div class=''>
          <p className='main-title'>Hans Watkins.</p>
          <p className='main-subtitle'>Full Stack Software Engineer</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
