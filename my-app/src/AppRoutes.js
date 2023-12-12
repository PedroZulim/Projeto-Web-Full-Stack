import {useRoutes} from 'react-router-dom';

import React from 'react';
import Home from "./template/Home";
import About from "./template/About";
import Login from "./template/Login";
import NoPage from "./template/NoPage";
import ListaShips from "./ships/ListaShips";
import DetalhesShips from "./ships/DetalhesShips";
import DetalheRockets from "./rockets/DetalheRockets";
import ListaRockets from "./rockets/ListaRockets";


function AppRoutes(props) {
	return useRoutes([
		{path: "/", element: <Home email={props.email} loggedIn={props.loggedIn}/>},
		{path: "/home", element: <Home email={props.email} loggedIn={props.loggedIn}/>},
		{path: "/about/", element: <About/>},
		{path: "/spacex/ships/:id", element: <DetalhesShips loggedIn={props.loggedIn}/>},
		{path: "/spacex/ships", element: <ListaShips loggedIn={props.loggedIn}/>},

		{path: "/spacex/rockets/:id", element: <DetalheRockets loggedIn={props.loggedIn}/>},
		{path: "/spacex/rockets", element: <ListaRockets loggedIn={props.loggedIn}/>},

		{
			path: "/login",
			element: <Login email={props.email} setEmail={props.setEmail} loggedIn={props.loggedIn}
							setLoggedIn={props.setLoggedIn}/>
		},

		{path: "*", element: <NoPage/>},
	]);
}

export default AppRoutes;
