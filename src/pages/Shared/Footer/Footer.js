import React from 'react';
import logoWhite from '../../../logo-white.svg';

const Footer = () => {
	const today = new Date();
	const thisYear = today.getFullYear();

	return (
		<footer className="py-8 bg-gradient-to-t from-my-gradient-stop-dark to-my-gradient-stop-light text-gray-200">
			<div className="container">
				<div className="flex flex-col sm:flex-row sm:justify-evenly space-y-8 sm:space-y-0 sm:space-x-8">
					<div className="logo flex-shrink-0">
						<img src={logoWhite} alt="DentaCure logo" />
					</div>
					<div className="text-left">
						<h4 className="text-base font-semibold text-gray-300 mb-2">Email</h4>
						<p className="text-sm">support@dentacure.org</p>
						<h4 className="text-base font-semibold text-gray-300 mb-2 mt-4">Phone</h4>
						<p className="text-sm">+1 (202) 900 7178</p>
					</div>
				</div>
				<p className="mt-10 text-center text-xs md:text-sm">
					&copy; {thisYear} <span className="text-gray-100">Fazle Rabbi Rana.</span> <br className="md:hidden" /> <span>All Rights Reserved</span>.
				</p>
			</div>
		</footer>
	);
};

export default Footer;