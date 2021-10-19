import { useEffect, useState } from "react";

const useData = () => {
	const [services, setServices] = useState([]);
	const [doctors, setDoctors] = useState([]);

	// load and set services data
	useEffect(() => {
		fetch('/data/dental-services.json')
			.then(res => res.json())
			.then(data => setServices(data));
	}, []);

	// load and set doctors data
	useEffect(() => {
		fetch('/data/dental-doctors.json')
			.then(res => res.json())
			.then(data => setDoctors(data));
	}, []);

	return {
		services,
		doctors,
	}
}

export default useData;