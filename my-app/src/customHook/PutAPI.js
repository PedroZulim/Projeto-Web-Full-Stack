import {useState, useEffect} from "react";

const PutAPI = (url, obj) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const requestOptions = {
					method: 'PUT',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify(obj)
				};
				const res = await fetch(url, requestOptions);
				const newData = await res.json();
				setData(newData);
			} catch (error) {
				console.error('Error in PutAPI:', error);
			}
		};

		fetchData();
	}, [url, obj]);

	return [data];
};

export default PutAPI;
