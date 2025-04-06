<<<<<<< HEAD
import React, { useEffect, useState, useContext } from "react";
import { useUser } from "@clerk/clerk-react";
import { allUsersContextObj } from "../../../contexts/AllUsersContext";

function FacultyPage() {
  const { user } = useUser();
  const [dbUser, setDbUser] = useState(null);
  const [error, setError] = useState(null);
  const { setCurrentUser } = useContext(allUsersContextObj);

  const fetchUserFromDB = async () => {
    try {
      const clerkId = user?.id;
      if (!clerkId) throw new Error("User not signed in.");

      const res = await fetch(
        `http://localhost:1986/studentUser/user/${clerkId}`
      );

      if (!res.ok) throw new Error("Failed to fetch user from DB");

      const data = await res.json();
      setDbUser(data);
      setCurrentUser(data); // optional
    } catch (err) {
      console.error("Failed to fetch user info:", err);
      setError(err.message);
    }
  };

  useEffect(() => {
    if (user) fetchUserFromDB();
  }, [user]);

  if (error) return <div className="text-danger">Error: {error}</div>;
  if (!dbUser) return <div>Loading faculty dashboard...</div>;

  return (
    <div className="container mt-5">
      <h2>👨‍🏫 Faculty Dashboard</h2>
      <p>Welcome, {dbUser.fullName}!</p>
      <img
        src={dbUser.profileImage}
        alt="Profile"
        className="rounded-circle"
        width="100"
        height="100"
      />
      <p>Email: {dbUser.email}</p>
      <p>Role: {dbUser.role}</p>
      {/* Add faculty-specific content here */}
=======
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
>>>>>>> 6b0c75ddc8296f996c709083ae64beffbaaf1998
    </div>
  );
}

export default FacultyPage;
