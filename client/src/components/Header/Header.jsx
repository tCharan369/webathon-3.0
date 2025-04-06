// Header.jsx
import React, { useState, useContext } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBook, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { useUser, useAuth } from "@clerk/clerk-react";
import { allUsersContextObj } from "../../contexts/AllUsersContext";

function Header() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();
  const { signOut } = useAuth();
  const { currentUser, setCurrentUser } = useContext(allUsersContextObj);

  async function handleSignOut() {
    await signOut();
    setCurrentUser(null);
    navigate("/");
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Knowbase</Link>
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

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link"><FaHome /> Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link"><FaInfoCircle /> About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/resources" className="nav-link"><FaBook /> Explore Resources</Link>
              </li>

              {!user ? (
                <>
                  <li className="nav-item">
                    <button
                      className="btn btn-link nav-link"
                      onClick={() => setShowSignInModal(true)}
                    >
                      <FaSignInAlt /> Sign In
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-link nav-link"
                      onClick={() => setShowSignUpModal(true)}
                    >
                      <FaUserPlus /> Sign Up
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item d-flex align-items-center px-3">
                    <img
                      src={currentUser?.profileImage || user.imageUrl}
                      alt="Profile"
                      className="rounded-circle"
                      width="32"
                      height="32"
                    />
                    <span className="ms-2">{currentUser?.fullName || user.fullName}</span>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-link nav-link"
                      onClick={handleSignOut}
                    >
                      <FaSignInAlt /> Sign Out
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Sign-In Modal */}
      {showSignInModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setShowSignInModal(false)}>
              &times;
            </button>
            <h3>Sign In As</h3>
            <div className="role-grid">
              <div className="role-card">
                <Link to="/signin/student" onClick={() => setShowSignInModal(false)}>Student</Link>
              </div>
              <div className="role-card">
                <Link to="/signin/faculty" onClick={() => setShowSignInModal(false)}>Faculty</Link>
              </div>
              <div className="role-card">
                <Link to="/signin/admin" onClick={() => setShowSignInModal(false)}>Admin</Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sign-Up Modal */}
      {showSignUpModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setShowSignUpModal(false)}>
              &times;
            </button>
            <h3>Sign Up As</h3>
            <div className="role-grid">
              <div className="role-card">
                <Link to="/signup/student" onClick={() => setShowSignUpModal(false)}>Student</Link>
              </div>
              <div className="role-card">
                <Link to="/signup/faculty" onClick={() => setShowSignUpModal(false)}>Faculty</Link>
              </div>
              <div className="role-card">
                <Link to="/signup/admin" onClick={() => setShowSignUpModal(false)}>Admin</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
