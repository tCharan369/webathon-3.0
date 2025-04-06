import React from "react";
import "./RequestMaterialPage.css";
import { FaClock } from "react-icons/fa";
function RequestMaterialPage() {
  return (
    <div className="request-material-page">
      <h2>Request New Material</h2>
      <form className="request-form">
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            placeholder="e.g., Machine Learning"
          />
        </div>
        <div className="form-group">
          <label htmlFor="topic">Topic</label>
          <input type="text" id="topic" placeholder="e.g., Neural Networks" />
        </div>
        <div className="form-group">
          <label htmlFor="purpose">Purpose</label>
          <textarea
            id="purpose"
            placeholder="Describe why you need this material..."
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="urgency">Urgency</label>
          <select id="urgency">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">
          Submit Request
        </button>
      </form>

      <h2>Your Requests</h2>
      <div className="request-list">
        <div className="request-item">
          <div>
            <h3>Machine Learning</h3>
            <p>Neural Networks</p>
            <p className="submitted-date">
              <FaClock color="red" />
              Submitted on 09/03/2024
            </p>
          </div>
          <span className="status pending">Pending</span>
        </div>
      </div>
    </div>
  );
}

export default RequestMaterialPage;
