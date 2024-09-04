// src/Components/PatientDashboard.jsx
import React from 'react';
import './PatientDashboard.css';

const PatientDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Patient Dashboard</h1>

      {/* Book Appointment Section */}
      <div className="dashboard-section">
        <h2>Book Appointment</h2>
        <div className="section-content">
          <div className="doctor-item">
            <h3>Dr. Sarah Connor</h3>
            <p>Specialty: Cardiology</p>
            <p>Available: Mon, Wed, Fri - 10:00 AM to 2:00 PM</p>
            <button className="btn btn-primary">Book Appointment</button>
            <button className="btn btn-secondary">View Profile</button>
          </div>
          <div className="doctor-item">
            <h3>Dr. Alan Grant</h3>
            <p>Specialty: Orthopedics</p>
            <p>Available: Tue, Thu - 11:00 AM to 3:00 PM</p>
            <button className="btn btn-primary">Book Appointment</button>
            <button className="btn btn-secondary">View Profile</button>
          </div>
        </div>
      </div>

      {/* Emergency Services Section */}
      <div className="dashboard-section">
        <h2>Emergency Services</h2>
        <div className="section-content">
          <div className="emergency-item">
            <h3>Ambulance Service</h3>
            <p>24/7 Available</p>
            <p>Contact: +1-800-123-4567</p>
            <button className="btn btn-primary">Call Now</button>
            <button className="btn btn-secondary">View Details</button>
          </div>
          <div className="emergency-item">
            <h3>Emergency Ward</h3>
            <p>Open 24/7 with specialized doctors</p>
            <p>Location: Block A, 1st Floor</p>
            <button className="btn btn-primary">Get Directions</button>
            <button className="btn btn-secondary">View Services</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
