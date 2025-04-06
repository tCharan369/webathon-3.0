import React from "react";
import "./RepositoryPage.css";

function RepositoryPage() {
  return (
    <div className="repository">
      {/* Search and Filters */}
      <div className="repository-header">
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search materials..."
            aria-label="Search materials"
          />
        </div>
        <div className="filters">
          <button className="filter-btn active" aria-pressed="true">
            Newest First
          </button>
          <button className="filter-btn" aria-pressed="false">
            Most Downloaded
          </button>
          <button className="filter-btn" aria-pressed="false">
            Faculty Uploads
          </button>
          <select className="filter-select" aria-label="Filter by subject">
            <option value="all">All Subjects</option>
            <option value="cs">Computer Science</option>
            <option value="math">Mathematics</option>
          </select>
          <select className="filter-select" aria-label="Filter by level">
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <button className="filter-btn" aria-pressed="false">
            More Filters
          </button>
        </div>
      </div>

      {/* Repository Item */}
      <div className="repository-item">
        <div className="item-header">
          <h3>Introduction to Machine Learning</h3>
          <span className="file-type">PDF</span>
        </div>
        <p className="repo-desc">
          Comprehensive guide covering ML fundamentals and algorithms
        </p>
        <div className="tags">
          <span className="tag">ML</span>
          <span className="tag">AI</span>
          <span className="tag">Computer Science</span>
        </div>
        <div className="author-info">
          <img
            src="https://via.placeholder.com/40"
            alt="Author"
            className="author-avatar"
          />
          <div>
            <p className="author-name">Dr. Sarah Wilson</p>
            <p className="publish-date">01/03/2024</p>
          </div>
        </div>
        <div className="rating">
          <span>⭐ 4.5</span>
          <span>234 downloads</span>
        </div>
        <div className="actions">
          <button className="download-btn">Download</button>
          <button className="bookmark-btn">Bookmark</button>
        </div>
      </div>

      {/* Load More Button */}
      <button className="load-more">Load More</button>
    </div>
  );
}

export default RepositoryPage;
