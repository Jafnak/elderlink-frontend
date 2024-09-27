import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Signup = () => {


    const[data,setData]=useState(
        {
            name:"",
            emailid:"",
            phone:"",
            address:"",
            gender:"",
            age:"",
            password:"",
            confirmpass:""
            }
    );
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    const readValue = () => {
        if (data.password === data.confirmpass) {
            alert("Password and Confirm Password match");
            console.log(data);
            axios.post("http://localhost:8080/usersignup", data)
                .then((response) => {
                    console.log(response.data);
                    if (response.data.status === "success") {
                        alert("Successfully Registered");
                        sessionStorage.setItem("token", response.data.token);
                        sessionStorage.setItem("userid", response.data.userid);
                        navigate("/");
                    } else {
                        alert("Registration Failed");
                    }
                })
                .catch((error) => {
                    console.error("Error during registration", error);
                });
        } else {
            alert("Password and Confirm Password do not match");
        }
    }

    const navigate = useNavigate();
    return (
        <div style={{backgroundColor:'#c9d2d3',minHeight:'100vh',padding:'50px 0'}}>
  <center><h1>ELDERLINK</h1>
  <img src="elders.png" alt="" /></center>
            <div className="container">
          
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control"  name='name' value={data.name} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email id</label>
                                <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" name='phone' value={data.phone} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Address</label>
                                <input type="textarea" className="form-control" name='address' value={data.address} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Gender</label>
                                <input type="text" className="form-control" name='gender' value={data.gender} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Age</label>
                                <input type="date" className="form-control" name='age' value={data.age} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" name='confirmpass' value={data.confirmpass} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-dark" onClick={readValue}>Register</button>
                                <Link class="nav-link" to="/">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup