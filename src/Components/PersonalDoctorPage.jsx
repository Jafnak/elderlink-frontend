import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonalDoctorPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const emailId = sessionStorage.getItem('emailid'); // Get emailid from session storage

  useEffect(() => {
    if (emailId) {
      // Fetch appointments associated with the user
      axios.get(`http://localhost:8080/appointments/${emailId}`)
        .then((response) => {
          setAppointments(response.data.appointments);
        })
        .catch((error) => {
          console.error("Error fetching appointments:", error);
        });
    } else {
      console.error("No email ID found in session storage.");
    }
  }, [emailId]);

  // Fetch user details for a specific appointment
  const fetchUserDetails = (userEmail) => {
    axios.get(`http://localhost:8080/users/${userEmail}`) // Ensure this API endpoint is correct
      .then((response) => {
        setUserDetails(response.data); // Set user details from response
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  };

  const bookAppointment = (doctor, date, time) => {
    const userEmail = sessionStorage.getItem('emailid'); // Corrected to match session storage key

    axios.post("http://localhost:8080/api/appointments", {
      doctorName: doctor.name,
      date: date,
      time: time,
      userEmail: userEmail, // Send the user's email
    })
    .then(response => {
      console.log(response.data.message);
      console.log("User Details:", response.data.userDetails);
    })
    .catch(error => {
      console.error("Error booking appointment:", error);
    });
  };

  return (
    <div>
      <h2>Your Appointments</h2>
      {appointments.length > 0 ? (
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>
              <p><strong>Date:</strong> {appointment.date}</p>
              <p><strong>Time:</strong> {appointment.time}</p>
              <button onClick={() => fetchUserDetails(appointment.userEmail)}>View User Details</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments found.</p>
      )}

      {userDetails && (
        <div>
          <h2>User Details</h2>
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Email:</strong> {userDetails.emailid}</p>
          <p><strong>Phone:</strong> {userDetails.phone}</p>
          <p><strong>Address:</strong> {userDetails.address}</p>
          <p><strong>Gender:</strong> {userDetails.gender}</p>
          <p><strong>Age:</strong> {userDetails.age}</p>
          <p><strong>Guardian:</strong> {userDetails.gardian}</p>
          <p><strong>Guardian Email:</strong> {userDetails.gardemail}</p>
        </div>
      )}
    </div>
  );
};

export default PersonalDoctorPage;
