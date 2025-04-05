import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
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
import { useNavigate } from "react-router-dom";
import { SignIn, useAuth } from "@clerk/clerk-react";


function Header() {
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  const handleSignInClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRole(null);
  };

  const handleRoleClick = (role) => {
    setSelectedRole(role);
    if (role === "admin") {
      navigate("/signin/admin");
    } else if (role === "student") {
      navigate("/signin/student");
    } else if (role === "faculty") {
      navigate("/signin/faculty");
    }
    setShowModal(false); // Close the modal after navigating
  };

  const handleOnSignIn = async () => {
    if (isSignedIn) {
      if (selectedRole === "admin") {
        navigate("/admin");
      } else if (selectedRole === "student") {
        navigate("/student");
      } else if (selectedRole === "faculty") {
        navigate("/faculty");
      }
      setShowModal(false);
    } else {
      console.error("User is not signed in.");
    }
  };

  const handleSignUpClick = () => {
    setShowSignUpModal(true);
  };

  const handleCloseSignUpModal = () => {
    setShowSignUpModal(false);
  };

  const handleSignUpRoleClick = (role) => {
    if (role === "admin") {
      navigate("/signin/admin");
    } else if (role === "student") {
      navigate("/signin/student");
    } else if (role === "faculty") {
      navigate("/signin/faculty");
    }
    setShowSignUpModal(false); // Close the modal after navigating
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Logo */}
          <Link to="/" className="navbar-brand" href="#">
            Knowbase
          </Link>

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
                <Link to="/" className="nav-link" href="#">
                  <FaHome /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link" href="#">
                  <FaInfoCircle /> About Us
                </Link>
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
                <button
                  className="btn btn-link nav-link"
                  onClick={handleSignInClick}
                >
                  <FaSignInAlt /> Sign In
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={handleSignUpClick}
                >
                  <FaUserPlus /> Sign Up
                </button>
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
              <div className="role-card" onClick={() => handleRoleClick("admin")}>
                <RiAdminLine />
                <p>Admin</p>
              </div>
              <div className="role-card" onClick={() => handleRoleClick("student")}>
                <PiStudentBold />
                <p>Student</p>
              </div>
              <div className="role-card" onClick={() => handleRoleClick("faculty")}>
                <PiChalkboardTeacherBold />
                <p>Faculty</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUpModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseSignUpModal}>
              &times;
            </button>
            <h2>Select Your Role</h2>
            <div className="role-grid">
              <div className="role-card" onClick={() => handleSignUpRoleClick("admin")}>
                <RiAdminLine />
                <p>Admin</p>
              </div>
              <div className="role-card" onClick={() => handleSignUpRoleClick("student")}>
                <PiStudentBold />
                <p>Student</p>
              </div>
              <div className="role-card" onClick={() => handleSignUpRoleClick("faculty")}>
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
