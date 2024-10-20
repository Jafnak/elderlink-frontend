// import React from 'react'
// import { useNavigate } from 'react-router-dom';



// const Nav = () => {
//   const navigate = useNavigate();

//   const LogOut = () => {
//     sessionStorage.clear();
//     navigate("/");
//   };

//   return (
//     <div>

// <nav class="navbar navbar-expand-lg bg-primary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">ELDER LINK</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link " aria-current="page" href="/home">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="/diet">Diet Plans</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">About</a>
//         </li>
      
//       </ul>
//     </div>
//   </div>
//   <div className="col-12 text-center">
//                                     <button className="btn btn-primary mt-3" onClick={LogOut} >LogOut</button>
//                                 </div>
// </nav>


//     </div>
//   )
// }

// export default Nav
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
  const navigate = useNavigate();

  const LogOut = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">ELDER LINK</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavDropdown" 
          aria-controls="navbarNavDropdown" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/diet">Diet Plans</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">About</a>
            </li>
          </ul>
          <button className="btn btn-outline-light ms-3" onClick={LogOut}>Log Out</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
