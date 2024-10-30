import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';

const DoctorView = () => {
  const [data, setData] = useState([]);
  const [appointmentFee] = useState(250); // Static fee for the appointment
  const [selectedDoctor, setSelectedDoctor] = useState(null); // To track selected doctor
  const [showModal, setShowModal] = useState(false); // To control the modal display
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch the list of doctors from the backend
  const fetchData = () => {
    axios.post("http://localhost:8080/doctorview", {})
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  
    
    const BookButton =()=>{
      sessionStorage.clear();
      navigate("/bookdoctor");
  }

  // Function to handle appointment booking
  const handleAppointmentBooking = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true); // Open the modal
  };

  // Function to navigate to BookDoctor.jsx after modal confirmation
  const confirmBooking = () => {
    const appointmentDetails = {
      doctorName: selectedDoctor.name,
      specialization: selectedDoctor.specialization,
      location: selectedDoctor.location,
      phone: selectedDoctor.phone,
      availability: selectedDoctor.availability,
      fee: appointmentFee,
      emailid: sessionStorage.getItem('emailid'),
    };

    setShowModal(false); // Close the modal
    navigate('/bookdoctor', { state: { appointmentDetails } }); // Navigate to BookDoctor with appointment details
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div style={{ backgroundColor: '#c9d2d3', minHeight: '100vh', padding: '50px 0' }}>
      <Nav/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">DOCTOR NAME</th>
                  <th scope="col">SPECIALIZATION</th>
                  <th scope="col">LOCATION</th>
                  <th scope="col">PHONE</th>
                  <th scope="col">EMAIL</th>
                  <th scope="col">DATE</th>
                  <th scope="col">TIME</th>
                  <th scope="col">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {data.map((doctor, index) => (
                  <tr key={index}>
                    <th scope="row">{doctor.name}</th>
                    <td>{doctor.specialization}</td>
                    <td>{doctor.location}</td>
                    <td>{doctor.phone}</td>
                    <td>{doctor.emailid}</td>
                    <td>{doctor.date}</td>
                    <td>{doctor.time}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={BookButton} >BOOKING
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for Appointment Confirmation */}
      {showModal && selectedDoctor && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Appointment</h5>
                <button type="button" className="close" onClick={closeModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p><strong>Doctor Name:</strong> {selectedDoctor.name}</p>
                <p><strong>Specialization:</strong> {selectedDoctor.specialization}</p>
                <p><strong>Location:</strong> {selectedDoctor.location}</p>
                <p><strong>Phone:</strong> {selectedDoctor.phone}</p>
                <p><strong>Appointment Fee:</strong> ₹{appointmentFee}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancel</button>
                <button type="button" className="btn btn-primary" onClick={confirmBooking}>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorView;
