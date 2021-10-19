import React from 'react';
import aboutImage from '../../../images/about-image.jpg';

const About = () => {
	return (
		<section id="home_about">
			<div className="flex flex-col sm:flex-row-reverse sm:justify-end xl:items-center">
				<div className="sm:w-1/2 xl:max-w-screen-lg pl-4 pr-4 pt-10 pb-6 lg:py-12 lg:px-8 xl:pl-16 xl:pr-20">
					<h2 className="text-my-primary-dark text-3xl lg:text-4xl mb-6">About our hospital</h2>
					<p className="text-sm md:text-base leading-relaxed lg:leading-loose">
						DentaCure Hospital Co., Ltd., is a subsidiary of Dental Corporation
						Public Company Limited. Our conglomerate dental group has a history
						of more than a decade of experience providing quality and
						professional dental care services to international patients and the
						local community winning numerous awards as a leading dental provider
						within south-east asia region.
					</p>
					<h5 className="mt-3 lg:mt-4 text-lg text-gray-500 font-medium">Founder of DentaCure</h5>
				</div>
				<div className="sm:w-1/2">
					<img
						src={aboutImage}
						alt="About"
						className="sm:w-full sm:h-full sm:object-cover sm:object-left-top"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
