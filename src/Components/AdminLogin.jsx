import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';

const AdminLogin = () => {
    const navigate = useNavigate(); // Use navigate for redirection

    const [data, setData] = useState({
        emailid: "",
        password: ""
    });

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        console.log(data);
      
        axios.post("http://localhost:8080/adminlogin", data)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    alert("Successfully logged in as admin");
                    navigate("/caretaker"); // Use navigate for redirection
                } else {
                    alert("Can't login. Please check your email or password.");
                }
            })
            .catch((error) => {
                console.error(error); // Handle errors
                alert("An error occurred during login.");
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
                <div style={styles.formActions}>
                    <button style={styles.buttonSuccess} onClick={readValue}>Login</button>
            
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: "url('/care.jpg')", // Use the same background image
        backgroundSize: "cover",
        backgroundPosition: "center", // Adjust as needed
        padding: '20px'
    },
    loginForm: {
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
    },
    header: {
        fontSize: '28px',
        marginBottom: '20px',
        color: '#2b2b2b'
    },
    logo: {
        width: '80px',
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
    link: {
        display: 'block',
        marginTop: '10px',
        color: '#007bff',
        textDecoration: 'none',
        fontSize: '16px'
    }
};

export default AdminLogin;
