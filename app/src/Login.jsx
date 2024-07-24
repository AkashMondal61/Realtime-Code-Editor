import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:5000/user/login', { username, password });
  //     localStorage.setItem('token', response.data.token);
  //     console.log(response.data.token)
  //     navigate(`/document/${Math.random().toString(36).substr(2, 9)}`);
  //     console.log("works login page ")
  //   } catch (error) {
  //     console.error('Login failed', error);
  //     alert('Login failed. Please check your credentials.');
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user/login', {
        username,
        password
      });

      localStorage.setItem('token', response.data.token);
      toast.success('Login successful');

      const redirectAfterLogin = localStorage.getItem('redirectAfterLogin');
      console.log(redirectAfterLogin);
      if (redirectAfterLogin) {
        navigate(redirectAfterLogin);
        localStorage.removeItem('redirectAfterLogin'); // Clear the stored URL
      } else {
        console.log("works in not has")
        navigate(`/document/${Math.random().toString(36).substr(2, 9)}`); // Default redirect if no URL is stored
      }
    } catch (error) {
      toast.error('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default LoginPage;
