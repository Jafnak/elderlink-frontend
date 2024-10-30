import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
  const navigate = useNavigate();

  const LogOut = () => {
    sessionStorage.clear();
    navigate("/");
  };

  const viewProfile = () => {
    navigate("/fetchprofile");
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
              <a className="nav-link text-white" aria-current="page" href="/home">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/diet">DIET PLANS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/feedback">FEEDBACK</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">ABOUT</a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button className="btn btn-outline-light ms-3" onClick={LogOut}>LOG OUT</button>
            <div className="dropdown ms-3">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: 'transparent', border: 'none' }} // Styles for the profile button
              >
                <img
                  src="icon.jpeg" // Add the path to your profile image here
                  width="40"
                  height="40"
                  className="rounded-circle"
                  alt="Profile"
                />
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                <li>
                  <button className="dropdown-item" onClick={viewProfile}>
                    View Profile
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={LogOut}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
