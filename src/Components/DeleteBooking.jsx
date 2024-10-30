import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navbar } from 'react-bootstrap';

const DeleteBooking = () => {
    const [emailid, setEmail] = useState("");
    const [services, setService] = useState(""); // State for selected service

    // Automatically fill the email field from sessionStorage
    useEffect(() => {
        const userEmail = sessionStorage.getItem('userEmail');
        if (userEmail) {
            setEmail(userEmail);
        }
    }, []);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleServiceChange = (event) => {
        setService(event.target.value); // Update service state
    };

    const handleDelete = () => {
        axios.delete(`http://localhost:8080/deletebooking/${emailid}/${services}`) // URL includes both email and service
            .then(response => {
                if (response.data.status === 'success') {
                    alert('Booking deleted successfully');
                    setEmail(""); // Clear the email input field
                    setService(""); // Clear the service dropdown
                } else {
                    alert('Error deleting: ' + response.data.message);
                }
            })
            .catch(error => {
                console.error(error);
                alert('An error occurred while deleting the booking');
            });
    };
  return (
    <div>

<Navbar />
            <div className="container">
                <div className="row">
                    <center><h1>DELETE BOOKING</h1></center>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="email" className="form-label">EMAIL</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='emailid'
                                    value={emailid}
                                    onChange={handleEmailChange}
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="service" className="form-label">SERVICE</label>
                                <select
                                    className="form-select"
                                    name="service"
                                    value={services}
                                    onChange={handleServiceChange} // Handle service change
                                >
                                    <option value="" disabled>Select services</option>
                                    <option value="doctor">Doctor Booking</option>
                                    <option value="caretaker">Caretaker Booking</option>
                                    <option value="driver">Driver Booking</option>
                              
                                </select>
                            </div>
                            <center>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button className="btn btn-danger" onClick={handleDelete}>DELETE</button>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>

        
    </div>
  )
}

export default DeleteBooking