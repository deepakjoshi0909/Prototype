// src/Components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Hospital Management System</h1>
      <div>
        <h2>Hospital</h2>
        <Link to="/hospital-login">
          <button>Login</button>
        </Link>
        <Link to="/hospital-register">
          <button>Register</button>
        </Link>
      </div>
      <div>
        <h2>Patient</h2>
        <Link to="/patient-login">
          <button>Login</button>
        </Link>
        <Link to="/patient-register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
