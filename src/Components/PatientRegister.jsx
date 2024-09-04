// src/Components/PatientRegister.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PatientRegister.css';

const PatientRegister = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform registration logic
    navigate('/patient-dashboard');
  };

  return (
    <div className="form-container">
      <h1>Patient Register</h1>
      <form onSubmit={handleRegister} className="register-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
};

export default PatientRegister;
