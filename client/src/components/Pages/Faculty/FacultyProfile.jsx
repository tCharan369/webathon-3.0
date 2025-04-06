import React from "react";
import "./FacultyProfile.css";
import { FaCamera } from "react-icons/fa";

function FacultyProfile() {
  return (
    <div className="faculty-page">
      {/* Main Content */}
      <main className="main-content">
        <header className="profile-header">
          <div className="profile-photo">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
            />
            <div className="edit-photo">
              <FaCamera />
            </div>
          </div>
          <div className="profile-info">
            <h2>Dr. Sarah Wilson</h2>
            <p>Update your photo and personal details</p>
          </div>
        </header>

        <div className="profile-details">
          <div className="details-row">
            <div className="details-section">
              <h3>Full Name</h3>
              <p>Dr. Sarah Wilson</p>
            </div>
            <div className="details-section">
              <h3>Department</h3>
              <p>Computer Science</p>
            </div>
          </div>
          <div className="details-row">
            <div className="details-section">
              <h3>Email</h3>
              <p>sarah.wilson@knowbase.edu</p>
            </div>
            <div className="details-section">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="details-row">
            <div className="details-section full-width">
              <h3>Subject Expertise</h3>
              <p>Data Structures, Algorithms, Machine Learning, Database Systems</p>
            </div>
          </div>
          <div className="details-row">
            <div className="details-section full-width">
              <h3>Bio</h3>
              <p>
                Professor of Computer Science with 15+ years of experience in
                teaching and research. Specializing in algorithm design and
                machine learning applications.
              </p>
            </div>
          </div>
        </div>

        <div className="profile-actions">
          <button className="cancel-button">Cancel</button>
          <button className="save-button">Save Changes</button>
        </div>
      </main>
    </div>
  );
}

export default FacultyProfile;