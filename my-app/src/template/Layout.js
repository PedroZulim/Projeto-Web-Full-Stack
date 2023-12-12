import {BrowserRouter} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import AppRoutes from "../AppRoutes";
import styled from "styled-components";

const ContainerBody = styled.body`
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Layout = (props) => {
    return (
        <BrowserRouter>
            <Header loggedIn={props.loggedIn} />
            <ContainerBody>
                <AppRoutes email={props.email} setEmail={props.setEmail}  loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}/>
            </ContainerBody>
            <Footer/>
        </BrowserRouter>
    )
};

export default Layout;
