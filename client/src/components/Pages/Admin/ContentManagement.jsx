import React from "react";
import "./ContentManagement.css"; // Add styles for the table and layout
import { FaEdit, FaTrash, FaEllipsisH, FaCheck, FaTimes } from "react-icons/fa";

function ContentManagement() {
  const contentItems = [
    {
      title: "Introduction to Computer Science",
      size: "2.5 MB",
      date: "2024-03-15",
      tags: ["programming", "basics", "algorithms"],
      uploadedBy: "Dr. Sarah Smith",
      department: "Computer Science",
      status: "Approved",
      plagiarism: "2%",
      downloads: 156,
    },
    {
      title: "Advanced Mathematics Vol. 1",
      size: "4.2 MB",
      date: "2024-03-14",
      tags: ["calculus", "advanced", "theory"],
      uploadedBy: "Prof. John Davis",
      department: "Mathematics",
      status: "Pending",
      plagiarism: "15%",
      downloads: 89,
    },
    {
      title: "Modern Physics Handbook",
      size: "6.8 MB",
      date: "2024-03-13",
      tags: ["quantum", "mechanics", "theory"],
      uploadedBy: "Dr. Michael Chen",
      department: "Physics",
      status: "Approved",
      plagiarism: "5%",
      downloads: 234,
    },
  ];

  return (
    <div className="content-management">
      <header className="content-management-header">
        <h1>Content Management</h1>
        <div className="actions">
          <button className="upload-content-btn">+ Upload New Content</button>
        </div>
      </header>

      <div className="search-and-actions">
        <input
          type="text"
          placeholder="Search content..."
          className="search-input"
        />
        <div className="table-actions">
          <select className="category-filter">
            <option>All Categories</option>
            <option>Computer Science</option>
            <option>Mathematics</option>
            <option>Physics</option>
          </select>
          <button>Filter</button>
        </div>
      </div>

      <table className="content-table">
        <thead>
          <tr>
            <th>Content</th>
            <th>Uploaded By</th>
            <th>Status</th>
            <th>Plagiarism</th>
            <th>Downloads</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contentItems.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="content-info">
                  <p className="content-title">{item.title}</p>
                  <p className="content-meta">
                    {item.size} • {item.date}
                  </p>
                  <p className="content-tags">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                  </p>
                </div>
              </td>
              <td>
                <p>{item.uploadedBy}</p>
                <p className="department">{item.department}</p>
              </td>
              <td
                className={`status ${
                  item.status.toLowerCase() === "approved"
                    ? "approved"
                    : "pending"
                }`}
              >
                {item.status}
              </td>
              <td
                className={`plagiarism ${
                  parseInt(item.plagiarism) > 10 ? "high" : "low"
                }`}
              >
                {item.plagiarism}
              </td>
              <td>{item.downloads}</td>
              <td className="actions">
                {item.status === "Pending" && (
                  <>
                    <button className="approve-btn">
                      <FaCheck />
                    </button>
                    <button className="reject-btn">
                      <FaTimes />
                    </button>
                  </>
                )}
                <button className="edit-btn">
                  <FaEdit />
                </button>
                <button className="delete-btn">
                  <FaTrash />
                </button>
                <button className="more-btn">
                  <FaEllipsisH />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer className="pagination">
        <span>Showing 1 to 3 of 24 entries</span>
        <div className="pagination-controls">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </footer>
    </div>
  );
}

export default ContentManagement;