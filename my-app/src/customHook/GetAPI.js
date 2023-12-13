import {useState, useEffect} from "react";
import UserToken from "./UserToken";

const GetAPI = (url) => {
	const {token, setToken} = UserToken()
	const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url, { headers: {"Authorization" : `Bearer ${token}`} })
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            });
    }, []);

    return [data, setData];
};

export default GetAPI;
