// import axios from 'axios'
// import React, { useState } from 'react'
// import {  useNavigate } from 'react-router-dom'

// const Login = () => {
//     const navigate = useNavigate();

//     const Adminlogin = () => {
//         sessionStorage.clear();
//         navigate("/Adminlogin");
//     }
 
//     const [data, setData] = useState({
//         emailid: "",
//         password: "",
//         role:""
//     });
 
//     const inputHandler = (event) => {
//         setData({ ...data, [event.target.name]: event.target.value });
//     }
 
//     const readValue = () => {
//         console.log(data);
//         axios.post("http://localhost:8080/usersignin", data)
//             .then((response) => {
//                 console.log(response.data);
//                 if (response.data.status === "success") {
//                     alert("Successfully logged in");
    
//                     // Role-based navigation
//                     if (data.role === "user") {
//                         navigate("/Home");
//                     } else if (data.role === "doctor") {
//                         navigate("/personal-doctor-page"); // Replace with actual route for doctor's page
//                     } else if (data.role === "driver") {
//                         navigate("/personal-driver-page"); // Replace with actual route for driver's page
//                     } else if (data.role === "caretaker") {
//                         navigate("/personal-caretaker-page"); // Replace with actual route for caretaker's page
//                     } else {
//                         alert("Invalid role selected");
//                     }
//                 } else {
//                     alert("Error logging in");
//                 }
//             })
//             .catch((error) => {
//                 console.error("There was an error logging in!", error);
//             });
//     }
    
   
   
//     return (
//         <div style={{backgroundColor:'#c9d2d3',minHeight:'100vh',padding:'50px 0'}}>
//             <center><h1>ELDERLINK</h1>
//             <img src="elders.png" alt="" /></center>

//             <div className="container">
//                 <div className="row g-3">
//                     <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                         <div className="row g-3">
//                             <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                                 <label htmlFor="" className="form-label">Email id</label>
//                                 <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputHandler} />
//                             </div>
//                             <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                                 <label htmlFor="" className="form-label">Password</label>
//                                 <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
//                             </div>

//                             <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                                 <label htmlFor="" className="form-label">Role</label>
//                                 <select 
//                                     className="form-control" 
//                                     name='role' 
//                                     value={data.role} 
//                                     onChange={inputHandler}
//                                 >
//                                     <option value="">Select Role</option> {/* Default option */}
//                                     <option value="user">user</option>
//                                     <option value="doctor">doctor</option>
//                                     <option value="caretaker">caretaker</option>
//                                     <option value="driver">driver</option>
//                                 </select>
//                             </div>



//                             <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                                 <center><button className="btn btn-success" onClick={readValue}>Login</button></center>
//                                <center><a href='/signup' class="nav-link" >New account</a></center> 
//                             </div>
//                             <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                             <center><button className="btn btn-dark" onClick={Adminlogin}>ADMIN</button></center>
                            
                            
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
            

//         </div>
//     )
// }

// export default Login        

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
    const navigate = useNavigate();

    const Adminlogin = () => {
        sessionStorage.clear();
        navigate("/Adminlogin");
    };

    const [data, setData] = useState({
        emailid: "",
        password: "",
        role: ""
    });

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        console.log(data);
        axios.post("http://localhost:8080/usersignin", data)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    alert("Successfully logged in");

                    // Role-based navigation
                    if (data.role === "user") {
                        navigate("/Home");
                    } else if (data.role === "doctor") {
                        navigate("/personal-doctor-page"); // Replace with actual route for doctor's page
                    } else if (data.role === "driver") {
                        navigate("/personal-driver-page"); // Replace with actual route for driver's page
                    } else if (data.role === "caretaker") {
                        navigate("/personal-caretaker-page"); // Replace with actual route for caretaker's page
                    } else {
                        alert("Invalid role selected");
                    }
                } else {
                    alert("Error logging in");
                }
            })
            .catch((error) => {
                console.error("There was an error logging in!", error);
            });
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1>ELDERLINK</h1>
                <img src="elders.png" alt="Elderlink" className="logo" />
                <div className="form-group">
                    <label htmlFor="emailid" className="form-label">Email ID</label>
                    <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="role" className="form-label">Role</label>
                    <select 
                        className="form-control" 
                        name='role' 
                        value={data.role} 
                        onChange={inputHandler}
                    >
                        <option value="">Select Role</option>
                        <option value="user">user</option>
                        <option value="doctor">doctor</option>
                        <option value="caretaker">caretaker</option>
                        <option value="driver">driver</option>
                    </select>
                </div>
                <div className="form-actions">
                    <button className="btn btn-success" onClick={readValue}>Login</button>
                    <a href='/signup' className="nav-link">New account</a>
                    <button className="btn btn-dark" onClick={Adminlogin}>ADMIN</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
