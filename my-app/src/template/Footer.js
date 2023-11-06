import React from "react";
import logo from "../images/logoX.png";
import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledImage = styled.img`
  width: 40px;
  height: auto;
  border-radius: 5px;
`;

function Footer() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">© Copyright 2023 SpaceX, Todos os direitos reservados</p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <StyledImage src={logo} className="card-img"/>
                </a>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><Link to="/Projeto-Web-Full-Stack" className="nav-link px-2 text-muted">Home</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Features</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">Pricing</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted">FAQs</Link></li>
                    <li className="nav-item"><Link to="/Projeto-Web-Full-Stack/about" className="nav-link px-2 text-muted">About</Link></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;
