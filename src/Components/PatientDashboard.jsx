// src/components/PatientDashboard.js
import React, { useState } from 'react';
import './PatientDashboard.css';

const PatientDashboard = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleButtonClick = (section) => {
    setSelectedSection(selectedSection === section ? null : section);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Patient Dashboard</h1>
      <div className="dashboard-grid">
        {/* Section for available beds */}
        <div className="dashboard-card">
          <h2>Available Beds</h2>
          <p>Check the availability of beds in various hospitals.</p>
          <button className="dashboard-button" onClick={() => handleButtonClick('beds')}>
            {selectedSection === 'beds' ? 'Hide Details' : 'View Details'}
          </button>
          {selectedSection === 'beds' && (
            <div className="info-section">
              {/* Add detailed information here */}
              <p>Detailed information about available beds...</p>
            </div>
          )}
        </div>

        {/* Section for medicines */}
        <div className="dashboard-card">
          <h2>Medicines Inventory</h2>
          <p>Check the availability of medicines in different hospitals.</p>
          <button className="dashboard-button" onClick={() => handleButtonClick('medicines')}>
            {selectedSection === 'medicines' ? 'Hide Inventory' : 'View Inventory'}
          </button>
          {selectedSection === 'medicines' && (
            <div className="info-section">
              {/* Add detailed information here */}
              <p>Detailed information about medicines inventory...</p>
            </div>
          )}
        </div>

        {/* Section for appointments */}
        <div className="dashboard-card">
          <h2>Recent Appointments</h2>
          <p>View your recent and upcoming appointments.</p>
          <button className="dashboard-button" onClick={() => handleButtonClick('appointments')}>
            {selectedSection === 'appointments' ? 'Hide Appointments' : 'View Appointments'}
          </button>
          {selectedSection === 'appointments' && (
            <div className="info-section">
              {/* Add detailed information here */}
              <p>Detailed information about recent appointments...</p>
            </div>
          )}
        </div>

        {/* Section for nearby hospitals */}
        <div className="dashboard-card">
          <h2>Nearby Hospitals</h2>
          <p>Find hospitals near your location and check their services.</p>
          <button className="dashboard-button" onClick={() => handleButtonClick('hospitals')}>
            {selectedSection === 'hospitals' ? 'Hide Hospitals' : 'Find Hospitals'}
          </button>
          {selectedSection === 'hospitals' && (
            <div className="info-section">
              {/* Add detailed information here */}
              <p>Detailed information about nearby hospitals...</p>
            </div>
          )}
        </div>

        {/* Section for health reports */}
        <div className="dashboard-card">
          <h2>Health Reports</h2>
          <p>Access your health reports and medical history.</p>
          <button className="dashboard-button" onClick={() => handleButtonClick('reports')}>
            {selectedSection === 'reports' ? 'Hide Reports' : 'View Reports'}
          </button>
          {selectedSection === 'reports' && (
            <div className="info-section">
              {/* Add detailed information here */}
              <p>Detailed information about health reports...</p>
            </div>
          )}
        </div>

        {/* Section for emergency contacts */}
        <div className="dashboard-card">
          <h2>Emergency Contacts</h2>
          <p>View emergency contact numbers and details.</p>
          <button className="dashboard-button" onClick={() => handleButtonClick('contacts')}>
            {selectedSection === 'contacts' ? 'Hide Contacts' : 'View Contacts'}
          </button>
          {selectedSection === 'contacts' && (
            <div className="info-section">
              {/* Add detailed information here */}
              <p>Detailed information about emergency contacts...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
