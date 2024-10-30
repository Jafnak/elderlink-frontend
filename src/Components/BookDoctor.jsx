import axios from 'axios';
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';

const BookDoctor = () => {
    const [data, setData] = useState({
        emailid: "",
        services: "",
        name: "",
        date: "",
        time: "",
    });

    const [receipt, setReceipt] = useState(null); // State to hold the generated receipt
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        axios.post("http://localhost:8080/bookingdoctor", data)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    // Generate the receipt
                    const bookingReceipt = {
                        emailid: data.emailid,
                        services: data.services,
                        name: data.name,
                        date: data.date,
                        time: data.time,
                    };
                    setReceipt(bookingReceipt); // Set the receipt to display later
                    alert("Successfully Booked");
                } else if (response.data.status === "error") {
                    if (response.data.message.includes("This service provider is already booked for the selected date and time.")) {
                        alert("This service provider is already booked for the selected date and time. Please choose a different time or service provider.");
                    } else {
                        alert("ERROR: " + response.data.message);
                    }
                }
            })
            .catch(error => {
                console.error(error);
                alert("An error occurred");
            });
    };

    // Function to fetch receipts based on email
    const fetchReceipts = async (emailid) => {
        setLoading(true); // Set loading state
        try {
            const response = await axios.get("http://localhost:8080/viewreceipts", {
                params: { emailid }, // Pass email as query parameter
            });
            setReceipt(response.data);
            setError(''); // Clear any previous error
        } catch (err) {
            setError("Failed to fetch receipts for this email");
            console.error(err);
            setReceipt(null); // Clear receipt on error
        } finally {
            setLoading(false);
        }
    };

    // Function to handle the button click
    const handleViewReceipts = () => {
        if (data.emailid) {
            fetchReceipts(data.emailid); // Fetch receipts for the entered email
        } else {
            alert('Please enter an email address');
        }
    };


    return (
        <div>
            <Nav />
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="card shadow p-4">
                            <h2 className="text-center mb-4">SERVICE BOOKING FORM</h2>
                            <div className="row g-3">
                                <div className="col-md-12">
                                    <label htmlFor="emailid" className="form-label">Email ID</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name='emailid'
                                        value={data.emailid}
                                        onChange={inputHandler}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="services" className="form-label">Service</label>
                                    <select
                                        className="form-select"
                                        name='services'
                                        value={data.services}
                                        onChange={inputHandler}
                                        required
                                    >
                                        <option value="" disabled>Select a service</option>
                                        <option value="doctor">DOCTOR</option>
                                        <option value="caretaker">CARETAKER</option>
                                        <option value="driver">DRIVER</option>
                                     
                                    </select>
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='name'
                                        value={data.name}
                                        onChange={inputHandler}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="date" className="form-label">Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name='date'
                                        value={data.date}
                                        onChange={inputHandler}
                                        required
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="time" className="form-label">Time</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='time'
                                        value={data.time}
                                        onChange={inputHandler}
                                        required
                                    />
                                </div>

                                <div className="col-md-12 text-center mt-4">
                                    <button className="btn btn-primary me-3" onClick={readValue}>Book Service</button>
                                    <a href="/deletebook" className="btn btn-danger">Cancel Booking</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDoctor;
