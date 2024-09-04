// src/Components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Hospital Management System</h1>
      <div className="buttons-container">
        <div className="card">
          <h2>Hospital</h2>
          <div className="btn-container">
            <Link to="/hospital-login">
              <button className="btn">Login</button>
            </Link>
            <Link to="/hospital-register">
              <button className="btn">Register</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <h2>Patient</h2>
          <div className="btn-container">
            <Link to="/patient-login">
              <button className="btn">Login</button>
            </Link>
            <Link to="/patient-register">
              <button className="btn">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
