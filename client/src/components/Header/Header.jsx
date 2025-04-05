import React, { useState } from "react";
import "./Header.css";
import {
  FaHome,
  FaInfoCircle,
  FaBook,
  FaBuilding,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleSignInClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAdminClick = () => {
    navigate("/admin"); // Redirect to the admin page
    setShowModal(false); // Close the modal
  };

  const handleStudentClick = () => {
    navigate("/student"); // Redirect to the student page
    setShowModal(false); // Close the modal
  };

  const handleFacultyClick = () => {
    navigate("/faculty"); // Redirect to the faculty page
    setShowModal(false); // Close the modal
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
                <Link to="/" className="nav-link">
                  <FaHome /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link">
                  <FaInfoCircle /> About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/resources" className="nav-link">
                  <FaBook /> Explore Resources
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/organization" className="nav-link">
                  <FaBuilding /> Organization
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={handleSignInClick}
                >
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
              <div className="role-card" onClick={handleAdminClick}>
                <RiAdminLine />
                <p>Admin</p>
              </div>
              <div className="role-card" onClick={handleStudentClick}>
                <PiStudentBold />
                <p>Student</p>
              </div>
              <div className="role-card" onClick={handleFacultyClick}>
                <PiChalkboardTeacherBold />
                <p>Faculty</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
