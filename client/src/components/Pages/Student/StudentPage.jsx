import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./StudentPage.css";
import {
  FaHome,
  FaBook,
  FaBell,
  FaFileAlt,
  FaComments,
  FaCalendarAlt,
  FaBookmark,
  FaGraduationCap,
  FaClipboardCheck,
  FaHistory,
  FaStar,
  FaUsers,
  FaFileUpload,
} from "react-icons/fa";

function StudentPage() {
  const sidebarItems = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      path: "/student-dashboard/dashboard",
    },
    {
      name: "Repository",
      icon: <FaBook />,
      path: "/student-dashboard/repository",
    },
    {
      name: "Request Material",
      icon: <FaFileAlt />,
      path: "/student-dashboard/request-material",
    },
    { name: "Forums", icon: <FaComments />, path: "/student-dashboard/forums" },
    {
      name: "My Bookings",
      icon: <FaCalendarAlt />,
      path: "/student/my-bookings",
    },
    {
      name: "Bookmarks",
      icon: <FaBookmark />,
      path: "/student-dashboard/bookmarks",
    },
    {
      name: "Learning Paths",
      icon: <FaGraduationCap />,
      path: "/student-dashboard/learning-paths",
    },
    {
      name: "Assessments",
      icon: <FaClipboardCheck />,
      path: "/student-dashboard/assessments",
    },
    {
      name: "History",
      icon: <FaHistory />,
      path: "/student-dashboard/history",
    },
    { name: "Reviews", icon: <FaStar />, path: "/student-dashboard/reviews" },
    {
      name: "Study Groups",
      icon: <FaUsers />,
      path: "/student-dashboard/study-groups",
    },
    {
      name: "File Converter",
      icon: <FaFileUpload />,
      path: "/student-dashboard/file-converter",
    },
    {
      name: "Notifications",
      icon: <FaBell />,
      path: "/student-dashboard/notifications",
    },
  ];
  return (
    <>
      <div className="student-page">
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
      </div>
    </>
  );
}

export default StudentPage;
