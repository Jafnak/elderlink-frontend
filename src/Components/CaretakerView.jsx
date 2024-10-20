// // import axios from 'axios'
// // import React, { useEffect, useState } from 'react'

// // const CaretakerView = () => {


// //     const [data,setData] = useState([])
// //     const fetchData=()=>{
// //         axios.post("http://localhost:8080/caretakerview",data).then(
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
// //     <div style={{backgroundColor:'#c9d2d3',minHeight:'100vh',padding:'50px 0'}}>

// // <div className="container">
// //     <div className="row">
// //         <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

// //         <table class="table">
// //   <thead>
// //     <tr>
// //       <th scope="col">NAME</th>
// //       <th scope="col">EMAIL</th>
// //       <th scope="col">GENDER</th>
// //       <th scope="col">AGE</th>
// //       <th scope="col">ROLE</th>
// //       <th scope="col">PHONE</th>
// //       <th scope="col">ADDRESS</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     {data.map(
// //         (value,index)=>{
// //             return <tr>
// //             <th scope="row">{value.name}</th>
// //             <td>{value.email}</td>
// //             <td>{value.gender}</td>
// //             <td>{value.age}</td>
// //             <td>{value.role}</td>
// //             <td>{value.phone}</td>
// //             <td>{value.address}</td>
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

// // export default CaretakerView
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Modal from 'react-modal';

// Modal.setAppElement('#root'); // Set your app's root element

// const CaretakerView = () => {
//     const [data, setData] = useState([]);
//     const [modalIsOpen, setModalIsOpen] = useState(false);
//     const [selectedCaretaker, setSelectedCaretaker] = useState(null);
//     const [appointmentFee] = useState(250); // Set appointment fee

//     const fetchData = () => {
//         axios.post("http://localhost:8080/caretakerview", {})
//             .then((response) => {
//                 setData(response.data);
//             })
//             .catch((error) => {
//                 console.log(error.message);
//             });
//     };

//     const handleBookAppointment = (caretaker) => {
//         // Logic for booking the appointment (send request to backend)
//         axios.post("http://localhost:8080/book-caretaker", {
//             caretakerId: caretaker._id,
//             fee: appointmentFee,
//         })
//         .then((response) => {
//             if (response.data.status === "success") {
//                 // Update the caretaker availability status locally
//                 const updatedData = data.map((care) => {
//                     if (care._id === caretaker._id) {
//                         return { ...care, availabilityStatus: "Unavailable" }; // Mark as unavailable
//                     }
//                     return care;
//                 });
//                 setData(updatedData); // Update the state with the new availability status

//                 alert("Appointment booked successfully!"); // Show success message
//                 setModalIsOpen(false); // Close the modal after booking
//             }
//         })
//         .catch((error) => {
//             console.log(error.message);
//         });
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (
//         <div style={{ backgroundColor: '#c9d2d3', minHeight: '100vh', padding: '50px 0' }}>
//             <div className="container">
//                 <div className="row">
//                     <div className="col">

//                         <table className="table">
//                             <thead>
//                                 <tr>
//                                     <th scope="col">NAME</th>
//                                     <th scope="col">EMAIL</th>
//                                     <th scope="col">GENDER</th>
//                                     <th scope="col">AGE</th>
//                                     <th scope="col">ROLE</th>
//                                     <th scope="col">PHONE</th>
//                                     <th scope="col">ADDRESS</th>
//                                     <th scope="col">BOOK</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {data.map((caretaker, index) => (
//                                     <tr key={index}>
//                                         <th scope="row">{caretaker.name}</th>
//                                         <td>{caretaker.email}</td>
//                                         <td>{caretaker.gender}</td>
//                                         <td>{caretaker.age}</td>
//                                         <td>{caretaker.role}</td>
//                                         <td>{caretaker.phone}</td>
//                                         <td>{caretaker.address}</td>
//                                         <td>
//                                             <button onClick={() => {
//                                                 setSelectedCaretaker(caretaker);
//                                                 setModalIsOpen(true);
//                                             }}>
//                                                 Book Appointment
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>

//                         {/* Modal for booking appointment */}
//                         <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
//                             <h2>Book Appointment</h2>
//                             {selectedCaretaker && (
//                                 <div>
//                                     <p>Caretaker: {selectedCaretaker.name}</p>
//                                     <p>Appointment Fee: ₹{appointmentFee}</p>
//                                     <button onClick={() => handleBookAppointment(selectedCaretaker)}>
//                                         Confirm Booking
//                                     </button>
//                                 </div>
//                             )}
//                             <button onClick={() => setModalIsOpen(false)}>Close</button>
//                         </Modal>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CaretakerView;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CaretakerView = () => {
    const [data, setData] = useState([]);
    const [appointment, setAppointment] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [appointmentFee] = useState(250); // Set appointment fee

    const fetchData = () => {
        axios.post("http://localhost:8080/caretakerview", {})
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

    const bookAppointment = (caretaker) => {
        const appointmentDetails = {
            name: caretaker.name,
            email: caretaker.email,
            gender: caretaker.gender,
            age: caretaker.age,
            role: caretaker.role,
            phone: caretaker.phone,
            address: caretaker.address,
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
                                    <th scope="col">NAME</th>
                                    <th scope="col">EMAIL</th>
                                    <th scope="col">GENDER</th>
                                    <th scope="col">AGE</th>
                                    <th scope="col">ROLE</th>
                                    <th scope="col">PHONE</th>
                                    <th scope="col">ADDRESS</th>
                                    <th scope="col">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((caretaker, index) => (
                                    <tr key={index}>
                                        <th scope="row">{caretaker.name}</th>
                                        <td>{caretaker.email}</td>
                                        <td>{caretaker.gender}</td>
                                        <td>{caretaker.age}</td>
                                        <td>{caretaker.role}</td>
                                        <td>{caretaker.phone}</td>
                                        <td>{caretaker.address}</td>
                                        <td>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => bookAppointment(caretaker)}
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
                                            <p><strong>Role:</strong> {appointment.role}</p>
                                            <p><strong>Phone:</strong> {appointment.phone}</p>
                                            <p><strong>Address:</strong> {appointment.address}</p>
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

export default CaretakerView;

