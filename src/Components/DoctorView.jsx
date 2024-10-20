// // import axios from 'axios'
// // import React, { useEffect, useState } from 'react'

// // const DoctorView = () => {


// //     const [data,setData] = useState([])
// //     const fetchData=()=>{
// //         axios.post("http://localhost:8080/doctorview",data).then(
// //             (response)=>{
// //                 //console.log(response.data)
// //                 setData(response.data)
// //             }
// //         ).catch(
// //             (error)=>{
// //                 console.log(error.message)
// //             }
// //         ).finally()
// //     }
    
// //     useEffect(()=>{fetchData()},[])



// //   return (
// //     <div  style={{backgroundColor:'#c9d2d3',minHeight:'100vh',padding:'50px 0'}}>

// // <div className="container">
// //     <div className="row">
// //         <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

// //         <table class="table">
// //   <thead>
// //     <tr>
// //       <th scope="col">DOCTOR NAME</th>
// //       <th scope="col">SPECIALIZATION</th>
// //       <th scope="col">LOCATION</th>
// //       <th scope="col">PHONE</th>
      
// //     </tr>
// //   </thead>
// //   <tbody>
// //     {data.map(
// //         (value,index)=>{
// //             return <tr>
// //             <th scope="row">{value.name}</th>
// //             <td>{value.specialization}</td>
// //             <td>{value.location}</td>
// //             <td>{value.phone}</td>
            
// //           </tr>
// //         }
// //     )}
  
// //   </tbody>
// // </table>

// //         </div>
// //     </div>
// // </div>


// //     </div>
// //   )
// // }

