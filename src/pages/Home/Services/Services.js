import React from 'react';
import useData from '../../../hooks/useData';
import Service from '../../Service/Service';

const Services = () => {
	const { services } = useData();

	return (
		<section id="home_services" className="py-10 md:py-12 bg-gray-100">
			<div className="container">
				<h2 className="text-3xl lg:text-4xl text-my-primary-dark pb-6 mb-6 relative isolate overflow-hidden">
					Dental services
					<span className="absolute top-1/4 left-4 transform scale-200 origin-center-left opacity-10 text-my-black z-1n">Services</span>
				</h2>
				<div className="all-services grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
					{
						services.map(service => <Service key={service.id} service={service} />)
					}
				</div>
			</div>
		</section>
	);
};

export default Services;