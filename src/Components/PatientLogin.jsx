// src/Components/PatientLogin.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PatientLogin = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic
    navigate('/patient-dashboard');
  };

  return (
    <div>
      <h1>Patient Login</h1>
      {/* Add form fields here */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default PatientLogin;
