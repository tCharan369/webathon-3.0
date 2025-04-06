import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./FacultyPage.css";
import {
  FaUser,
  FaUpload,
  FaBook,
  FaGraduationCap,
  FaSearch,
  FaCog,
} from "react-icons/fa";
import { MdOutlineForum } from "react-icons/md";

function FacultyPage() {
  const navigate = useNavigate();

  return (
    <div className="faculty-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Dashboard</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li onClick={() => navigate("/faculty-dashboard/profile")}>
              <FaUser className="icon" /> My Profile
            </li>
            <li
              className="active"
              onClick={() => navigate("/faculty-dashboard/upload-materials")}
            >
              <FaUpload className="icon" /> Upload Materials
            </li>
            <li onClick={() => navigate("/faculty-dashboard/forums")}>
              <MdOutlineForum className="icon" /> Forums
            </li>
            <li onClick={() => navigate("/faculty-dashboard/book-manager")}>
              <FaBook className="icon" /> Book Manager
            </li>
            <li onClick={() => navigate("/faculty-dashboard/students")}>
              <FaGraduationCap className="icon" /> Students
            </li>
            <li onClick={() => navigate("/faculty-dashboard/explore")}>
              <FaSearch className="icon" /> Explore
            </li>
            <li onClick={() => navigate("/faculty-dashboard/settings")}>
              <FaCog className="icon" /> Settings
            </li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <p className="name">Dr. Sarah Wilson</p>
          <p className="role">Computer Science</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <Outlet /> {/* Render child routes here */}
      </main>
    </div>
  );
}

export default FacultyPage;
