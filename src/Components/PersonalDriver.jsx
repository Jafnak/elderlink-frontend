import React, { useState } from 'react';
import axios from 'axios';
import { Nav } from 'react-bootstrap';

const PersonalDriver = () => {
    const [location, setLocation] = useState("");
    const [bookingDetails, setBookingDetails] = useState(null);
    const [error, setError] = useState('');

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleSubmit = () => {
        if (!location) {
            alert('Please enter your location.');
            return;
        }

        // Send the location to the backend
        axios.post("http://localhost:8080/submitLocation", { location })
            .then((response) => {
                if (response.data.status === "success") {
                    // Fetch booking details after setting the location
                    setBookingDetails(response.data.bookingDetails);
                    alert('Location submitted successfully. Fetching booking details...');
                } else {
                    setError(response.data.message);
                }
            })
            .catch((err) => {
                console.error(err);
                setError("Error occurred while submitting location.");
            });
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    const showPosition = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const locationLink = `https://www.google.com/maps/@${latitude},${longitude},15z`;
        alert(`Your location link: ${locationLink}`);
        setLocation(locationLink); // Optionally set the location link in the input field
    };

    const showError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
        }
    };

    return (
        <div>
            <Nav />
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="card shadow p-4">
                            <h2 className="text-center mb-4">Personal Driver Booking</h2>
                            <div className="mb-3">
                                <label htmlFor="location" className="form-label">Enter Your Location</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="location"
                                    value={location}
                                    onChange={handleLocationChange}
                                    placeholder="Your current location"
                                    required
                                />
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary" onClick={getLocation}>Get My Location</button>
                                <button className="btn btn-success ms-2" onClick={handleSubmit}>Submit Location</button>
                            </div>
                            
                            {/* Display Booking Details */}
                            {bookingDetails && (
                                <div className="mt-4">
                                    <h4>Booking Details:</h4>
                                    <p>{bookingDetails}</p>
                                </div>
                            )}

                            {/* Error Message */}
                            {error && <p className="text-danger text-center mt-4">{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalDriver;
