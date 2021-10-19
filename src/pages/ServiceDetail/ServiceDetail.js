import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useData from '../../hooks/useData';

const ServiceDetail = () => {
	const { serviceId } = useParams();
	const [thisService, setThisService] = useState({});
	const { services } = useData();

	useEffect(() => {
		const clickedService = services.find(service => service.id === +serviceId);
		setThisService(clickedService);
	}, [services]);

	// console.log(thisService);

	return (
		<section  className="service-detail py-10 md:py-12">
			<div className="container">
				<div className="flex flex-col md:flex-row-reverse md:justify-between">
					<div className="md:w-1/2 lg:w-2/5">
						<img src={thisService?.image} alt={thisService?.name} />
					</div>
					<div className="md:w-1/2 md:pr-8 mt-6 md:mt-0">
						<h3 className="text-my-primary-dark text-2xl md:text-3xl mb-4">{thisService?.name}</h3>
						<p className="text-sm leading-loose">{thisService?.description}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceDetail;