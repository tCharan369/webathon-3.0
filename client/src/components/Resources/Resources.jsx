import React from 'react';
import './Resources.css';
import { FaFilter } from "react-icons/fa";

function Resources() {
  return (
    <div className="resources-container">
      {/* Sidebar for Filters */}
      <aside className="filters-sidebar">
        <div className="filters d-flex justify-content-between" style={{width: '40%'}}> 
            <FaFilter/>
            <h3>Filters</h3>
        </div>
        <div className="filter-group">
          <label>Content Type</label>
          <select>
            <option>All Types</option>
            <option>Books</option>
            <option>Articles</option>
            <option>Videos</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Year</label>
          <select>
            <option>All Years</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Discipline</label>
          <select>
            <option>All Disciplines</option>
            <option>Computer Science</option>
            <option>Physics</option>
            <option>Mathematics</option>
          </select>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="resources-content">
        <h2>Open Access Resources</h2>
        <div className="resource-card">
          <div className="resource-header">
            <span className="resource-discipline">Computer Science</span>
            <h3>Introduction to Machine Learning</h3>
          </div>
          <p>Dr. Sarah Johnson • 2023</p>
          <div className="resource-tags">
            <span className="tag">AI</span>
            <span className="tag">ML</span>
            <span className="tag">Data Science</span>
          </div>
        </div>
        <div className="resource-card">
          <div className="resource-header">
            <span className="resource-discipline">Physics</span>
            <h3>Quantum Computing Fundamentals</h3>
          </div>
          <p>Prof. Michael Chen • 2024</p>
          <div className="resource-tags">
            <span className="tag">Quantum</span>
            <span className="tag">Computing</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Resources;