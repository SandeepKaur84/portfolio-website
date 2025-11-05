import React from "react";
import "../styles/Hero.css";
import profile from "../assets/profile.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <p>Hi, I am</p>
        <h1>Sandeep Kaur</h1>
        <h3>Aspiring Software Developer</h3>

        <div className="social-icons">
           <a
            href="mailto:kaur190sandeep@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="email-link"
          >
            <i className="fas fa-envelope"></i>
          </a>
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
        </div>
      </div>

      <div className="hero-right">
        <img src={profile} alt="profile" />
      </div>
    </section>
  );
};

export default Hero;
