import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <h3>KnowBase</h3>
            <p>Empowering students and researchers with easy access to academic resources and collaboration tools.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Repository</a></li>
              <li><a href="#">Forums</a></li>
              <li><a href="#">Request Material</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: support@acadlibrary.edu</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Digital Academic Library | Built by team commuLink</p>
        </div>
      </footer>

    </div>
  )
}

export default Footer