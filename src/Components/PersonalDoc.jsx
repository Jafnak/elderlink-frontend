import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonalDoc= () => {
  const [doctors, setDoctors] = useState([]); // To store the list of doctors
  const [searchTerm, setSearchTerm] = useState(''); // Search term for name
  const [specialization, setSpecialization] = useState(''); // Search term for specialization
  const [filteredDoctors, setFilteredDoctors] = useState([]); // To store filtered results

  // Fetching the doctor data on component mount
  useEffect(() => {
    fetchDoctors();
  }, []);

  // Fetch doctors from API
  const fetchDoctors = async () => {
    try {
      const response = await axios.get("http://localhost:8080/doctors"); // API endpoint to fetch doctors
      setDoctors(response.data);
      setFilteredDoctors(response.data); // Initially display all doctors
    } catch (error) {
      console.error('Error fetching doctor data:', error);
    }
  };

  // Handle search and filter the doctors based on name and specialization
  const handleSearch = () => {
    const filtered = doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      doctor.specialization.toLowerCase().includes(specialization.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Search for Doctors</h2>

      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          />
        </div>
      </div>

      <div className="text-center mb-4">
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      {filteredDoctors.length > 0 ? (
        <div className="row">
          {filteredDoctors.map((doctor) => (
            <div className="col-md-4" key={doctor._id}>
              <div className="card mb-4">
                <div className="card-body">

                  <h5 className="card-title">{doctor.name}</h5>
                  <p className="card-text">Specialization: {doctor.specialization}</p>
                  <p className="card-text">Phone: {doctor.date}</p>
                  <p className="card-text">time: {doctor.time}</p>
                  <p className="card-text">Location: {doctor.location}</p>
                  <p className="card-text">Phone: {doctor.phone}</p>
                
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No doctors found</p>
      )}
    </div>
  );
};

export default PersonalDoc;
