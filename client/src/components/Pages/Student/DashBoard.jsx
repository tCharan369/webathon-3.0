import React, { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import "./Dashboard.css";
import {
  FaDownload,
  FaBell,
  FaBookmark,
  FaClipboard,
  FaLock,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="dashboard-page">
      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-card">
          <div className="stat-icon">
            <FaDownload />
          </div>
          <div className="stat-info">
            <h3>145</h3>
            <p>Total Downloads</p>
            <span className="stat-change positive">+12</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FaBookmark />
          </div>
          <div className="stat-info">
            <h3>28</h3>
            <p>Bookmarks</p>
            <span className="stat-change positive">+5</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FaClipboard />
          </div>
          <div className="stat-info">
            <h3>3</h3>
            <p>Pending Returns</p>
            <span className="stat-change negative">-1</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FaLock />
          </div>
          <div className="stat-info">
            <h3>2</h3>
            <p>Active Requests</p>
            <span className="stat-change neutral">No change</span>
          </div>
        </div>
      </div>

      {/* Weekly Activity Section */}
      <div className="activity-section">
        <h2>Weekly Activity</h2>
        <div className="activity-chart">
          {/* Placeholder for the chart */}
          <p>Chart goes here</p>
        </div>
      </div>
      {/* Recent Notifications */}
      <div className="recent-notifications">
        <h2>Recent Notifications</h2>
        <ul>
          <li>
            <FaBell className="notification-icon" />
            <div>
              <p>Library book due tomorrow: Advanced Database Systems</p>
              <span>10/03/2024, 13:30:00</span>
            </div>
            <span className="status warning">warning</span>
          </li>
          <li>
            <FaBell className="notification-icon" />
            <div>
              <p>Your material request has been approved</p>
              <span>09/03/2024, 21:00:00</span>
            </div>
            <span className="status success">success</span>
          </li>
          <li>
            <FaBell className="notification-icon" />
            <div>
              <p>New course material uploaded: Machine Learning Basics</p>
              <span>09/03/2024, 15:45:00</span>
            </div>
            <span className="status info">info</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
