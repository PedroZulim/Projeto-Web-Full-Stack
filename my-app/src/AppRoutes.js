import {useRoutes} from 'react-router-dom';

import React from 'react';
import Home from "./template/Home";
import About from "./template/About";
import NoPage from "./template/NoPage";
import ListaShips from "./ships/ListaShips";
import DetalhesShips from "./ships/DetalhesShips";
import DetalheRockets from "./rockets/DetalheRockets";
import ListaRockets from "./rockets/ListaRockets";


function AppRoutes() {
    return useRoutes([
        {path: "Projeto-Web-Full-Stack", element: <Home/>},
        {path: "Projeto-Web-Full-Stack/about", element: <About/>},
        {path: "Projeto-Web-Full-Stack/spacex/ships/:id", element: <DetalhesShips/>},
        {path: "Projeto-Web-Full-Stack/spacex/ships", element: <ListaShips/>},

        {path: "Projeto-Web-Full-Stack/spacex/rockets/:id", element: <DetalheRockets/>},
        {path: "Projeto-Web-Full-Stack/spacex/rockets", element: <ListaRockets/>},

        {path: "*", element: <NoPage/>},
    ]);
}

export default AppRoutes;
