import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavAdmin from './NavAdmin';

const AdminDoctorView = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [specializationQuery, setSpecializationQuery] = useState('');

  // Fetch the data from the API
  const fetchData = () => {
    axios.post("http://localhost:8080/doctorview", { searchQuery, specializationQuery }, {
      headers: { "token": sessionStorage.getItem("token"), "Content-Type": "application/json" }
    })
      .then(response => {
        console.log(response.data);  // Debugging: Check if emailid exists in the response
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery, specializationQuery]);  // Re-fetch data when search or specialization changes

  // Handle search by name input
  const handleNameSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Handle search by specialization input
  const handleSpecializationSearch = (e) => {
    setSpecializationQuery(e.target.value.toLowerCase());
  };

  // Handle doctor deletion and update table immediately
  const handleDelete = (emailid) => {
    axios.delete(`http://localhost:8080/deletedoctor/${emailid}`)
      .then(() => {
        const updatedData = data.filter(item => item.emailid !== emailid);
        setData(updatedData);
      })
      .catch(error => console.log(error.message));
  };

  return (
    <div style={{ backgroundColor: '#c9d2d3', minHeight: '100vh', padding: '50px 0' }}>
      <NavAdmin />
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 col-md-8 offset-md-2">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by name"
                value={searchQuery}
                onChange={handleNameSearch}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search by specialization"
                value={specializationQuery}
                onChange={handleSpecializationSearch}
              />
            </div>
          </div>
        </div>

        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>DOCTOR NAME</th>
                <th>EMAIL ID</th>
                <th>PHONE</th>
                <th>SPECIALIZATION</th>
                <th>LOCATION</th>
                <th>DATE</th>
                <th>TIME</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {data.map((doctor, index) => (
                <tr key={index}>
                  <td>{doctor.name}</td>
                  <td>{doctor.emailid}</td> {/* Display emailid */}
                  <td>{doctor.phone}</td>
                  <td>{doctor.specialization}</td>
                  <td>{doctor.location}</td>
                  <td>{doctor.date}</td> {/* Display date */}
                  <td>{doctor.time}</td> {/* Display time */}
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDelete(doctor.emailid)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDoctorView;
