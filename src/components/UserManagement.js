import React, { useState } from 'react';
import axios from 'axios';

const UserManagement = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // 注册用户方法
  const registerUser = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/register', {
        username,
        password,
        email,
        role: 'user'  // 默认注册为普通用户
      });
      setMessage(`User ${response.data.username} registered successfully!`);
    } catch (error) {
      setMessage('Error registering user.');
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button onClick={registerUser}>Register User</button>
      <p>{message}</p>
    </div>
  );
};

export default UserManagement;