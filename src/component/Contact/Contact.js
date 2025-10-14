import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          Feel free to reach out via the form below or connect with me directly.
        </p>

        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <p>
                <strong>Email:</strong> ballakavya594@gmail.com
              </p>
            </div>
            <div className="info-item">
              <FaPhoneAlt className="info-icon" />
              <p>
                <strong>Phone:</strong> +91********
              </p>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <p>
                <strong>Location:</strong> Odisha, India
              </p>
            </div>
            <div className="info-item">
              <FaLinkedin className="info-icon" />
              <a
                href="https://linkedin.com/in/kavyaballa"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/kavyaballa
              </a>
            </div>
            <div className="info-item">
              <FaGithub className="info-icon" />
              <a
                href="https://github.com/kavyaballa1020"
                target="_blank"
                rel="noreferrer"
              >
                github.com/kavyaballa1020
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <form className="contact-form">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="Type your message..."></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
