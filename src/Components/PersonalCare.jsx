import axios from 'axios';
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';

const PersonalCaretaker = () => {
    const [searchData, setSearchData] = useState({ name: '', role: '' });
    const [caretakers, setCaretakers] = useState([]);
    const [error, setError] = useState('');

    const inputHandler = (event) => {
        setSearchData({ ...searchData, [event.target.name]: event.target.value });
    };

    // Function to search caretakers by name and role
    const searchCaretakers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/searchcaretaker', {
                params: { name: searchData.name, role: searchData.role }
            });
            if (response.data.length > 0) {
                setCaretakers(response.data);
                setError('');
            } else {
                setError('No caretakers found with the given criteria.');
                setCaretakers([]);
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred while searching.');
        }
    };

    return (
        <div>
            <Nav />
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="card shadow p-4">
                            <h2 className="text-center mb-4">Search Caretaker</h2>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={searchData.name}
                                        onChange={inputHandler}
                                        placeholder="Enter caretaker's name"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="role" className="form-label">Role</label>
                                    <select
                                        className="form-select"
                                        name="role"
                                        value={searchData.role}
                                        onChange={inputHandler}
                                    >
                                        <option value="">Select Role</option>
                                        <option value="caretaker">Caretaker</option>
                                    </select>
                                </div>
                                <div className="col-md-12 text-center mt-4">
                                    <button className="btn btn-primary" onClick={searchCaretakers}>Search</button>
                                </div>
                            </div>
                        </div>

                        {/* Display search results */}
                        {error && <p className="text-danger text-center mt-4">{error}</p>}
                        <div className="row justify-content-center mt-5">
                            {caretakers.map((caretaker, index) => (
                                <div className="col-md-8 col-lg-6 mb-4" key={index}>
                                    <div className="card shadow p-3">
                                        <h5 className="card-title">Name: {caretaker.name}</h5>
                                        <p className="card-text">Role: {caretaker.role}</p>
                                        <p className="card-text">Email: {caretaker.emailid}</p>
                                        <p className="card-text">Phone: {caretaker.phone}</p>
                                        <p className="card-text">Address: {caretaker.address}</p>
                                        <p className="card-text">Gender: {caretaker.gender}</p>
                                      
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalCaretaker;
