import React from "react";
import "./MyBookingsPage.css";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

function MyBookingsPage() {
  return (
    <div className="my-bookings-page">
      {/* Booking Section */}
      <div className="booking-section">
        <h2>Book a Slot</h2>
        <div className="booking-container">
          {/* Calendar */}
          <div className="calendar">
            <table>
              <thead>
                <tr>
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>

          {/* Available Slots */}
          <div className="available-slots">
            <h3>Available Slots</h3>
            <ul>
              <li>
                <span>09:00</span>
                <span className="status available">Available</span>
              </li>
              <li>
                <span>10:00</span>
                <span className="status available">Available</span>
              </li>
              <li>
                <span>11:00</span>
                <span className="status available">Available</span>
              </li>
              <li>
                <span>14:00</span>
                <span className="status available">Available</span>
              </li>
              <li>
                <span>15:00</span>
                <span className="status available">Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Your Bookings Section */}
      <div className="your-bookings-section">
        <h2>Your Bookings</h2>
        <div className="booking-item">
          <div className="booking-info">
            <p>
              <FaCalendarAlt /> 15/03/2024 • <FaClock /> 10:00 - 11:00
            </p>
            <h3>Advanced Database Systems</h3>
            <p className="due-date">Due: 22/03/2024</p>
          </div>
          <button className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default MyBookingsPage;
