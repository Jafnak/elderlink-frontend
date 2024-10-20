import React, { useState } from 'react'
import NavAdmin from './NavAdmin'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Caretaker = () => {
    const [data, setData] = useState(
        {
            name: "",
            emailid: "",
            phone: "",
            address: "",
            gender: "",
            role: ""
        }
    )


    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }


    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/addCaretaker", data).then(
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
        <div style={{backgroundColor:'#c9d2d3',minHeight:'100vh',padding:'50px 0'}}>
            <NavAdmin />
            <center><h1>ELDERLINK</h1>
            <img src="elders.png" alt="" /></center>
            <div className="container">
               
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Caretaker Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
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
                                <input type="textarea" className="form-control" name="address" value={data.address} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Gender</label>
                                <input type="text" className="form-control" name='gender' value={data.gender} onChange={inputHandler} />
                            </div>
                           
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">role</label>
                                <input type="text" className="form-control" name='role' value={data.role} onChange={inputHandler} />
                            </div>

                            <center> <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-vertical">
                                <button className="btn btn-dark" onClick={readValue}>Add Caretaker</button>
                                <Link class="nav-link" to="/caretakerview" ></Link><br></br>
                                <Link className="btn btn-dark" to="/caretakerview"> View All</Link>

                        </div></center>

                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Caretaker