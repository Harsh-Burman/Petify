import React, { useEffect, useState } from "react";
import "./index.css";
import setupUI, { sendQuery } from "./js/script";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    setupUI();
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const goToLogin = () => {
    navigate("/login");
  };
  const goToSignup = () => {
    navigate("/signup");
  };

  const goToImgAI = () => {
    navigate("/imgai");
  };

  const goToFAQ = () => {
    navigate("/faq");
  };

  return (
    <div id="root" className="m-0 p-0 t-0 l-0">
      <header>
        <a href="#" className="logo">
          Petify
        </a>
        <div className="bx bx-menu" id="menu-icon"></div>
        <ul className="navbar">
          {!userEmail ? (
            <>
              <li>
                <a onClick={goToLogin}>Login</a>
              </li>
              <li>
                <a onClick={goToSignup}>Register</a>
              </li>
            </>
          ) : (
            <>
              <li className="user-info">{userEmail}</li>
              <li>
                <a
                  onClick={() => {
                    localStorage.removeItem("userEmail");
                    setUserEmail("");
                  }}
                >
                  Logout
                </a>
              </li>
            </>
          )}
        </ul>
      </header>
      <div className="top-page">
        <div className="left">
          <div className="card1" onClick={goToImgAI}>
            <div className="bg-image"></div>
            <p className="card-text">Image-Based Prediction</p>
          </div>
        </div>
        <div className="right">
          <div className="container">
            <h1 className="main-head">Animal Disease Predictor</h1>
            <textarea
              id="queryBox"
              className="query-box"
              placeholder="Describe your pet's breed and symptoms..."
              maxlength="512"
            ></textarea>
            <button
              className="send-btn"
              onClick={() => {
                sendQuery(navigate);
              }}
            >
              Send
            </button>

            {/* <div className="output" id="outputDiv">
              Prediction will appear here...
            </div> */}
          </div>
        </div>
        <div className="bgimage"></div>
      </div>

      <section className="destination" id="destination">
        <div className="title">
          <h2>Explore More...</h2>
        </div>
        <div className="destination-content">
          <a href="src/blog/blog.html">
            <div className="col-content">
              <img src="src\assets\img\img-1.jpg" />
              <p>BLOGS</p>
            </div>
          </a>
          <div className="col-content" onClick={goToFAQ}>
            <img src="src\assets\img\img-2.jpg" />
            <p>FAQs</p>
          </div>
        </div>
      </section>

      <section className="review-main" id="review">
        <div className="title">
          <h2>What Our Users Think About Us !</h2>
        </div>
        <div className="review">
          <p>
            At Petify, customer satisfaction is at the heart of everything we
            do.
            <br />
            Discover what our users have to say — the good, the helpful, and
            everything in between.
          </p>

          <div class="reviews-wrapper">
            <div class="reviews-container" id="reviewsContainer">
              <div class="review-box">
                <div class="initial-circle">YM</div>
                <h3>Yuktika Mishra</h3>
                <p>
                  "This website is a game changer for all pet lovers out there!"
                </p>
                <div class="stars">⭐⭐⭐⭐⭐</div>
              </div>
              <div class="review-box">
                <div class="initial-circle">AS</div>
                <h3>Aryan Singh</h3>
                <p>
                  "Absolutely love the simplicity and usefulness of Petify."
                </p>
                <div class="stars">⭐⭐⭐⭐⭐</div>
              </div>
              <div class="review-box">
                <div class="initial-circle">RP</div>
                <h3>Riya Patel</h3>
                <p>
                  "Petify understands pet parents and it shows in every detail!"
                </p>
                <div class="stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>

          <h2>
            Have your own experience with Petify?
            <br />
            Drop a review and let the world know!
          </h2>
          <form class="review-form" id="reviewForm">
            <label for="name">Your Name:</label>
            <input type="text" id="name" required />

            <label for="rating">Rating:</label>
            <select id="rating" required>
              <option value="">Choose</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="2">⭐⭐</option>
              <option value="1">⭐</option>
            </select>

            <label for="review">Your Review:</label>
            <textarea id="review" rows="4" required></textarea>

            <button type="submit">Submit Review</button>
          </form>
        </div>

        {/* <!-- Toast Message --> */}
        <div id="toast">Thank you for your feedback!</div>
      </section>

      <section className="tc" id="tc">
        <div className="news-text">
          <h2>Terms & Conditions</h2>
          <p>
            Our website serves as a supplementary tool designed to assist
            veterinarians and pet owners by providing predictive insights based
            on symptom similarity. It is important to note that the model does
            not offer a definitive diagnosis but rather suggests potential
            conditions by analyzing similarities between reported symptoms and
            known disease patterns. The predictions are purely probabilistic and
            should not be considered as a substitute for professional veterinary
            consultation. This tool is intended for preliminary assessment and
            first-aid guidance only, and any concerns about a pet’s health
            should always be addressed by a qualified veterinarian. Relying
            solely on this model for medical decisions is strongly discouraged,
            as it does not provide concrete evidence or a final prognosis but
            merely an estimation based on symptom correlations.
          </p>
        </div>
      </section>

      <section id="contact">
        <div className="footer">
          <div className="main">
            <div className="list">
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/arihant-bhandari/">
                    Arihant Bhandari
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ritik-tiwari-1a5399250/">
                    Ritik Tiwari
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/harsh--burman/">
                    Harsh Burman
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/yuktika-mishra-070755250/">
                    Yuktika Mishra
                  </a>
                </li>
                <li>
                  <a href="#">Vasudha Tripathi</a>
                </li>
                <li>
                  <a href="http://www.linkedin.com/in/anushka-chaturvedi-0a4857218">
                    Anushka Chaturvedi
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/rohit-kumar-b8472a257">
                    Rohit Kumar
                  </a>
                </li>
                <li>
                  <a href="http://www.linkedin.com/in/nikhil-nambiar-6b18562a0">
                    Nikhil Nambiar
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/rohan-singha-1ab08220a/">
                    Rohan Singha
                  </a>
                </li>
              </ul>
            </div>
            <div className="list">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#destination">Blogs & FAQs</a>
                </li>
                <li>
                  <a href="#review">Reviews</a>
                </li>
                <li>
                  <a href="#tc">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className="list">
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#destination">Blogs & FAQs</a>
                </li>
                <li>
                  <a href="#review">Reviews</a>
                </li>
                <li>
                  <a href="#tc">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className="list">
              <h4>Connect</h4>
              <div className="social">
                <a href="https://www.facebook.com/share/17f6KWnf6E/">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://www.instagram.com/arihant_bhandari04?igsh=MTUwMWNkMjA0azl5Ng==">
                  <i className="bx bxl-instagram-alt"></i>
                </a>
                <a href="https://github.com/Arihant-Bhandari">
                  <i className="bx bxl-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/arihant-bhandari/">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="end-text">
          <p>Copyright ©2025 All rights reserved</p>
        </div>
      </section>
      <script type="text/javascript" src="src\js\script.js"></script>
    </div>
  );
};

export default Index;
