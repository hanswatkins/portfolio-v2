import React from 'react';
import '../stylesheets/Contact.css';

const Contact = () => {
	return (
		<section class='section is-large'>
			<div class='block'></div>
			<h2 class='title is-size-1 is-size-2-mobile'>Get in touch.</h2>
			<div class='columns'>
				<div class='column'></div>
				<div class='column'>
					<div class='card'>
						<div class='card-content'>
							<form name='contact' method='post'>
								<input
									class='input'
									type='hidden'
									name='form-name'
									value='contact'
								/>
								<label class='label' htmlFor='name'>
									Name
								</label>
								<br />
								<input
									class='input is-info'
									type='text'
									id='name'
									name='name'
									placeholder='Your name'
									required
								/>
								<label hidden class='label' htmlFor='email'>
									Email
								</label>
								<br />
								<input
									class='input is-info'
									type='email'
									id='email'
									name='email'
									placeholder='Email address'
									required
								/>
								<label class='label' htmlFor='message'>
									Message
								</label>
								<br />
								<textarea
									class='textarea is-info'
									id='message'
									name='message'
									placeholder="What's up?"
									required
								></textarea>
								<div class='field'>
									<p class='control'>
										<button class='button is-info'>
											Send <i class='fa-solid fa-paper-plane'></i>
										</button>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class='column'></div>
			</div>
		</section>
	);
};

export default Contact;
