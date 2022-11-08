import React from 'react';
import '../stylesheets/Projects.css';
import jsPixartPic from '../photos/jspixartpic.jpeg';
import weatherPic from '../photos/weatherPic.png';
import meetNEat from '../photos/meetNEat.png';
import twitterPortal from '../photos/twitterPortal.gif'
import wowGen from '../photos/wowGen.png'

const Projects = () => {
	return (
		<div class='container-adjust'>
			<section class='section is-small' style={{ backgroundColor: '#2f4a5c' }}>
				<div class='container-max-width'>
					<h1 class='projects-title has-text-centered'>Projects.</h1>
					<div class='columns'>
					<div class='column'>
							<section class='section border-bottom'>
								<div class='container'>
									<div class='columns'>
										<div class='column'>
											<a href='https://meet-n-eat.netlify.app/home'>
												<div
													class='card py-4 is-showdow-2xl is-shadow-none is-cursor-pointer transform is-duration-500 hover-translate-y'
													style={{
														backgroundColor: '#fafafa',
													}}
												>
													<div class='card-image p-5'>
														<figure class='image'>
															<img
																class='is-img-center'
																src={twitterPortal}
																alt='meet n eat'
															/>
														</figure>
													</div>
													<div class='card-content py-5'>
														<div class='content'>
															<h2 class='mt-2 mb-3'>Twitter Portal</h2>
															<p class='mb-4'>
																A simple Twitter posting portal using the Twitter API. Styled with Material UI. Keeps me from scrolling on social media. 
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
													}}
												>
													<div class='card-image p-5'>
														<figure class='image'>
															<img
																class='is-img-center'
																src={weatherPic}
																alt='weather app'
															/>
														</figure>
													</div>
													<div class='card-content py-5'>
														<div class='content'>
															<h2 class='mt-2 mb-3'>What's The Weather?</h2>
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
											<a href='https://js-pixart.netlify.app/'>
												<div
													class='card py-4 is-showdow-2xl is-shadow-none is-cursor-pointer transform is-duration-500 hover-translate-y'
													style={{
														backgroundColor: '#fafafa',
													}}
												>
													<div class='card-image p-5'>
														<figure class='image'>
															<img
																class='is-img-center'
																src={jsPixartPic}
																alt='js pixart'
															/>
														</figure>
													</div>
													<div class='card-content py-5'>
														<div class='content'>
															<h2 class='mt-2 mb-3'>JS Pixart</h2>
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
					</div>
					<div class='columns'>
						<div class='column'>
							<section class='section border-bottom'>
								<div class='container'>
									<div class='columns'>
										<div class='column'>
											<a href='https://meet-n-eat.netlify.app/home'>
												<div
													class='card py-4 is-showdow-2xl is-shadow-none is-cursor-pointer transform is-duration-500 hover-translate-y'
													style={{
														backgroundColor: '#fafafa',
													}}
												>
													<div class='card-image p-5'>
														<figure class='image'>
															<img
																class='is-img-center'
																src={meetNEat}
																alt='meet n eat'
															/>
														</figure>
													</div>
													<div class='card-content py-5'>
														<div class='content'>
															<h2 class='mt-2 mb-3'>Meet-N-Eat</h2>
															<p class='mb-4'>
																A MERN app for meeting new friends based on
																mutually "liked" restaurants. Made on an agile
																team of four in one week.
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
							<section class='section border-bottom'>
								<div class='container'>
									<div class='columns'>
										<div class='column'>
											<a href='https://meet-n-eat.netlify.app/home'>
												<div
													class='card py-4 is-showdow-2xl is-shadow-none is-cursor-pointer transform is-duration-500 hover-translate-y'
													style={{
														backgroundColor: '#fafafa',
													}}
												>
													<div class='card-image p-5'>
														<figure class='image'>
															<img
																class='is-img-center'
																src={wowGen}
																alt='meet n eat'
															/>
														</figure>
													</div>
													<div class='card-content py-5'>
														<div class='content'>
															<h2 class='mt-2 mb-3'>Wow Generator</h2>
															<p class='mb-4'>
																A MERN app for meeting new friends based on
																mutually "liked" restaurants. Made on an agile
																team of four in one week.
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
							
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Projects;
