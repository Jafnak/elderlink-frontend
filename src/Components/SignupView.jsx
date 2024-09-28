import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavAdmin from './NavAdmin'

const SignupView = () => {
    const [data,setData] = useState([])
    const fetchData=()=>{
        axios.post("http://localhost:8080/userview",data).then(
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
<NavAdmin/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <table class="table">
  <thead>
    <tr>
      <th scope="col">USER NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">PHONE</th>
      <th scope="col">ADDRESS</th>
      <th scope="col">GENDER</th>
      <th scope="col">AGE</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
        (value,index)=>{
            return <tr>
            <th scope="row">{value.name}</th>
            <td>{value.emailid}</td>
            <td>{value.phone}</td>
            <td>{value.address}</td>
            <td>{value.gender}</td>
            <td>{value.age}</td>
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

export default SignupView