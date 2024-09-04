// src/Components/HospitalRegister.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HospitalRegister = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    // Perform registration logic
    navigate('/hospital-dashboard');
  };

  return (
    <div>
      <h1>Hospital Register</h1>
      {/* Add form fields here */}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default HospitalRegister;
