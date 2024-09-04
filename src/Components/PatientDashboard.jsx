import React, { useState } from 'react';
import '../App.css';

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  const availableDoctors = [
    { id: 1, name: 'Dr. Smith', specialty: 'Cardiologist' },
    { id: 2, name: 'Dr. Johnson', specialty: 'Dermatologist' },
    { id: 3, name: 'Dr. Williams', specialty: 'Pediatrician' },
  ];

  const handleAppointment = (doctorId) => {
    const doctor = availableDoctors.find((doc) => doc.id === doctorId);
    setAppointments([...appointments, doctor]);
  };

  return (
    <div className="container">
      <h1>Patient Dashboard</h1>
      <div className="dashboard">
        {/* Appointment Section */}
        <div className="section">
          <h2>Book an Appointment</h2>
          {availableDoctors.map((doctor) => (
            <div key={doctor.id}>
              <p>{doctor.name} - {doctor.specialty}</p>
              <button onClick={() => handleAppointment(doctor.id)}>Book Appointment</button>
            </div>
          ))}
          {appointments.length > 0 && (
            <div>
              <h3>Your Appointments</h3>
              <ul>
                {appointments.map((appt, index) => (
                  <li key={index}>{appt.name} - {appt.specialty}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Emergency Section */}
        <div className="section emergency-section">
          <h2>Emergency Services</h2>
          <p>For emergency situations, please contact our 24/7 support hotline.</p>
          <button>Call Emergency</button>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
