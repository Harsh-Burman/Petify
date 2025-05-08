import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "C:/Users/harsh/OneDrive/Desktop/Epics Project/Epics/src/auth/login.css";

const Login = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  // Token decoder function
  const parseJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join("")
    );
    return JSON.parse(jsonPayload);
  };

  // Google Sign-In initialization
  useEffect(() => {
    /* global google */
    const handleCredentialResponse = (response) => {
      const payload = parseJwt(response.credential);
      console.log("Google User Info:", payload);

      // Save email to localStorage
      localStorage.setItem("userEmail", payload.email);

      alert(`Welcome ${payload.name}! Redirecting to homepage...`);
      navigate("/"); // Redirect to Index.jsx
    };

    if (window.google) {
      google.accounts.id.initialize({
        client_id:
          "553391138642-b6ko36blq94oaq9e0pej1u3mu30hq4tq.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });

      google.accounts.id.renderButton(document.getElementById("google-btn"), {
        theme: "outline",
        size: "large",
        text: "continue_with",
        shape: "pill",
      });
    }
  }, [navigate]);

  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-box" id="login-form">
          <h2>Log in with</h2>

          <div className="social-buttons">
            <div id="google-btn" class="google-btn">
              <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google Logo"
              />
              Connect with Google
            </div>
            <button type="button" className="apple-btn">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple Logo"
              />
              Apple
            </button>
          </div>

          <div className="divider">-----------or-----------</div>

          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <a href="#" className="forgot">
            Forgot password?
          </a>

          <button type="submit" className="login-btn" onClick={goToHome}>
            Log In
          </button>

          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
