import React from 'react';
import {Link} from "react-router-dom";
import logoblack from "../images/SpaceX_Logo_Black.png";
import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRocket} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faShip} from '@fortawesome/free-solid-svg-icons';
import {faInfo} from '@fortawesome/free-solid-svg-icons';
import {faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <StyledDiv>
                        <FontAwesomeIcon icon={faHome} size={70} className="me-1"/>
                        <span>Home</span>
                    </StyledDiv>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/spacex/rockets" className="nav-link">
                                <StyledDiv className="ms-2">
                                    <FontAwesomeIcon icon={faRocket} size={70} className="text-black me-1"/>
                                    <span>Rockets</span>
                                </StyledDiv>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/spacex/ships" className="nav-link">
                                <StyledDiv className="ms-2">
                                    <FontAwesomeIcon icon={faShip} size={70} className="text-black me-1"/>
                                    <span>Ships</span>
                                </StyledDiv>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                <StyledDiv className="ms-2">
                                    <FontAwesomeIcon icon={faInfo} size={70} className="text-black me-1"/>
                                    <span>About</span>
                                </StyledDiv>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                <StyledDiv className="ms-2">
                                    <FontAwesomeIcon icon={faArrowRightToBracket} size={70} className="text-black me-1"/>
                                    <span>Login</span>
                                </StyledDiv>
                            </Link>
                        </li>
                    </ul>
                </div>
                <img src={logoblack} alt="Descrição da imagem" width="250" height="40"/>
            </div>
        </nav>
    )
}

export default Header;
