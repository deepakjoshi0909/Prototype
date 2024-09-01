// src/App.js
import React, { useState } from 'react';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import PatientDashboard from './Components/PatientDashboard';
import './App.css'; // Import the CSS file for global styles

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegisterSuccess = () => {
    setIsRegistering(false); // Switch back to login after registration
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        isRegistering ? (
          <RegisterPage onRegisterSuccess={handleRegisterSuccess} />
        ) : (
          <LoginPage onLogin={() => setIsLoggedIn(true)} />
        )
      ) : (
        <PatientDashboard />
      )}
      {!isLoggedIn && !isRegistering && (
        <button onClick={() => setIsRegistering(true)}>
          Register Here
        </button>
      )}
    </div>
  );
};

export default App;
