import React from 'react';
import useData from '../../hooks/useData';

const Gallery = () => {
	const { services } = useData();

	return (
		<section id="gallery" className="py-10 md:py-12">
			<div className="container">
				<h2 className="text-center text-3xl lg:text-4xl text-my-primary-dark mb-8">Welcome to our Gallery</h2>
				<div className="gallery-images grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-8 gap-x-4 xl:gap-x-8">
					{
						services.map(service => <div 
							key={service.id}
							className="border-8 border-my-blue"
						>
							<img src={service.image} alt={service.name} />
						</div>)
					}
				</div>
			</div>
		</section>
	);
};

export default Gallery;