// // export default DoctorView
                        //------------------------------CHATGPT-------------------------------------------

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const DoctorView = () => {
//   const [data, setData] = useState([])

//   const fetchData = () => {
//     axios.post("http://localhost:8080/doctorview", {}).then(
//       (response) => {
//         setData(response.data)
//       }
//     ).catch(
//       (error) => {
//         console.log(error.message)
//       }
//     )
//   }

//   useEffect(() => { fetchData() }, [])

//   return (
//     <div style={{ backgroundColor: '#c9d2d3', minHeight: '100vh', padding: '50px 0' }}>
//       <div className="container">
//         <div className="row">
//           <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th scope="col">DOCTOR NAME</th>
//                   <th scope="col">SPECIALIZATION</th>
//                   <th scope="col">LOCATION</th>
//                   <th scope="col">PHONE</th>
//                   <th scope="col">AVAILABILITY</th>
//                   <th scope="col">ACTIONS</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((doctor, index) => {
//                   return (
//                     <tr key={index}>
//                       <th scope="row">{doctor.name}</th>
//                       <td>{doctor.specialization}</td>
//                       <td>{doctor.location}</td>
//                       <td>{doctor.phone}</td>
//                       <td>{doctor.availability}</td>
//                       <td>
//                         <button
//                           className="btn btn-primary"
//                           onClick={() => alert(`Booking appointment with ${doctor.name}`)}
//                           disabled={doctor.availability === 'Unavailable'}
//                         >
//                           {doctor.availability === 'Available' ? 'Book Appointment' : 'Unavailable'}
//                         </button>
//                       </td>
//                     </tr>
//                   )
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DoctorView
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const DoctorView = () => {
//   const [data, setData] = useState([]);
//   const [appointment, setAppointment] = useState(null);
//   const [showModal, setShowModal] = useState(false); 
//   const [appointmentFee] = useState(250); 

//   const fetchData = () => {
//     axios.post("http://localhost:8080/doctorview", {}).then(
//       (response) => {
//         setData(response.data);
//       }
//     ).catch(
//       (error) => {
//         console.log(error.message);
//       }
//     );
//   };

//   useEffect(() => { fetchData(); }, []);

//   const bookAppointment = (doctor) => {
//     const appointmentDetails = {
//       doctorName: doctor.name,
//       specialization: doctor.specialization,
//       location: doctor.location,
//       phone: doctor.phone,
//       availability: doctor.availability,
//     };

//     setAppointment(appointmentDetails);
//     setShowModal(true); // Show the modal
//   };

//   const closeModal = () => {
//     setShowModal(false); // Hide the modal
//   };

//   return (
//     <div style={{ backgroundColor: '#c9d2d3', minHeight: '100vh', padding: '50px 0' }}>
//       <div className="container">
//         <div className="row">
//           <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th scope="col">DOCTOR NAME</th>
//                   <th scope="col">SPECIALIZATION</th>
//                   <th scope="col">LOCATION</th>
//                   <th scope="col">PHONE</th>
//                   <th scope="col">ACTIONS</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((doctor, index) => {
//                   return (
//                     <tr key={index}>
//                       <th scope="row">{doctor.name}</th>
//                       <td>{doctor.specialization}</td>
//                       <td>{doctor.location}</td>
//                       <td>{doctor.phone}</td>
                    
//                       <td>
//                         <button
//                           className="btn btn-primary"
//                           onClick={() => bookAppointment(doctor)}
//                           disabled={doctor.availability === 'Appointment'}
//                         >
//                           {doctor.availability === 'Available' ? 'Book Appointment' : 'Appointment'}
//                         </button>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>

//             {/* Modal for Appointment Details */}
//             {showModal && appointment && (
//               <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
//                 <div className="modal-dialog" role="document">
//                   <div className="modal-content">
//                     <div className="modal-header">
//                       <h5 className="modal-title">Appointment Details</h5>
//                       <button type="button" className="close" onClick={closeModal}>
//                         <span>&times;</span>
//                       </button>
//                     </div>
//                     <div className="modal-body">
//                       <p><strong>Doctor Name:</strong> {appointment.doctorName}</p>
//                       <p><strong>Specialization:</strong> {appointment.specialization}</p>
//                       <p><strong>Location:</strong> {appointment.location}</p>
//                       <p><strong>Phone:</strong> {appointment.phone}</p>
//                       <p><strong>Appointment Fee:</strong> ₹{appointment.fee}</p>
//                     </div>
//                     <div className="modal-footer">
//                       <button type="button" className="btn btn-secondary" onClick={closeModal}>Done</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorView;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DoctorView = () => {
  const [data, setData] = useState([]);
  const [appointment, setAppointment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState(""); // For date selection
  const [appointmentTime, setAppointmentTime] = useState(""); // For time selection
  const [appointmentFee] = useState(250); // Static fee for the appointment

  // Fetch the list of doctors from the backend
  const fetchData = () => {
    axios.post("http://localhost:8080/doctorview", {})
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

  // Function to handle appointment booking
  const bookAppointment = (doctor) => {
    if (!appointmentDate || !appointmentTime) {
      alert("Please select a date and time for the appointment");
      return;
    }
  
    const appointmentDetails = {
      doctorName: doctor.name,
      specialization: doctor.specialization,
      location: doctor.location,
      phone: doctor.phone,
      availability: doctor.availability,
      fee: appointmentFee,
      date: appointmentDate,
      time: appointmentTime,
      emailid: sessionStorage.getItem('emailid'),
    };
  
    console.log("Appointment Details:", appointmentDetails); // Log appointment details
  
    // Send appointment details to the backend
    axios.post("http://localhost:8080/book-appointment", appointmentDetails)
      .then((response) => {
        alert("Appointment booked successfully");
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error booking appointment:", error.response || error.message);
        alert("Failed to book appointment: " + (error.response?.data?.message || error.message));
      });
  
    setAppointment(appointmentDetails);
    setShowModal(true);
  };
  
  // Close the modal
  const closeModal = () => {
    setShowModal(false); // Hide the modal
  };

  return (
    <div style={{ backgroundColor: '#c9d2d3', minHeight: '100vh', padding: '50px 0' }}>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">DOCTOR NAME</th>
                  <th scope="col">SPECIALIZATION</th>
                  <th scope="col">LOCATION</th>
                  <th scope="col">PHONE</th>
                  <th scope="col">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {data.map((doctor, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{doctor.name}</th>
                      <td>{doctor.specialization}</td>
                      <td>{doctor.location}</td>
                      <td>{doctor.phone}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => bookAppointment(doctor)}
                          disabled={doctor.availability === 'Appointment'}
                        >
                          {doctor.availability === 'Available' ? 'Book Appointment' : 'Appointment'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
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
                      <p><strong>Doctor Name:</strong> {appointment.doctorName}</p>
                      <p><strong>Specialization:</strong> {appointment.specialization}</p>
                      <p><strong>Location:</strong> {appointment.location}</p>
                      <p><strong>Phone:</strong> {appointment.phone}</p>
                      <p><strong>Appointment Fee:</strong> ₹{appointment.fee}</p>
                      {/* Date and Time added to modal body */}
                      <p><strong>Appointment Date:</strong> {appointment.date}</p>
                      <p><strong>Appointment Time:</strong> {appointment.time}</p>
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

      {/* Appointment Date and Time Input */}
      <div className="container mt-5">
        <h3>Select Appointment Date and Time</h3>
        <div className="row">
          <div className="col-md-6">
            <label>Date:</label>
            <input
              type="date"
              className="form-control"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label>Time:</label>
            <input
              type="time"
              className="form-control"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorView;

