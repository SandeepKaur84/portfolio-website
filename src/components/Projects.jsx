import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>

        <div className="projects-grid">
          <div className="project-card">
            <h3>CoffeeSpot App ☕</h3>
            <p>
              A modern dark-themed React Native application where users can
              browse coffee & beans, select sizes, and order seamlessly. Backend
              is powered by Node.js & MongoDB with API integration for real-time
              data.
            </p>
            <span className="tech-stack">React Native · Node.js · MongoDB</span>
          </div>

          <div className="project-card">
            <h3>FOODORA 🍔</h3>
            <p>
              An Android application that allows users to order food from campus
              vendors. Features include secure authentication, real-time order
              tracking, and vendor-side order management.
            </p>
            <span className="tech-stack">Android · Java · Firebase</span>
          </div>

          <div className="project-card">
            <h3>NumToBase 🔢</h3>
            <p>
              A utility Android app that converts numbers into any base (binary,
              octal, hexadecimal, etc.) with a clean UI and fast calculations.
            </p>
            <span className="tech-stack">Android · Java</span>
          </div>
        </div>

        <div className="view-projects-btn">
          <a
            href="https://github.com/SandeepKaur84"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-link-btn"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
