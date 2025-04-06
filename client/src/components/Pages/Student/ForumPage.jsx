import React from "react";
import { FaThumbsUp, FaThumbsDown, FaCommentDots, FaCheckCircle } from "react-icons/fa";
import "./ForumPage.css";

function ForumPage() {
  return (
    <div className="forum-page">
      {/* Search and Filters */}
      <div className="forum-header">
        <input
          type="text"
          className="search-bar"
          placeholder="Search discussions..."
        />
        <div className="filters">
          <button className="filter-btn active">Newest</button>
          <button className="filter-btn">Most Answered</button>
          <button className="filter-btn">Faculty Answered</button>
        </div>
        <button className="new-discussion-btn">+ New Discussion</button>
      </div>

      {/* Forum Item */}
      <div className="forum-item">
        <div className="forum-content">
          <h3>Help with Neural Network Architecture</h3>
          <p>I'm working on a CNN for image classification...</p>
          <div className="tags">
            <span className="tag">Deep Learning</span>
            <span className="tag">CNN</span>
            <span className="tag">Neural Networks</span>
          </div>
        </div>
        <div className="forum-meta">
          <div className="meta-info">
            <FaThumbsUp /> 5
            <FaThumbsDown /> 0
            <FaCommentDots /> 3 replies
          </div>
          <div className="status">
            <FaCheckCircle className="status-icon" /> Faculty Answered
          </div>
          <div className="date">10/03/2024</div>
        </div>
      </div>

      {/* Load More Button */}
      <button className="load-more">Load More</button>
    </div>
  );
}

export default ForumPage;