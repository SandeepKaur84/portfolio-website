import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Sandeep Kaur</h2>

        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/SandeepKaur84"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sandeep-kaur-5792b9233/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:kaur190sandeep@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="email-link"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} SandeepKaur. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
