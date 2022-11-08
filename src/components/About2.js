import React from 'react';
import '../stylesheets/About.css';

const About2 = () => {
	return (
		<section
			class='hero is-fullheight'
			style={{ backgroundColor: '#2f4a5c', color: '#f1e7db' }}
		>
			<div class='hero-body'>
				<div class=''>
					<p className='about-title'>I began my career as an Audio Engineer</p>
					<ul>
						<li>
							<p className='about-subtitle' style={{ fontSize: '1.5rem' }}>
								<i class='fa-solid fa-check'></i>{' '}
								<a
									href='https://open.spotify.com/album/2qTdXY1w3bJXeQ4mI57ye1?si=_kYwe5RGQQ-8mfyVVf8D3A'
									style={{ color: '#f1e7db' }}
								>
									recording at Spotify’s studio in LA{' '}
									<i class='fa-solid fa-link fa-2xs'></i>
								</a>
							</p>
						</li>
						<li>
							<p className='about-subtitle' style={{ fontSize: '1.5rem' }}>
								<i class='fa-solid fa-check'></i>{' '}
								<a
									href='https://www.youtube.com/watch?v=CcxzkM5i8Ns'
									style={{ color: '#f1e7db' }}
								>
									partnering with Universal Music Group{' '}
									<i class='fa-solid fa-link fa-2xs'></i>
								</a>
							</p>
						</li>
						<li>
							<p className='about-subtitle' style={{ fontSize: '1.5rem' }}>
								<i class='fa-solid fa-check'></i>{' '}
								<a
									href='https://www.youtube.com/watch?v=s0Fi6Xvm7zs'
									style={{ color: '#f1e7db' }}
								>
									releasing music with Bluenote Records{' '}
									<i class='fa-solid fa-link fa-2xs'></i>
								</a>
							</p>
						</li>
						<li>
							<p className='about-subtitle' style={{ fontSize: '1.5rem' }}>
								<i class='fa-solid fa-check'></i>{' '}
								<a
									href='https://www.ableton.com/en/blog/studies-sound-arbour-lo-fi-beats-and-musical-exploration/'
									style={{ color: '#f1e7db' }}
								>
									teaching workshops with Ableton{' '}
									<i class='fa-solid fa-link fa-2xs'></i>
								</a>
							</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default About2;