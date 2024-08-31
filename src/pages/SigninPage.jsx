import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Signin.css';
import aahafeltImage from '../assets/aahafeltstrings.png'; 

const Signin = () => {
  const navigate = useNavigate(); // Create navigate function

  return (
    <div className="signin-container">
      <button
        className="back-button"
        onClick={() => navigate('/')} // Navigate to home page
      >
        Back to Home
      </button>
      <div className="gradient-border">
        <div className="signin-box">
          <h2 className="signin-title">Sign in</h2>
          <p className="signin-link">
            Don’t have an account? <a href="./joinnow" className="joinnow">Join now</a>
          </p>
          <form>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Email address" />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Password (min. 8 characters)" />
              <a href="#!" className="forgot-password">Forgot Password?</a>
            </div>
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button className="signin-button">Sign in</button>
          </form>
        </div>
      </div>
      <img src={aahafeltImage} alt="AahaFelt Logo" className="top-left-image" />
    </div>
  );
};

export default Signin;