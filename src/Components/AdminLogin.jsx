import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AdminLogin = () => {

    const [data, setData] = useState(
        {

            "email": "",
            "password": ""
        }
    )


    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/adminlogin", data).then(
            (response) => {
                console.log(response.data)
                const adminEmail = 'admin@gmail.com';
                const adminPassword = 'admin123';
                if (response.email == adminEmail && response.password == adminPassword) {
                    // Admin login successful
                    alert("Successfully loggined by admin")
                }else{
                    alert("cant login")
                }
              }).catch().finally()
    }

  return (
    <div>

<div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email id</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Login</button>
                                <Link class="nav-link" to="/adminDash" ></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>  

    </div>
  )
}

export default AdminLogin