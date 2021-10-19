import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
	const { id, name, description, image } = service;

	return (
		<div className="service bg-white h-full flex flex-col group">
			<div className="overflow-hidden">
				<img src={image} alt={name} className="duration-500 transform group-hover:scale-125" />
			</div>
			<div className="flex-auto px-2 md:px-4 py-4 flex flex-col">
				<h3 className="text-xl xl:text-2xl font-bold font-my-serif mb-2">{name}</h3>
				<p className="flex-auto text-sm leading-relaxed">
					{
						description?.length > 94 ? description.slice(0, 94) + '...' : description
					}
				</p>
				<div>
					<Link
						to={`/service/${id}`}
						className="flex-none btn-gradient-pill mt-4 text-xs"
					>
						View Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Service;