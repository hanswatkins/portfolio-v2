import React from 'react';
import '../stylesheets/Home.css';

const Home = () => {
	return (
		<section
			class='hero is-fullheight'
			style={{ backgroundColor: '#2f4a5c', color: '#f1e7db' }}
		>
			<div class='hero-body'>
				<div>
					<p className='main-title'>Hi, I'm Hans Watkins.</p>
					<p className='main-subtitle'>a Full-Stack Software Developer </p>
				</div>
			</div>
		</section>
	);
};

export default Home;
