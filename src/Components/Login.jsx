import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const Adminlogin = () => {
        sessionStorage.clear();
        navigate("/Adminlogin");
    };

    const [data, setData] = useState({
        emailid: "",
        password: "",
        role: ""
    });

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        console.log(data);
        axios.post("http://localhost:8080/usersignin", data)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    alert("Successfully logged in");

                    // Role-based navigation
                    if (data.role === "user") {
                        navigate("/Home");
                    } else if (data.role === "doctor") {
                        navigate("/personal-doctor-page");
                    } else if (data.role === "driver") {
                        navigate("/personal-driver-page");
                    } else if (data.role === "caretaker") {
                        navigate("/personal-caretaker-page");
                    } else {
                        alert("Invalid role selected");
                    }
                } else {
                    alert("Error logging in");
                }
            })
            .catch((error) => {
                console.error("There was an error logging in!", error);
            });
    };

    return (
        <div style={styles.container}>
            <div style={styles.loginForm}>
                <h1 style={styles.header}>ELDERLINK</h1>
                <img src="elders.png" alt="Elderlink" style={styles.logo} />
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="emailid">Email ID</label>
                    <input 
                        type="text" 
                        style={styles.input} 
                        name='emailid' 
                        value={data.emailid} 
                        onChange={inputHandler} 
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        style={styles.input} 
                        name='password' 
                        value={data.password} 
                        onChange={inputHandler} 
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="role">Role</label>
                    <select 
                        style={styles.select} 
                        name='role' 
                        value={data.role} 
                        onChange={inputHandler}
                    >
                        <option value="">Select Role</option>
                        <option value="user">User</option>
                        <option value="doctor">Doctor</option>
                        <option value="caretaker">Caretaker</option>
                        <option value="driver">Driver</option>
                    </select>
                </div>
                <div style={styles.formActions}>
                    <button style={styles.buttonSuccess} onClick={readValue}>Login</button>
                    <a href='/signup' style={styles.link}>New account</a>
                    <button style={styles.buttonDark} onClick={Adminlogin}>ADMIN</button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: "url('/care.jpg')", // Use the care.jpg as the background
        backgroundSize: "cover",
        backgroundPosition: "right",
        padding: '20px',
        filter: "blur(0px)" // No blur on the login page
    },
    loginForm: {
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
        position: 'relative', // Position relative for proper layout
        zIndex: 1 // Ensure it's above the background
    },
    header: {
        fontSize: '28px', // Reduced font size for header
        marginBottom: '20px',
        color: '#2b2b2b'
    },
    logo: {
        width: '80px', // Smaller logo size
        marginBottom: '20px'
    },
    formGroup: {
        marginBottom: '15px',
        textAlign: 'left'
    },
    label: {
        fontSize: '16px',
        color: '#555555',
        marginBottom: '5px',
        display: 'block'
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginBottom: '10px'
    },
    select: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginBottom: '10px'
    },
    formActions: {
        marginTop: '20px'
    },
    buttonSuccess: {
        backgroundColor: '#28a745',
        color: '#ffffff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        marginRight: '10px'
    },
    buttonDark: {
        backgroundColor: '#343a40',
        color: '#ffffff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px'
    },
    link: {
        display: 'block',
        marginTop: '10px',
        color: '#007bff',
        textDecoration: 'none',
        fontSize: '16px'
    }
};

export default Login;
