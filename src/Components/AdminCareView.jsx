import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavAdmin from './NavAdmin'; // Assuming NavAdmin is your navigation component

const AdminCareView = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [roleQuery, setroleQuery] = useState('');

    // Fetch caretakers based on search query
    const fetchData = () => {
        axios.post("http://localhost:8080/caretakerview", { searchQuery,roleQuery }, {
            headers: { "token": sessionStorage.getItem("token"), "Content-Type": "application/json" }
        })
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    };

    useEffect(() => {
        fetchData(); // Fetch data on component load
    }, [searchQuery,roleQuery]);

    // Handle caretaker deletion
 const handleDelete = (emailid) => {
    axios.delete(`http://localhost:8080/deletecaretaker/${emailid}`)
      .then(() => {
        const updatedData = data.filter(item => item.emailid !== emailid);
        setData(updatedData);
      })
      .catch(error => console.log(error.message));
  };

  // Handle search by specialization input
  const handlerole = (e) => {
    setroleQuery(e.target.value.toLowerCase());
  };

    // Handle search input
    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
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
                                placeholder="Search by caretaker name"
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                        </div>
                        <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search by role"
                value={roleQuery}
                onChange={handlerole}
              />
            </div>
                    </div>
                </div>

                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>CARETAKER NAME</th>
                                <th>EMAIL ID</th>
                                <th>PHONE</th>
                                <th>LOCATION</th>
                                <th>ROLE</th>
                                <th>GENDER</th>
                                <th>DATE</th>
                                <th>TIME</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((caretaker, index) => (
                                <tr key={index}>
                                    <td>{caretaker.name}</td>
                                    <td>{caretaker.emailid}</td>
                                    <td>{caretaker.phone}</td>
                                    <td>{caretaker.address}</td>
                                    <td>{caretaker.role}</td>
                                    <td>{caretaker.gender}</td>
                                    <td>{caretaker.date}</td>
                                    <td>{caretaker.time}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(caretaker.emailid)}
                                        >
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

export default AdminCareView;
