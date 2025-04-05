import React, { useState } from 'react';
import './Header.css';
import { FaHome, FaInfoCircle, FaBook, FaBuilding, FaSignInAlt, FaUserPlus, FaGlobe } from 'react-icons/fa';
import { RiAdminLine } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { Link } from 'react-router-dom';


function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleSignInClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
                <Link to="/resources" className="nav-link" href="#">
                  <FaBook /> Explore Resources
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaBuilding /> Organization
                </a>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={handleSignInClick}>
                  <FaSignInAlt /> Sign In
                </button>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaUserPlus /> Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              &times;
            </button>
            <h2>Select Your Role</h2>
            <div className="role-grid">
              <div className="role-card">
                <RiAdminLine />
                <p>Admin</p>
              </div>
              <div className="role-card">
                <PiStudentBold />
                <p>Student</p>
              </div>
              <div className="role-card">
                <PiChalkboardTeacherBold />
                <p>Faculty</p>
              </div>
              {/* <div className="role-card">
                <FaSignInAlt />
                <p>Public User</p>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;