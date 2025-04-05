import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Your Academic Journey Starts Here</h1>
          <p>A Smart Academic Repository & Collaboration Hub</p>
          <div className="hero-buttons">
            <button className="btn btn-warning">Get Started</button>
            <button className="btn btn-outline-secondary">Explore Resources</button>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="features-section">
        <h2 className="features-title">Platform Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Structured Repository</h3>
            <p>Organized academic materials for easy access</p>
          </div>
          <div className="feature-card">
            <h3>Smart Search & Filters</h3>
            <p>Find resources quickly and efficiently</p>
          </div>
          <div className="feature-card">
            <h3>Role-Based Access</h3>
            <p>Customized access for different user types</p>
          </div>
          <div className="feature-card">
            <h3>Discussion Forums</h3>
            <p>Collaborate and share knowledge</p>
          </div>
          <div className="feature-card">
            <h3>Material Requests</h3>
            <p>Request new academic resources</p>
          </div>
          <div className="feature-card">
            <h3>Offline Book Booking</h3>
            <p>Reserve physical books in advance</p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section">
        <div className="statistics-grid">
          <div className="stat-card">
            <h2>5000+</h2>
            <p>Materials Shared</p>
          </div>
          <div className="stat-card">
            <h2>25+</h2>
            <p>Institutions</p>
          </div>
          <div className="stat-card">
            <h2>200+</h2>
            <p>Active Faculty</p>
          </div>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section className="stay-updated-section">
        <h2 className="stay-updated-title">Stay Updated</h2>
        <p className="stay-updated-description">
          Subscribe to our newsletter for the latest academic resources and updates
        </p>
        <div className="stay-updated-form">
          <input
            type="email"
            className="email-input"
            placeholder="Enter your email"
          />
          <button className="btn btn-warning">Subscribe</button>
        </div>
      </section>
    </div>
  );
}

export default Home;