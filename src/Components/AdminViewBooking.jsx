import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavAdmin from './NavAdmin';

const AdminViewBooking = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchData = () => {
        axios.get("http://localhost:8080/viewbooking", {})
            .then(response => {
                setData(response.data);
                setFilteredData(response.data); // Initialize filtered data
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const filtered = data.filter(item =>
            (item.services?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
            (item.name?.toLowerCase() || '').includes(searchQuery.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchQuery, data]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            < NavAdmin/>

            <div className="container my-2 flex-grow-1"> {/* Reduced margin */}
                
                {/* Heading Section */}
                <div className="row justify-content-center mb-2"> {/* Reduced margin-bottom */}
                    <div className="col-12 text-center">
                        <h1 className="display-4">Booking Details</h1>
                    </div>
                </div>

                {/* Search Section */}
                <div className="row justify-content-center mb-3"> {/* Adjusted spacing */}
                    <div className="col-12">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by services or name"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                style={{ borderRadius: '0.25rem' }}
                            />
                            <button className="btn btn-primary" type="button">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="row justify-content-center mb-4">
                <div className="col-12">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-hover table-bordered text-center" style={{ fontSize: '1.2em' }}>
                                    <thead className="table-dark">
                                        <tr>
                                            <th scope="col">Email ID</th>
                                            <th scope="col">Services</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.length === 0 ? (
                                            <tr>
                                                <td colSpan="5" className="text-center">No records found.</td>
                                            </tr>
                                        ) : (
                                            filteredData.map((value, index) => (
                                                <tr key={index}>
                                                    <td>{value.emailid}</td>
                                                    <td>{value.services}</td>
                                                    <td>{value.name}</td>
                                                    <td>{value.date}</td>
                                                    <td>{value.time}</td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminViewBooking;