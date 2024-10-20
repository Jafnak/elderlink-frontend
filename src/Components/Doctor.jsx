import React, { useState } from 'react'
import NavAdmin from './NavAdmin'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Doctor = () => {
    const [data, setData] = useState(
        {
            name: "",
            specialization: "",
            location: "",
            phone: "",
            emailid: "",


        }
    )


    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }


    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/adddoctor", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully added")
                } else {
                    alert("error")
                }
            }
        ).catch(
            (error) => {
                console.log(error)
            })

    }
    return (


        <div style={{ backgroundColor: '#c9d2d3', minHeight: '100vh', padding: '50px 0' }}>
            <NavAdmin />
            <center><h1>ELDERLINK</h1>
                <img src="elders.png" alt="" /></center>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label" >Doctor Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Specialization</label>
                                <input type="text" className="form-control" name='specialization' value={data.specialization} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Location</label>
                                <input type="text" className="form-control" name='location' value={data.location} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone</label>
                                <input type="text" className="form-control" name='phone' value={data.phone} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email id</label>
                                <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-dark" onClick={readValue}>Add Doctor</button>
                                <Link className="btn btn-dark" to="/doctorview"> View All</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Doctor