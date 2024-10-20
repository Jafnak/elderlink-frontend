// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// const NavAdmin = () => {

//   const navigate = useNavigate();

//   const LogOut = () => {
//     sessionStorage.clear();
//     navigate("/");
//   };

//   return (
//     <div>

// <nav class="navbar navbar-expand-lg navbar-light bg-primary">
//   <a class="navbar-brand" href="#">ELDEREASE</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNav">
//     <ul class="navbar-nav">
//       <li class="nav-item">
//         <a class="nav-link" href="/caretaker">Caretaker <span class="sr-only"></span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="/driver">Transportation</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="/doctor">Doctor Consultancy</a>     
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="/userview">User details</a>
//       </li>
//     </ul>
//     <div className="col-12 text-center">
//                                     <button className="btn btn-primary mt-3" onClick={LogOut} >LogOut</button>
//                                 </div>
//   </div>

// </nav>

//     </div>
//   )
// }

// export default NavAdmin/

import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavAdmin = () => {
  const navigate = useNavigate();

  const LogOut = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand" href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>ELDEREASE</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/caretaker" style={{ fontSize: '1.2rem' }}>Caretaker</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/driver" style={{ fontSize: '1.2rem' }}>Transportation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/doctor" style={{ fontSize: '1.2rem' }}>Doctor Consultancy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/userview" style={{ fontSize: '1.2rem' }}>User Details</a>
            </li>
          </ul>
          <div className="ms-auto"> {/* Add margin to the left for logout button */}
            <button className="btn btn-light mt-3" onClick={LogOut} style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Log Out</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavAdmin;
