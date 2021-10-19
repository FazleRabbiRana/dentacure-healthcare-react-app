import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../images/error-404.png';

const NotFound = () => {
	return (
		<div className="py-12 md:py-16 bg-gradient-to-b from-my-primary-dark min-h-screen-80">
			<div className="container text-center">
				<div className="max-w-sm mx-auto">
					<img src={errorImg} alt="Error 404" />
				</div>
				<Link
					to="/home"
					className="mt-10 btn-regular-pill"
				>
					Back to Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;