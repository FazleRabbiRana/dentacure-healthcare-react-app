import React from 'react';
import bannerImg from '../../../images/banner-bg-1.jpg';

const Banner = () => {
	return (
		<section id="banner" className="bg-no-repeat bg-cover bg-right relative isolate" style={{backgroundImage: `url(${bannerImg})`}}>
			<div className="absolute inset-0 bg-gradient-to-r from-my-primary-dark via-my-primary-light z-1n"></div>
			<div className="container py-12 min-h-screen-80 flex items-center z-10">
				<div className="sm:w-3/5 md:w-1/2">
					<h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white mb-2">DentaCure</h1>
					<h2 className="font-medium text-xl md:text-2xl lg:text-3xl text-my-blue capitalize">Protect your teeth with us</h2>
					<p className="text-white mt-4 leading-loose max-w-lg">Customize your smile with Digital Smile Design (DSD) and dental treatments by our leading aesthetic dental specialists.</p>
				</div>
			</div>
		</section>
	);
};

export default Banner;