// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import HospitalLogin from './Components/HospitalLogin';
import HospitalRegister from './Components/HospitalRegister';
import PatientLogin from './Components/PatientLogin';
import PatientRegister from './Components/PatientRegister';
import HospitalDashboard from './Components/HospitalDashboard';
import PatientDashboard from './Components/PatientDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hospital-login" element={<HospitalLogin />} />
        <Route path="/hospital-register" element={<HospitalRegister />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/patient-register" element={<PatientRegister />} />
        <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
