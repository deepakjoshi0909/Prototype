// src/Components/HospitalDashboard.jsx
import React from 'react';
import './HospitalDashboard.css';

const HospitalDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Hospital Dashboard</h1>
      
      {/* Beds Section */}
      <div className="dashboard-section">
        <h2>Beds</h2>
        <div className="section-content">
          <div className="bed-item">
            <h3>ICU Beds</h3>
            <p>Available: 10</p>
            <p>Occupied: 5</p>
            <button className="btn btn-primary">View Details</button>
            <button className="btn btn-secondary">Add New</button>
          </div>
          <div className="bed-item">
            <h3>General Ward Beds</h3>
            <p>Available: 20</p>
            <p>Occupied: 15</p>
            <button className="btn btn-primary">View Details</button>
            <button className="btn btn-secondary">Add New</button>
          </div>
        </div>
      </div>
      
      {/* Medicines Section */}
      <div className="dashboard-section">
        <h2>Medicines</h2>
        <div className="section-content">
          <div className="medicine-item">
            <h3>Paracetamol</h3>
            <p>Stock: 500 tablets</p>
            <button className="btn btn-primary">View Details</button>
            <button className="btn btn-secondary">Restock</button>
          </div>
          <div className="medicine-item">
            <h3>Amoxicillin</h3>
            <p>Stock: 300 tablets</p>
            <button className="btn btn-primary">View Details</button>
            <button className="btn btn-secondary">Restock</button>
          </div>
        </div>
      </div>
      
      {/* Doctor Appointments Section */}
      <div className="dashboard-section">
        <h2>Doctor Appointments</h2>
        <div className="section-content">
          <div className="appointment-item">
            <h3>Dr. John Doe</h3>
            <p>Specialty: Cardiology</p>
            <p>Next Appointment: 11:00 AM, Sep 5</p>
            <button className="btn btn-primary">View Schedule</button>
            <button className="btn btn-secondary">Book Appointment</button>
          </div>
          <div className="appointment-item">
            <h3>Dr. Jane Smith</h3>
            <p>Specialty: Neurology</p>
            <p>Next Appointment: 2:00 PM, Sep 5</p>
            <button className="btn btn-primary">View Schedule</button>
            <button className="btn btn-secondary">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboard;
