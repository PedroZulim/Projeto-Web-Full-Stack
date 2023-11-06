import React from 'react';
import {Link} from "react-router-dom";
import ship from "../images/shipIcon.svg";
import home from "../images/homeIcon.svg";
import rocket from "../images/rocketIcon.svg";
import about from "../images/aboutIcon.svg";
import logoblack from "../images/SpaceX_Logo_Black.png";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 25px;
  height: 25px;
`;

const StyledDiv = styled.div`
  display: flex;
  alignItems: center;
`;

function Header() {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <StyledDiv>
            <StyledImage src={home} className="me-2 mt-2"/>
            <Link to="/" className="navbar-brand"> Home</Link>
          </StyledDiv>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <StyledDiv className="ms-2">
                  <StyledImage className="mt-2" src={rocket}/>
                  <Link to="/spacex/rockets" className="nav-link"> Rockets</Link>
                </StyledDiv>
              </li>
              <li className="nav-item">
                <StyledDiv className="ms-2">
                  <StyledImage className="mt-2" src={ship}/>
                  <Link to="/spacex/ships" className="nav-link">Ships</Link>
                </StyledDiv>
              </li>
              <li className="nav-item">
                <StyledDiv className="ms-2">
                  <StyledImage className="mt-2" src={about}/>
                  <Link to="/About" className="nav-link"> About</Link>
                </StyledDiv>
              </li>
            </ul>
          </div>
          <img src={logoblack} alt="Descrição da imagem" width="250" height="40" />
        </div>
      </nav>
  )
      ;
}

export default Header;
