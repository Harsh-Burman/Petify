// ./auth/signup.jsx
import React from "react";
import "C:/Users/harsh/OneDrive/Desktop/Epics Project/Epics/src/auth/login.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-box">
          <h2>Create Account</h2>

          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <button type="submit" className="login-btn" onClick={goToHome}>
            Sign Up
          </button>

          <p className="signup-link">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
