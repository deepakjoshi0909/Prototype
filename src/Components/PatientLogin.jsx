// src/Components/PatientLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PatientLogin.css';

const PatientLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic
    navigate('/patient-dashboard');
  };

  return (
    <div className="form-container">
      <h1>Patient Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

export default PatientLogin;
