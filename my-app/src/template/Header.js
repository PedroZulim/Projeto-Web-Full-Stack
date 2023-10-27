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
                <Link to="/" className="nav-link"> About</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      // <div className='Header'>
      //
      // 	<div className='LogoHeader'>
      // 		<img src="Logo-Header.png" alt='Logo SerMais'/>
      // 	</div>
      // 	<div className='buttons-header'>
      // 		<div className='button'>
      // 			<button><Link to="/">Home</Link></button>
      // 		</div>
      // 		<div className='button'>
      // 			<button><Link to="/about">About</Link></button>
      // 		</div>
      // 		<div className='button'>
      // 			<button><Link to="/spacex/ships">Ships</Link></button>
      // 		</div>
      //
      // 	</div>
      // </div>

  )
      ;
}

export default Header;
