import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
 // Assuming you have a Nav component

const FetchProfile = () => {
  const [email, setEmail] = useState('');
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
      handleFetch(); // Fetch the profile when the email is set
    } else {
      navigate('/fetchprofile'); // Redirect to login if no email is found
    }
  }, [navigate]);

  const handleFetch = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://localhost:8080/profile/${email}`);
      setProfile(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('Profile not found.');
      } else {
        setError('An error occurred while fetching the profile.');
      }
      setProfile(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div>
      <Nav/>
      <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>User Profile</h2>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
          // Removed disabled attribute to allow editing
        />
        <button
          onClick={handleFetch}
          disabled={loading}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          {loading ? 'Loading...' : 'View Profile'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {profile && (
          <div style={{ marginTop: '20px' }}>
            {profile.profilePicture && (
              <img src={profile.icon.jpeg} alt="Profile" style={{ width: '100%', borderRadius: '8px' }} />
            )}
            <h3>{profile.name}</h3>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.emailid}</p>
            <p><strong>Address:</strong> {profile.address}</p>
            <p><strong>Phone Number:</strong> {profile.phone}</p>
            <p><strong>Gender:</strong> {profile.gender}</p>
            <p><strong>Age:</strong> {profile.age}</p>
            <p><strong>Guardian Name:</strong> {profile.gardian}</p>
            <p><strong>Guardian Email:</strong> {profile.gardemail}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FetchProfile;
