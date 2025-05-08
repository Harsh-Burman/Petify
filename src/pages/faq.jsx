import React, { useEffect } from "react";
import { toggleFAQ, handleScroll, initNavbar } from "../js/faq"; // Adjust path as needed
import "C:/Users/harsh/OneDrive/Desktop/Epics Project/Epics/src/pages/faq.css";

const FAQ = () => {
  useEffect(() => {
    // Run navbar init and add scroll listener
    initNavbar();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <header className="faq-header">
        <a href="/" className="faq-logo">
          Petify
        </a>
        <div className="bx bx-menu" id="faq-menu-icon"></div>
        {/* <ul className="faq-navbar">
          <li>
            <a href="/login.html">Login</a>
          </li>
          <li>
            <a href="./login.html">Register</a>
          </li>
        </ul> */}
      </header>

      <section class="faq">
        <h2>Questions? Look here.</h2>
        <p>
          We have answers to some of your most common queries. <br /> Whether
          you're curious about how it works, data security, or device
          compatibility — we've got you covered!
        </p>
        <div class="faq-content">
          <div className="faq-item" onClick={(e) => toggleFAQ(e.currentTarget)}>
            <h3>
              <span>+</span> How does this Animal Disease Prediction work?
            </h3>
            <p>
              Our model analyzes symptoms you provide and matches them with
              known disease patterns to suggest possible conditions.
            </p>
          </div>
          <div className="faq-item" onClick={(e) => toggleFAQ(e.currentTarget)}>
            <h3>
              <span>+</span> Is this a substitute for a veterinarian?
            </h3>
            <p>
              No, this tool provides preliminary insights and should not replace
              professional veterinary advice.
            </p>
          </div>
          <div className="faq-item" onClick={(e) => toggleFAQ(e.currentTarget)}>
            <h3>
              <span>+</span> Which animals does this model support?
            </h3>
            <p>
              It currently supports common pets like dogs, cats, rabbits, cows,
              hamsters, and goats.
            </p>
          </div>
          <div className="faq-item" onClick={(e) => toggleFAQ(e.currentTarget)}>
            <h3>
              <span>+</span> Is my data secure?
            </h3>
            <p>
              Yes, we do not store any personal data, and all queries are
              handled securely.
            </p>
          </div>
          <div className="faq-item" onClick={(e) => toggleFAQ(e.currentTarget)}>
            <h3>
              <span>+</span> How often is the model updated?
            </h3>
            <p>
              We continuously update the model based on new data to improve
              accuracy and reliability.
            </p>
          </div>
          <div className="faq-item" onClick={(e) => toggleFAQ(e.currentTarget)}>
            <h3>
              <span>+</span> Can I use this tool for all pet health concerns?
            </h3>
            <p>
              While it provides insights on common conditions, it is always best
              to consult a veterinarian for serious health issues.
            </p>
          </div>
          <div className="faq-item" onClick={(e) => toggleFAQ(e.currentTarget)}>
            <h3>
              <span>+</span> Is this service free to use?
            </h3>
            <p>
              Yes, our basic animal disease prediction tool is completely free
              to use for all users.
            </p>
          </div>
          <div className="faq-item" onClick={(e) => toggleFAQ(e.currentTarget)}>
            <h3>
              <span>+</span> Can I access this tool on mobile devices?
            </h3>
            <p>
              Absolutely! Our platform is mobile-friendly and works well across
              smartphones, tablets, and desktops.
            </p>
          </div>
          <div className="faq-item" onClick={(e) => toggleFAQ(e.currentTarget)}>
            <h3>
              <span>+</span> How do I report a bug or issue?
            </h3>
            <p>
              If you encounter any bugs or issues, please contact us via the
              email provided below. We appreciate your feedback!
            </p>
          </div>
          <div className="faq-item" onClick={(e) => toggleFAQ(e.currentTarget)}>
            <h3>
              <span>+</span> Do I need to create an account to use the tool?
            </h3>
            <p>
              You can access basic features without an account, but registration
              allows you to save preferences and view history.
            </p>
          </div>
        </div>

        <div class="contact-info">
          Can't find an answer? Call us at +91 8962511631 or mail us at
          petifyhelp@gmail.com.
        </div>
      </section>
    </div>
  );
};

export default FAQ;
