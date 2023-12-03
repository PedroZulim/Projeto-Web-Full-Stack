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
const Layout = () => {
    return (
        <BrowserRouter basename="/">
            <Header/>
            <ContainerBody>
                <AppRoutes/>
            </ContainerBody>
            <Footer/>
        </BrowserRouter>
    )
};

export default Layout;
