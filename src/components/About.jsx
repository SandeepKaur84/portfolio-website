import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hi, I’m Sandeep Kaur, a passionate React Native Developer who loves
          building modern, user-friendly, and scalable applications.
          <br /> <br />
          My journey started with learning the core of Web Development, and
          since then, I’ve expanded into working with React, React Native, Android, Node.js, MongoDB,
          and more. I enjoy solving problems, writing clean code, and constantly
          learning new technologies to stay updated.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <i className="fas fa-laptop-code"></i>
            <h3>Frontend</h3>
            <p>Building responsive, modern, and interactive UIs.</p>
          </div>

          <div className="about-card">
            <i className="fas fa-server"></i>
            <h3>Backend</h3>
            <p>Designing APIs and working with databases efficiently.</p>
          </div>

          <div className="about-card">
            <i className="fas fa-rocket"></i>
            <h3>Goals</h3>
            <p>To grow as a developer and contribute to real-world projects.</p>
          </div>
        </div>

        <div className="resume-btn-container">
          <a
            href="/Sandeep_Kaur_Resume.pdf"
            download="Sandeep_Kaur_Resume.pdf"
            className="resume-btn"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
