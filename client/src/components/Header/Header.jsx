import React from 'react';
import './Header.css'; // Add a CSS file for custom styling
import { FaHome, FaInfoCircle, FaBook, FaBuilding, FaSignInAlt, FaUserPlus, FaGlobe } from 'react-icons/fa';
import { TiUserAddOutline } from "react-icons/ti";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            Knowbase
          </a>

          {/* Toggler for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaHome /> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaInfoCircle /> About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaBook /> Explore Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaBuilding /> Organization
                </a>
              </li>
              <li className="nav-item signin-dropdown">
                <a className="nav-link" href="#">
                  <FaSignInAlt /> Sign In
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">Public User</a></li>
                  <li><a href="#">Student</a></li>
                  <li><a href="#">Faculty</a></li>
                  <li><a href="#">Admin</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaUserPlus /> Sign Up
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="languageDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaGlobe /> English
                </a>
                <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Spanish
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;