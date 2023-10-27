import React from 'react';
import {Link} from "react-router-dom";

function Header() {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand"> Home</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/spacex/rockets" className="nav-link"> Rockets</Link>
              </li>
              <li className="nav-item">
                <Link to="/spacex/ships" className="nav-link"> Ships</Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link"> About</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
  )
      ;
}

export default Header;
