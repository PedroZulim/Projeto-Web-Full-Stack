import React from 'react';
import {Link} from "react-router-dom";
import logoblack from "../images/SpaceX_Logo_Black.png";
import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faShip } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

function Header() {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <StyledDiv>
            <FontAwesomeIcon icon={faHome} size={70}/>
            <Link to="/" className="navbar-brand"> Home</Link>
          </StyledDiv>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <StyledDiv className="ms-2">
                  <FontAwesomeIcon icon={faRocket} size={70}/>
                  <Link to="/spacex/rockets" className="nav-link"> Rockets</Link>
                </StyledDiv>
              </li>
              <li className="nav-item">
                <StyledDiv className="ms-2">
                  <FontAwesomeIcon icon={faShip} size={70}/>
                  <Link to="/spacex/ships" className="nav-link">Ships</Link>
                </StyledDiv>
              </li>
              <li className="nav-item">
                <StyledDiv className="ms-2">
                  <FontAwesomeIcon icon={faInfo} size={70}/>
                  <Link to="/About" className="nav-link"> About</Link>
                </StyledDiv>
              </li>
            </ul>
          </div>
          <img src={logoblack} alt="Descrição da imagem" width="250" height="40"/>
        </div>
      </nav>
  )
}

export default Header;
