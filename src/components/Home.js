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
					<p className='test-title'>
						Hi, I'm Hans Watkins.
					</p>
					<p className='test-subtitle'>
						a Full-Stack Software Developer{' '}
					</p>
				</div>
			</div>
		</section>
	);
};

export default Home;
