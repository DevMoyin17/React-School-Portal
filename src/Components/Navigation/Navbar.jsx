import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images.jpeg'


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#"><img src={logo} className="logo" alt="..."/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">Programmes</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">Admisssion</Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    E-portal
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link to="/Admin" className="dropdown-item">Staff</Link></li>
                    <li><Link to="/SignUp" className="dropdown-item">Student</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
