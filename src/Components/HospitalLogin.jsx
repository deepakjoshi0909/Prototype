// src/Components/HospitalLogin.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HospitalLogin = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic
    navigate('/hospital-dashboard');
  };

  return (
    <div>
      <h1>Hospital Login</h1>
      {/* Add form fields here */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default HospitalLogin;
