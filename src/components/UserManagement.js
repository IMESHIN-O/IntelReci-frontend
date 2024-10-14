import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserManagement = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const registerUser = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/register', {
        username,
        password,
        email,
        role: 'user'  
      });
      setMessage(`User ${response.data.username} registered successfully!`);
    } catch (error) {
      if (error.response || error.response.data === 'Email is already registered!') {
        setMessage('Email is already registered!');
      } else {
        setMessage('Error registering user.');
      }
    }
  };
  return (
    <div>
      <h2>User Management</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={registerUser}>Register User</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default UserManagement;