<<<<<<< HEAD
import React, { useEffect, useState, useContext } from "react";
import { useUser } from "@clerk/clerk-react";
import { allUsersContextObj } from "../../../contexts/AllUsersContext";

function AdminPage() {
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
  if (!dbUser) return <div>Loading Admin dashboard...</div>;

  return (
    <div className="container mt-5">
      <h2>👨‍🏫 Admin Dashboard</h2>
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
      {/* Add Admin-specific content here */}
=======
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./AdminPage.css";
import {
  FaTachometerAlt,
  FaUsers,
  FaFileAlt,
  FaComments,
  FaChartBar,
  FaClock,
  FaCog,
  FaBell,
  FaPalette,
  FaDatabase,
  FaLink,
  FaCommentDots,
} from "react-icons/fa";

function AdminPage() {
  const sidebarItems = [
    {
      name: "Dashboard Overview",
      icon: <FaTachometerAlt />,
      path: "/admin-dashboard/dashboard-overview",
    },
    {
      name: "User Management",
      icon: <FaUsers />,
      path: "/admin-dashboard/user-management",
    },
    {
      name: "Content Management",
      icon: <FaFileAlt />,
      path: "/admin-dashboard/content-management",
    },
    {
      name: "Material Requests",
      icon: <FaFileAlt />,
      path: "/admin-dashboard/material-requests",
    },
    {
      name: "Discussion Forums",
      icon: <FaComments />,
      path: "/admin-dashboard/discussion-forums",
    },
    {
      name: "Analytics & Reports",
      icon: <FaChartBar />,
      path: "/admin-dashboard/analytics-reports",
    },
    {
      name: "Audit Logs",
      icon: <FaClock />,
      path: "/admin-dashboard/audit-logs",
    },
    {
      name: "Site Settings",
      icon: <FaCog />,
      path: "/admin-dashboard/site-settings",
    },
    {
      name: "Notifications",
      icon: <FaBell />,
      path: "/admin-dashboard/notifications",
    },
    {
      name: "Theming & Branding",
      icon: <FaPalette />,
      path: "/admin-dashboard/theming-branding",
    },
    {
      name: "Data Backup & Restore",
      icon: <FaDatabase />,
      path: "/admin/data-backup",
    },
    {
      name: "External Integrations",
      icon: <FaLink />,
      path: "/admin-dashboard/external-integrations",
    },
    {
      name: "Feedback System",
      icon: <FaCommentDots />,
      path: "/admin/feedback-system",
    },
  ];

  return (
    <div className="admin-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          {sidebarItems.map((item, index) => (
            <li key={index} className="sidebar-item">
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")} // Highlight active link
              >
                {item.icon && <span className="icon">{item.icon}</span>}
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <Outlet /> {/* Render child routes here */}
      </main>
>>>>>>> 6b0c75ddc8296f996c709083ae64beffbaaf1998
    </div>
  );
}

export default AdminPage;
