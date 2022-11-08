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
					<div class='tags'>
						<span class='tag is-large'>HTML5</span>
						<span class='tag is-large'>CSS3</span>
						<span class='tag is-large'>JavaScript ES6</span>
						<span class='tag is-large'>Python3</span>
						<span class='tag is-large'>React</span>
						<span class='tag is-large'>PostgreSQL</span>
						<span class='tag is-large'>Git</span>
					</div>
						<div class="tags">
							<span class='tag is-large'>Django</span>
							<span class='tag is-large'>Mongoose</span>
							<span class='tag is-large'>Node.js</span>
							<span class='tag is-large'>MongoDB</span>
							<span class='tag is-large'>Bootstrap</span>
							<span class='tag is-large'>MaterialUI</span>
							<span class='tag is-large'>Bulma</span>
						</div>
				</div>
			</div>
		</section>
	);
};

export default About3;
