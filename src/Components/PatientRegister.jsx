// src/Components/PatientRegister.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PatientRegister = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    // Perform registration logic
    navigate('/patient-dashboard');
  };

  return (
    <div>
      <h1>Patient Register</h1>
      {/* Add form fields here */}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default PatientRegister;
