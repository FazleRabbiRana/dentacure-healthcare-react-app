import React from 'react';
import useData from '../../../hooks/useData';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
	const { doctors } = useData();

	return (
		<section id="home_doctors" className="py-10 md:py-12 bg-white">
			<div className="container">
				<h2 className="text-3xl lg:text-4xl text-my-primary-dark pb-6 mb-6 relative isolate overflow-hidden">
					Our Doctors
					<span className="absolute top-1/4 left-4 transform scale-200 origin-center-left opacity-10 text-my-black z-1n">Doctors</span>
				</h2>
				<div className="all-doctors grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-2 lg:gap-x-4 xl-gap-x-8">
					{
						doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor} />)
					}
				</div>
			</div>
		</section>
	);
};

export default Doctors;