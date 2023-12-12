import React from 'react';
import Layout from "./template/Layout";
import {useState, useEffect} from "react";


function App() {
	const [loggedIn, setLoggedIn] = useState(false)
	const [email, setEmail] = useState("")

	useEffect(() => {
		// Fetch the user email and token from local storage
		const user = JSON.parse(localStorage.getItem("user"))

		// If the token/email does not exist, mark the user as logged out
		if (!user || !user.token) {
			setLoggedIn(false)
			return
		}

		// If the token exists, verify it with the auth server to see if it is valid
		fetch("http://localhost:5000/api/verify", {
			method: "POST",
			headers: {
				'jwt-token': user.token
			}
		})
			.then(r => r.json())
			.then(r => {
				setLoggedIn('success' === r.message)
				setEmail(user.email || "")
			})
	}, [])

    return (
        <div className="container">
            <Layout email={email} setEmail={setEmail}  loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </div>
    );
}

export default App;
