import React from 'react';

const Doctor = ({ doctor }) => {
	const { name, description, image } = doctor;
	// console.log(doctor);

	return (
		<div className="doctor text-center relative overflow-hidden group">
			<div className="overflow-hidden">
				<img src={image} alt={name} />
			</div>
			<div className="px-2 lg:px-4 pb-4 absolute bottom-0 inset-x-0 h-1/2 flex flex-col justify-end text-white bg-gradient-to-t from-my-primary-dark via-my-primary-light">
				<h3 className="text-xl md:text-sm lg:text-xl xl:text-2xl text-white mb-2">{name}</h3>
				<p className="text-semibold text-sm md:text-xs lg:text-sm font-my-serif overflow-hidden max-h-0 duration-300 group-hover:max-h-full">{description}</p>
			</div>
		</div>
	);
};

export default Doctor;