// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const DriverView = () => {
//     const [data,setData] = useState([])
//     const fetchData=()=>{
//         axios.post("http://localhost:8080/driverview",data).then(
//             (response)=>{
//                 //console.log(response.data)
//                 setData(response.data)
//             }
//         ).catch(
//             (error)=>{
//                 console.log(error.message)
//             }
//         ).finally()
//     }
    
//     useEffect(()=>{fetchData()},[])
//   return (
//     <div style={{backgroundColor:'#c9d2d3',minHeight:'100vh',padding:'50px 0'}}>

// <div className="container">
//     <div className="row">
//         <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

//         <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">DRIVER NAME</th>
//       <th scope="col">EMAIL</th>
//       <th scope="col">GENDER</th>
//       <th scope="col">AGE</th>
//       <th scope="col">PHONE</th>
//       <th scope="col">LOCATION</th>
//     </tr>
//   </thead>
//   <tbody>
//     {data.map(
//         (value,index)=>{
//             return <tr>
//             <th scope="row">{value.name}</th>
//             <td>{value.email}</td>
//             <td>{value.gender}</td>
//             <td>{value.age}</td>
//             <td>{value.phone}</td>
//             <td>{value.location}</td>
//           </tr>
//         }
//     )}
  
//   </tbody>
// </table>

//         </div>
//     </div>
// </div>

//     </div>
//   )
// }

// export default DriverView
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DriverView = () => {
    const [data, setData] = useState([]);
    const [appointment, setAppointment] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [appointmentFee] = useState(250); // Set appointment fee

    const fetchData = () => {
        axios.post("http://localhost:8080/driverview", {})
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const bookAppointment = (driver) => {
        const appointmentDetails = {
            name: driver.name,
            email: driver.email,
            gender: driver.gender,
            age: driver.age,
            phone: driver.phone,
            location: driver.location,
            fee: appointmentFee,
        };

        setAppointment(appointmentDetails);
        setShowModal(true); // Show the modal
    };

    const closeModal = () => {
        setShowModal(false); // Hide the modal
    };

    return (
        <div style={{ backgroundColor: '#c9d2d3', minHeight: '100vh', padding: '50px 0' }}>
            <div className="container">
                <div className="row">
                    <div className="col">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">DRIVER NAME</th>
                                    <th scope="col">EMAIL</th>
                                    <th scope="col">GENDER</th>
                                    <th scope="col">AGE</th>
                                    <th scope="col">PHONE</th>
                                    <th scope="col">LOCATION</th>
                                    <th scope="col">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((driver, index) => (
                                    <tr key={index}>
                                        <th scope="row">{driver.name}</th>
                                        <td>{driver.email}</td>
                                        <td>{driver.gender}</td>
                                        <td>{driver.age}</td>
                                        <td>{driver.phone}</td>
                                        <td>{driver.location}</td>
                                        <td>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => bookAppointment(driver)}
                                            >
                                                Book Appointment
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Modal for Appointment Details */}
                        {showModal && appointment && (
                            <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Appointment Details</h5>
                                            <button type="button" className="close" onClick={closeModal}>
                                                <span>&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <p><strong>Name:</strong> {appointment.name}</p>
                                            <p><strong>Email:</strong> {appointment.email}</p>
                                            <p><strong>Gender:</strong> {appointment.gender}</p>
                                            <p><strong>Age:</strong> {appointment.age}</p>
                                            <p><strong>Phone:</strong> {appointment.phone}</p>
                                            <p><strong>Location:</strong> {appointment.location}</p>
                                            <p><strong>Appointment Fee:</strong> ₹{appointment.fee}</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={closeModal}>Done</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DriverView;
