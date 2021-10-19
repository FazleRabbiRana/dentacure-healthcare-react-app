import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
	return (
		<>
			<Banner />
			<About />
			<Services />
			<Doctors />
		</>
	);
};

export default Home;