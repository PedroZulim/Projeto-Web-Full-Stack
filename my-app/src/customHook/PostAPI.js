import {useState, useEffect} from "react";

const PostAPI = (url, obj) => {
    const [data, setData] = useState([]);

    useEffect(() => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(obj)
		};
        fetch(url, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            });
    }, []);

    return [data];
};

export default PostAPI;
