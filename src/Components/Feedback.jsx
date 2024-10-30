import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';


const Feedback = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });

    // Use useEffect to automatically fill the email field from sessionStorage
    useEffect(() => {
        const userEmail = sessionStorage.getItem('userEmail');
        if (userEmail) {
            setFormData((prevData) => ({ ...prevData, email: userEmail }));
        }
    }, []);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/submitFeedback', formData)
            .then(response => {
                alert('Feedback submitted successfully!');
                setFormData({ email: '', message: '' });
            })
            .catch(error => {
                console.error('Error submitting feedback:', error);
            });
    };

    return (
        <div>
            <Nav/>
            <center><h2>Feedback</h2></center>
            <div className="container">
                <div className="col col-12">
                    <div className="row g-3">
                        <div className="col">
                            <label className="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                name='email' 
                                value={formData.email} 
                                onChange={handleInputChange} 
                            />
                        </div>
                        <div className="col">
                            <label className="form-label">Message</label>
                            <textarea 
                                className="form-control" 
                                name='message' 
                                value={formData.message} 
                                onChange={handleInputChange} 
                            />
                        </div>
                        <center>
                            <div className="col">
                                <button className="btn btn-info" onClick={handleSubmit}>Submit</button>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;