import React from "react";
import "./Dashboard.css";
import { FaUpload, FaUser, FaFolderOpen, FaComments } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { MdOutlineForum } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="main-header">
        <h1>Dashboard</h1>
        <button className="upload-button">New Upload</button>
      </header>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-card purple">
          <div className="stat-content">
            <h2>Total Uploads</h2>
            <p className="stat-value">54</p>
            <p className="stat-change">+12% this month</p>
          </div>
          <FaUpload className="stat-icon" />
        </div>
        <div className="stat-card blue">
          <div className="stat-content">
            <h2>Pending Requests</h2>
            <p className="stat-value">8</p>
          </div>
          <FaUser className="stat-icon" />
        </div>
        <div className="stat-card green">
          <div className="stat-content">
            <h2>Recent Downloads</h2>
            <p className="stat-value">23</p>
            <p className="stat-change">This week</p>
          </div>
          <HiOutlineDownload className="stat-icon" />
        </div>
        <div className="stat-card orange">
          <div className="stat-content">
            <h2>Forum Activity</h2>
            <p className="stat-value">15</p>
            <p className="stat-change">5 new posts</p>
          </div>
          <MdOutlineForum className="stat-icon" />
        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="action-buttons-section">
        <button className="action-button purple">
          <FaUpload className="icon" /> Upload Material
        </button>
        <button className="action-button blue">
          <FaComments className="icon" /> View Requests
        </button>
        <button className="action-button green">
          <FaFolderOpen className="icon" /> My Uploads
        </button>
        <button className="action-button orange">
          <MdOutlineForum className="icon" /> Forums
        </button>
      </section>

      {/* Activity and Notifications Section */}
      <section className="activity-section">
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>
              <div className="activity-icon purple">U</div>
              <div>
                <p className="activity-title">Data Structures Lecture Notes</p>
                <p className="activity-time">2 hours ago</p>
                <p className="activity-detail">
                  Uploaded new lecture notes for Week 5
                </p>
              </div>
            </li>
            <li>
              <div className="activity-icon blue">C</div>
              <div>
                <p className="activity-title">Student Question</p>
                <p className="activity-time">4 hours ago</p>
                <p className="activity-detail">
                  Replied to question about AVL Trees
                </p>
              </div>
            </li>
            <li>
              <div className="activity-icon orange">F</div>
              <div>
                <p className="activity-title">New Forum Post</p>
                <p className="activity-time">1 day ago</p>
                <p className="activity-detail">
                  Started discussion about Dynamic Programming
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="notifications">
          <h2>Latest Notifications</h2>
          <ul>
            <li>
              <AiOutlineCheckCircle className="notification-icon green" />
              <div>
                <p className="notification-title green">Request Approved</p>
                <p className="notification-detail">
                  Your material was approved for publishing
                </p>
              </div>
            </li>
            <li>
              <HiOutlineDownload className="notification-icon blue" />
              <div>
                <p className="notification-title blue">
                  Material Downloaded 20x today
                </p>
                <p className="notification-detail">
                  Data Structures Week 5 Notes
                </p>
              </div>
            </li>
            <li>
              <MdOutlineForum className="notification-icon purple" />
              <div>
                <p className="notification-title purple">New Forum Reply</p>
                <p className="notification-detail">
                  Student replied to your thread
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
