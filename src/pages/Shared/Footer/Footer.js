import React from 'react';

const Footer = () => {
	const today = new Date();
	const thisYear = today.getFullYear();

	return (
		<footer className="py-8 bg-gradient-to-t from-my-gradient-stop-dark to-my-gradient-stop-light text-gray-200">
			<div className="container">
				<div className="text-center">
					<p className="text-xs md:text-sm">
						&copy; {thisYear} <span className="text-gray-100">Fazle Rabbi Rana.</span> <br className="md:hidden" /> <span>All Rights Reserved</span>.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;