import React from 'react';
import '../App.css';

const HospitalDashboard = () => {
  const availableBeds = [
    { id: 1, type: 'General', count: 10 },
    { id: 2, type: 'ICU', count: 5 },
    { id: 3, type: 'VIP', count: 2 },
  ];

  const medicineInventory = [
    { id: 1, name: 'Paracetamol', quantity: 100 },
    { id: 2, name: 'Ibuprofen', quantity: 50 },
    { id: 3, name: 'Aspirin', quantity: 30 },
  ];

  const doctorAppointments = [
    { id: 1, doctor: 'Dr. Smith', patient: 'John Doe', time: '10:00 AM' },
    { id: 2, doctor: 'Dr. Johnson', patient: 'Jane Doe', time: '11:00 AM' },
  ];

  return (
    <div className="container">
      <h1>Hospital Dashboard</h1>
      <div className="dashboard">

        {/* Bed Management Section */}
        <div className="section">
          <h2>Bed Availability</h2>
          <table>
            <thead>
              <tr>
                <th>Bed Type</th>
                <th>Available Count</th>
              </tr>
            </thead>
            <tbody>
              {availableBeds.map((bed) => (
                <tr key={bed.id}>
                  <td>{bed.type}</td>
                  <td>{bed.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Medicine Inventory Section */}
        <div className="section">
          <h2>Medicine Inventory</h2>
          <table>
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {medicineInventory.map((medicine) => (
                <tr key={medicine.id}>
                  <td>{medicine.name}</td>
                  <td>{medicine.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Doctor Appointments Section */}
        <div className="section">
          <h2>Doctor Appointments</h2>
          <table>
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Patient</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {doctorAppointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.patient}</td>
                  <td>{appointment.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default HospitalDashboard;
