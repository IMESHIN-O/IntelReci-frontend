import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const registerUser = async () => {
    if (password !== confirmPassword) {
      setMessage("Passwords don't match!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/users/register', {
        username,
        password,
        email,
        role: 'user' // 设定角色为普通用户
      });
      setMessage(`User ${response.data.username} registered successfully!`);
      
      // 延迟一段时间后自动跳转到登录页面
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      
    } catch (error) {
      if (error.response || error.response.data === 'Email is already registered!') {
        setMessage('Email is already registered!');
      } else {
        setMessage('Error registering user.');
      }
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
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
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={registerUser}>Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Register;
