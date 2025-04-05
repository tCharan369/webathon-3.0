import React from 'react';
import './AboutUs.css'; // Assuming you have some CSS for styling

function AboutUs() {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <div>
        <h2>What is KnowBase?</h2>
        <p>
          KnowBase is a digital academic library providing open access to scholarly resources
          including research papers, books, and lecture notes.
        </p>
      </div>
      <div>
        <h2>How can I access more resources?</h2>
        <p>
          You can request academic access by submitting verification of your student or faculty
          status through our access upgrade form.
        </p>
      </div>
      <div>
        <h2>Is KnowBase free to use?</h2>
        <p>
          Yes, KnowBase's public repository is free to access. Additional resources may be
          available with academic verification.
        </p>
      </div>
      
      <div className="contact-us">
        <h1>Contact Us</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="you@email.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default AboutUs;