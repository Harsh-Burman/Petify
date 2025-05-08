// src/pages/imgai.jsx
import React, { useState } from "react";
import "C:/Users/harsh/OneDrive/Desktop/Epics Project/Epics/src/pages/imgai.css";

const ImgAI = () => {
  const [previewSrc, setPreviewSrc] = useState(null);
  const [result, setResult] = useState("");

  const previewImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setPreviewSrc(imgURL);
    }
  };

  const showResults = () => {
    setResult("Diagnosis: Your pet appears healthy 🐾");

    // Direct DOM manipulation to override CSS 'display: none'
    const resultBox = document.getElementById("imgai-result");
    if (resultBox) {
      resultBox.style.display = "block";
    }
  };
  return (
    <div className="imgai-page">
      <header className="imgai-header">
        <a href="/" className="imgai-logo">
          {" "}
          Petify{" "}
        </a>
        <div className="bx bx-menu" id="imgai-menu-icon"></div>
      </header>
      <section className="imgai-title">
        <p>
          Upload a photo of your pet and we will help you identify any signs of
          illness
        </p>
      </section>

      <div className="imgai-main-container">
        <section className="upload-section">
          <h2>Upload Pet Image</h2>
          <input
            type="text"
            className="imgai-input"
            placeholder="Enter your pet's breed"
            id="petBreed"
          />
          <span className="material-symbols-outlined">pets</span>
          <input
            type="file"
            className="imgai-input"
            accept="image/*"
            onChange={previewImage}
          />
          <div className="upload-preview" id="preview">
            {previewSrc && <img src={previewSrc} alt="Pet Preview" />}
          </div>
          <button className="imgai-btn" onClick={showResults}>
            Show Results
          </button>
          <div id="imgai-result" className="imgai-result-box">
            {result && <strong>{result}</strong>}
          </div>
        </section>

        <img
          src="src\assets\img\side-img.svg"
          alt="Pet Illustration"
          className="side-image"
        />
      </div>
    </div>
  );
};

export default ImgAI;
