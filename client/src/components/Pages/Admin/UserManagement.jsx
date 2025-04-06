import React from "react";
import "./UserManagement.css"; // Add styles for the table and layout
import { FaEdit, FaTrash, FaEllipsisH } from "react-icons/fa";

function UserManagement() {
  const users = [
    {
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      lastActive: "2 hours ago",
    },
    {
      name: "Sarah Smith",
      email: "sarah@example.com",
      role: "Faculty",
      status: "Active",
      lastActive: "5 minutes ago",
    },
    {
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "Student",
      status: "Inactive",
      lastActive: "2 days ago",
    },
    {
      name: "Emily Brown",
      email: "emily@example.com",
      role: "Student",
      status: "Active",
      lastActive: "1 hour ago",
    },
    {
      name: "David Wilson",
      email: "david@example.com",
      role: "Faculty",
      status: "Active",
      lastActive: "30 minutes ago",
    },
  ];

  return (
    <div className="user-management">
      <header className="user-management-header">
        <h1>User Management</h1>
        <div className="actions">
          <button className="add-user-btn">+ Add New User</button>
        </div>
      </header>

      <div className="search-and-actions">
        <input
          type="text"
          placeholder="Search users..."
          className="search-input"
        />
        <div className="table-actions">
          <button>Filter</button>
          <button>Export</button>
          <button>Import</button>
        </div>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Last Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className={`role ${user.role.toLowerCase()}`}>{user.role}</td>
              <td
                className={`status ${
                  user.status.toLowerCase() === "active" ? "active" : "inactive"
                }`}
              >
                {user.status}
              </td>
              <td>{user.lastActive}</td>
              <td className="actions">
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
        <span>Showing 1 to 5 of 100 entries</span>
        <div className="pagination-controls">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </footer>
    </div>
  );
}

export default UserManagement;