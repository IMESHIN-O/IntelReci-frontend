// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // 导入 Link 组件

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password,
      });
      const { token, userId } = response.data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('userId', userId);
      onLogin(response.data.token);
      setMessage('Login successful!');
    } catch (error) {
      setMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
};

export default Login;
