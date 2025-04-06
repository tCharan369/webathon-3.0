import React from "react";
import "./BookmarksPage.css";
import { FaBook, FaTrash } from "react-icons/fa";

function BookmarksPage() {
  return (
    <div className="bookmarks-page">
      <h2>Your Bookmarks</h2>
      <div className="bookmarks-list">
        {/* Bookmark Item */}
        <div className="bookmark-item">
          <div className="bookmark-info">
            <h3>Introduction to Machine Learning</h3>
            <p>Comprehensive guide covering ML fundamentals and algorithms</p>
            <span className="bookmark-date">Bookmarked on: 10/03/2024</span>
          </div>
          <button className="remove-btn">
            <FaTrash /> Remove
          </button>
        </div>

        {/* Another Bookmark Item */}
        <div className="bookmark-item">
          <div className="bookmark-info">
            <h3>Advanced Database Systems</h3>
            <p>Detailed notes on database design and optimization techniques</p>
            <span className="bookmark-date">Bookmarked on: 09/03/2024</span>
          </div>
          <button className="remove-btn">
            <FaTrash /> Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookmarksPage;