import React from 'react';
import '../stylesheets/About.css';

const About3 = () => {
	return (
		<section
			class='hero is-fullheight'
			style={{ backgroundColor: '#2f4a5c', color: '#f1e7db' }}
		>
			<div class='hero-body'>
				<div>
					<p className='about-title'>Languages and Technologies.</p>
					<p className='about-subtitle'>
						I have built with and am comfortable using the following:
					</p>
					<br />
					<div class='columns'>
						<div class='column'>
							<p className='about-subtitle' style={{ fontSize: '1.5rem' }}>
								<i class='fa-regular fa-square-check fa-2xs'></i> HTML5
							</p>
							<p className='about-subtitle' style={{ fontSize: '1.5rem' }}>
								<i class='fa-regular fa-square-check fa-2xs'></i> CSS3
							</p>
							<p className='about-subtitle' style={{ fontSize: '1.5rem' }}>
								<i class='fa-regular fa-square-check fa-2xs'></i> JavaScript ES6
							</p>
							<p className='about-subtitle' style={{ fontSize: '1.5rem' }}>
								<i class='fa-regular fa-square-check fa-2xs'></i> Python3
							</p>
							<p className='about-subtitle' style={{ fontSize: '1.5rem' }}>
								<i class='fa-regular fa-square-check fa-2xs'></i> React
							</p>
							<p className='about-subtitle' style={{ fontSize: '1.5rem' }}>
								<i class='fa-regular fa-square-check fa-2xs'></i> PostgreSQL
							</p>
							<p className='about-subtitle' style={{ fontSize: '1.5rem' }}>
								<i class='fa-regular fa-square-check fa-2xs'></i> Git
							</p>
						</div>

						<div class='column'>
							<p className='about-subtitle' style={{ fontSize: '1.5rem' }}>
								<i class='fa-regular fa-square-check fa-2xs'></i> Django
							</p>
							<p className='about-subtitle' style={{ fontSize: '1.5rem' }}>
								<i class='fa-regular fa-square-check fa-2xs'></i> Mongoose
							</p>
							<p className='about-subtitle' style={{ fontSize: '1.5rem' }}>
								<i class='fa-regular fa-square-check fa-2xs'></i> Node.js
							</p>
							<p className='about-subtitle' style={{ fontSize: '1.5rem' }}>
								<i class='fa-regular fa-square-check fa-2xs'></i> MongoDB
							</p>
							<p className='about-subtitle' style={{ fontSize: '1.5rem' }}>
								<i class='fa-regular fa-square-check fa-2xs'></i> Bootstrap
							</p>
							<p className='about-subtitle' style={{ fontSize: '1.5rem' }}>
								<i class='fa-regular fa-square-check fa-2xs'></i> MaterialUI
							</p>
							<p className='about-subtitle' style={{ fontSize: '1.5rem' }}>
								<i class='fa-regular fa-square-check fa-2xs'></i> Bulma
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About3;
