import React from 'react';
import Layout from "./template/Layout";
import {useState, useEffect} from "react";
import UserToken from "./customHook/UserToken";


function App() {
	const [loggedIn, setLoggedIn] = useState(false)
	const [email, setEmail] = useState("")
	const {token, setToken} = UserToken()

	useEffect(() => {
		// Fetch the user email and token from local storage
		const user = JSON.parse(localStorage.getItem("user"))

		// If the token/email does not exist, mark the user as logged out
		if (!user || !user.token) {
			setLoggedIn(false)
			return
		}

		// If the token exists, verify it with the auth server to see if it is valid
		fetch("https://localhost:5000/api/verify", {
			method: "POST",
			headers: {"Authorization": `Bearer ${token}`}
		})
			.then(r => r.json())
			.then(r => {
				setLoggedIn(r.message === "Login Successful")
				setEmail(user.email || "")
			})
	}, [])

	return (
		<div className="container">
			<Layout email={email} setEmail={setEmail} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
		</div>
	);
}

export default App;