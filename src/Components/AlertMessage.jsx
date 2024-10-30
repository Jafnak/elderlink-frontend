import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';

const AlertMessage = () => {
    const [email, setEmail] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [recognition, setRecognition] = useState(null);

    // Initialize speech recognition
    const initSpeechRecognition = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recog = new SpeechRecognition();
            recog.continuous = false;
            recog.interimResults = false;
            recog.lang = 'en-US';
            recog.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setEmail(transcript); // Set the recognized text to email
                setIsListening(false);
                recog.stop();
            };
            recog.onerror = (event) => {
                console.error("Speech recognition error", event.error);
                setIsListening(false);
            };
            setRecognition(recog);
        } else {
            alert("Your browser does not support speech recognition.");
        }
    };

    const startListeningEmail = () => {
        if (recognition) {
            setIsListening(true);
            recognition.start();
        }
    };

    const startListeningMessage = () => {
        if (recognition) {
            setIsListening(true);
            recognition.start();
        }
    };

    const sendAlert = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/send-alert", { email, alertMessage });
            alert("Alert sent successfully!");
            setEmail(""); // Clear the email input
            setAlertMessage(""); // Clear the alert message input
        } catch (error) {
            alert("Failed to send alert. Please try again later.");
        }
    };

    React.useEffect(() => {
        initSpeechRecognition();
    }, []);

    return (
        <div>
            <Nav/>
        
        <div style={{
        
            maxWidth: '600px',
            margin: '40px auto',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center'
        }}>
            <h2 style={{ marginBottom: '20px', color: '#333' }}>Send Emergency Alert</h2>
            <form onSubmit={sendAlert} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ fontWeight: 'bold', color: '#555' }}>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter recipient's email"
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            fontSize: '16px',
                            width: '100%',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ fontWeight: 'bold', color: '#555' }}>Alert Message:</label>
                    <textarea
                        value={alertMessage}
                        onChange={(e) => setAlertMessage(e.target.value)}
                        required
                        placeholder="Type or say your alert message"
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            fontSize: '16px',
                            width: '100%',
                            height: '100px',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>
                <button
                    type="button"
                    onClick={startListeningEmail}
                    style={{
                        backgroundColor: isListening ? '#ff5722' : '#4caf50',
                        color: 'white',
                        padding: '10px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        marginBottom: '10px',
                        transition: 'background-color 0.3s'
                    }}
                >
                    {isListening ? 'Listening for Email...' : '🎤 Speak Email Address'}
                </button>
                <button
                    type="button"
                    onClick={startListeningMessage}
                    style={{
                        backgroundColor: isListening ? '#ff5722' : '#4caf50',
                        color: 'white',
                        padding: '10px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        marginBottom: '10px',
                        transition: 'background-color 0.3s'
                    }}
                >
                    {isListening ? 'Listening for Message...' : '🎤 Speak Alert Message'}
                </button>
                <button
                    type="submit"
                    style={{
                        backgroundColor: '#2196F3',
                        color: 'white',
                        padding: '10px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}
                >
                    Send Alert
                </button>
            </form>
        </div>
        </div>
    );
};

export default AlertMessage;
