// src/pages/output.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "C:/Users/harsh/OneDrive/Desktop/Epics Project/Epics/src/pages/output.css";

const Output = () => {
  const location = useLocation();
  // const prediction = location.state?.prediction || "No prediction available";
  // const navigate = useNavigate();

  return (
    <div className="output-page">
      <header className="imgai-header">
        <a href="/" className="imgai-logo">
          {" "}
          Petify{" "}
        </a>
        <div className="bx bx-menu" id="imgai-menu-icon"></div>
      </header>
      <div class="output-container">
        <div class="output-header">
          <h1>Health Advisory</h1>
        </div>
        <div class="output-grid">
          <div class="output-card">
            <h2>💓 Likely Condition</h2>
            <p></p>
          </div>
          <div class="output-card">
            <h2>ℹ️ Explanation</h2>
            <p></p>
          </div>
          <div class="output-card">
            <h2>⚠️ Urgency Level</h2>
            <p></p>
          </div>
          <div class="output-card">
            <h2>🛡️ Precautions</h2>
            <p></p>
          </div>
          <div class="output-card">
            <h2>🏠 Home Care Tips</h2>
            <p></p>
          </div>
          <div class="output-card">
            <h2>👩‍⚕️ When to Consult a Vet</h2>
            <p></p>
          </div>
          <div class="output-card">
            <h2>💡 Additional Tips</h2>
            <p></p>
          </div>
          <div class="output-card">
            <h2>❗ Disclaimer</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Output;
