import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AdminViewFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  // Fetch feedbacks from the backend
  useEffect(() => {
    axios.get('http://localhost:8080/getFeedbacks')
      .then(response => {
        setFeedbacks(response.data); // Assuming the response contains an array of feedbacks
      })
      .catch(error => {
        console.error('Error fetching feedbacks:', error);
      });
  }, []);

  // Handle delete feedback
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/deleteFeedback/${id}`)
      .then(() => {
        // Remove deleted feedback from the local state
        setFeedbacks(feedbacks.filter(feedback => feedback._id !== id));
      })
      .catch(error => {
        console.error('Error deleting feedback:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Feedback List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Email</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.length > 0 ? (
            feedbacks.map(feedback => (
              <tr key={feedback._id}>
                <td>{feedback.email}</td>
                <td>{feedback.message}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(feedback._id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">No feedback available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminViewFeedback;