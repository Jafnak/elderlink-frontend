import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavAdmin from './NavAdmin';

const SignupView = () => {
    const [data, setData] = useState([]);
    const [searchName, setSearchName] = useState(""); // State for search by name
    const [searchEmail, setSearchEmail] = useState(""); // State for search by email

    const fetchData = () => {
        axios.post("http://localhost:8080/userview", {
            name: searchName,
            emailid: searchEmail
        }).then(
            (response) => {
                setData(response.data);
            }
        ).catch(
            (error) => {
                console.log(error.message);
            }
        );
    };

    // Fetch data on component mount and when search criteria change
    useEffect(() => {
        fetchData();
    }, [searchName, searchEmail]);

    // Delete user function
    const deleteUser = (id) => {
        axios.delete(`http://localhost:8080/deleteuser/${id}`)
            .then((response) => {
                if (response.data.status === "success") {
                    alert("User deleted successfully");
                    fetchData(); // Refresh the data after deleting
                } else {
                    alert("Error deleting user");
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div style={{ backgroundColor: '#c9d2d3', minHeight: '100vh', padding: '50px 0' }}>
            <NavAdmin />
            <div className="container">
                <div className="row mb-4">
                    <div className="col-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Name"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                        />
                    </div>
                    <div className="col-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Email"
                            value={searchEmail}
                            onChange={(e) => setSearchEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">USER NAME</th>
                                    <th scope="col">EMAIL</th>
                                    <th scope="col">PHONE</th>
                                    <th scope="col">ADDRESS</th>
                                    <th scope="col">GENDER</th>
                                    <th scope="col">AGE</th>
                                    <th scope="col">GAURDIAN NAME</th>
                                    <th scope="col">GAURDIAN EMAIL</th>
                                    <th scope="col">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((value) => {
                                    return (
                                        <tr key={value._id}>
                                            <th scope="row">{value.name}</th>
                                            <td>{value.emailid}</td>
                                            <td>{value.phone}</td>
                                            <td>{value.address}</td>
                                            <td>{value.gender}</td>
                                            <td>{value.age}</td>
                                            <td>{value.gardian}</td>
                                            <td>{value.gardemail}</td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => deleteUser(value._id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupView;
