import React from 'react';
import '../stylesheets/Footer.css';

const Footer = () => {
	return (
		<footer class='footer'>
			<div class='content has-text-centered'>
				<p>
					Shoot me an email or dm if you want to geek out about music equipment,
					web development, or photography!
				</p>
				<p>
					<a href='https://www.instagram.com/prod_arbour'>
						<i class='fa-brands fa-instagram' style={{ padding: '1rem' }}></i>
					</a>

					<a href='https://www.twitter.com/prod_arbour'>
						<i class='fa-brands fa-twitter' style={{ padding: '1rem' }}></i>
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
