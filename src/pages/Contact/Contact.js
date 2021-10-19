import React from 'react';

const Contact = () => {
	const handleContactFormSubmit = e => {
		e.preventDefault();
	}

	return (
		<section id="contact" className="py-10 md:py-12">
			<div className="container">
				<h2 className="text-center text-3xl lg:text-4xl text-my-primary-dark mb-8">Contact us</h2>
				<div className="contact-form-area flex flex-col md:flex-row md:justify-center">
					<div className="contact-details flex-initial md:pr-12 lg:pr-24 mb-12 md:mb-0">
						<h3 className="text-xl mb-8">Feel free to knock</h3>
						<div className="mt-8">
							<h4 className="text-sm font-semibold mb-2">Address</h4>
							<p className="text-sm">
								DentaCure Hospital Co. Ltd.,<br /> 
								82 Bamboo Jhar, Nowhere, <br />
								NetherRealm.
							</p>
						</div>
						<div className="mt-8">
							<h4 className="text-sm font-semibold mb-2">Email</h4>
							<p className="text-sm">
								<a href="mailto:support@dentacure.org">support@dentacure.org</a>
							</p>
						</div>
						<div className="mt-8">
							<h4 className="text-sm font-semibold mb-2">Phone</h4>
							<p className="text-sm">
								<a href="tel:+12029007178">+1 (202) 900 7178</a>
							</p>
						</div>
					</div>
					<div className="contact-form md:w-1/2 lg:w-2/5">
						<h3 className="text-xl mb-8">Write us details</h3>
						<form onSubmit={handleContactFormSubmit} className="w-full max-w-md flex flex-col space-y-4 text-sm">
							<input type="text" placeholder="Your name" className="w-full h-12 px-4 rounded bg-gray-100 text-my-black" />
							<input type="email" placeholder="Your email address" className="w-full h-12 px-4 rounded bg-gray-100 text-my-black" />
							<input type="tel" placeholder="Your mobile number" className="w-full h-12 px-4 rounded bg-gray-100 text-my-black" />
							<textarea placeholder="Your message" className="w-full h-40 p-4 rounded bg-gray-100 text-my-black"></textarea>
							<input type="submit" value="Send" className="btn-regular rounded" />
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;