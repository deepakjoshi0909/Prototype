// src/components/LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css';  // CSS file for styling

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // For now, just log the email and password
    console.log('Logging in with:', email, password);
    onLogin();
  };

  return (
    <div className="login-page">
      <h2>Patient Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
