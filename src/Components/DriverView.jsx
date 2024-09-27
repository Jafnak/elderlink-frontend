import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DriverView = () => {
    const [data,setData] = useState([])
    const fetchData=()=>{
        axios.post("http://localhost:8080/driverview",data).then(
            (response)=>{
                //console.log(response.data)
                setData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
            }
        ).finally()
    }
    
    useEffect(()=>{fetchData()},[])
  return (
    <div style={{backgroundColor:'#c9d2d3',minHeight:'100vh',padding:'50px 0'}}>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <table class="table">
  <thead>
    <tr>
      <th scope="col">DRIVER NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">GENDER</th>
      <th scope="col">AGE</th>
      <th scope="col">PHONE</th>
      <th scope="col">LOCATION</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
        (value,index)=>{
            return <tr>
            <th scope="row">{value.name}</th>
            <td>{value.email}</td>
            <td>{value.gender}</td>
            <td>{value.age}</td>
            <td>{value.role}</td>
            <td>{value.phone}</td>
            <td>{value.location}</td>
          </tr>
        }
    )}
  
  </tbody>
</table>

        </div>
    </div>
</div>

    </div>
  )
}

export default DriverView