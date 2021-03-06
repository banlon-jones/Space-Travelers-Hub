import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './planet.png';

function Navbar() {
  return (
    <div>
      <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">
            <img src={logo} height="60" alt="brand logo" />
            Space Travellers Hub
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/rockets"
                  className={({ isActive }) => (isActive ? 'active px-2' : 'text-decoration-none px-3')}
                >
                  Rockets
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => (isActive ? 'active px-2' : 'text-decoration-none px-3')}
                  to="/missions"
                >
                  Missions
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => (isActive ? 'active px-2' : 'text-decoration-none px-3')}
                  to="/my-profile"
                >
                  My Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
