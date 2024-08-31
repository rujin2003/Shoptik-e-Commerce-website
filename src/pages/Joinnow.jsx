import React from 'react';
import { useNavigate } from 'react-router-dom';
import './joinnow.css';
import aahafeltImage from '../assets/aahafeltstrings.png';

const JoinNow = () => {
  const navigate = useNavigate();

  return (
    <div className="joinnow-container">
      <button
        className="back-button"
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>
      <div className="gradient-border">
        <div className="joinnow-box">
          <h2 className="joinnow-title">Join Now</h2>
          <p className="joinnow-link">
            Already have an account? <a href="./signin" className="signin">Sign in</a>
          </p>
          <form>
            <div className="input-row">
              <div className="input-group">
                <label>First Name</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Phone Number" />
              </div>
              <div className="input-group">
                <label>Address</label>
                <input type="text" placeholder="Address" />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="Password (min. 8 characters)" />
              </div>
              <div className="input-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm Password" />
              </div>
            </div>
            <button className="joinnow-button">Join Now</button>
          </form>
        </div>
      </div>
      <img src={aahafeltImage} alt="AahaFelt Logo" className="top-left-image" />
    </div>
  );
};

export default JoinNow;
