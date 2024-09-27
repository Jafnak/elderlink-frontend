import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const AdminLogin = () => {

    const [data, setData] = useState(
        {

            emailid: "",
            password: ""
        }
    )


    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data);
      
        axios.post("http://localhost:8080/adminlogin", data)
          .then((response) => {
            console.log(response.data);
            if (response.data.status === "success") {
                alert("Successfully logged in as admin");
                window.location.href = "/caretaker";
            } else {
                alert("Can't login. Please check your email or password.");
            }
          })
          .catch((error) => {
            console.error(error); // Handle errors
            alert("An error occurred during login.");
          })
    }

  return (
    <div style={{backgroundColor:'#c9d2d3',minHeight:'100vh',padding:'50px 0'}}>

<br></br>
<center><h1>ELDERLINK</h1>
<img src="elders.png" alt="" /></center>
<div className="container">

                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email id</label>
                                <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Login</button>
                                <Link class="nav-link" to="/caretaker" ></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>  

    </div>
  )
}

export default AdminLogin