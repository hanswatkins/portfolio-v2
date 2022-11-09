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
					<p className='title is-size-1 is-size-4-mobile'>
						Languages & Technologies.
					</p>
					<p className='subtitle is-size-5 is-size-6-mobile'>
						I have built with and am comfortable using the following:
					</p>
					<br />
					<div class='tags are-medium'>
						<span class='tag'>HTML5</span>
						<span class='tag'>CSS3</span>
						<span class='tag'>JavaScript ES6</span>
						<span class='tag'>Python3</span>
						<span class='tag'>React</span>
						<span class='tag'>PostgreSQL</span>
						<span class='tag'>Git</span>
					</div>
					<div class='tags are-medium'>
						<span class='tag'>Django</span>
						<span class='tag'>Mongoose</span>
						<span class='tag'>Node.js</span>
						<span class='tag'>MongoDB</span>
						<span class='tag'>Bootstrap</span>
						<span class='tag'>MaterialUI</span>
						<span class='tag'>Bulma</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About3;
