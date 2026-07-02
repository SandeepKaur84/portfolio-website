import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile-mascot.png";
import { heroRotations } from "../data/portfolioData";
import "../styles/Hero.css";

const Motion = motion;

const Hero = () => {
  const [activePhrase, setActivePhrase] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePhrase((current) => (current + 1) % heroRotations.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-copy">
        <Motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Full Stack Developer
        </Motion.span>

        <Motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Sandeep Kaur
        </Motion.h1>

        <Motion.p
          className="hero-lead"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          I build polished web and mobile experiences that feel thoughtful,
          reliable, and easy to use. My work blends strong UI decisions with
          practical frontend and backend implementation.
        </Motion.p>

        <Motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {/* <div className="hero-stat">
            <strong>4+</strong>
            <span>featured builds</span>
          </div> */}
          {/* <div className="hero-stat">
            <strong>React</strong>
            <span>web & mobile</span>
          </div> */}
          {/* <div className="hero-stat">
            <strong>Open</strong>
            <span>to junior roles</span>
          </div> */}
        </Motion.div>

        <Motion.div
          className="typing-line"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span>Currently focused on</span>
          <span className="typing-pill">{heroRotations[activePhrase]}</span>
        </Motion.div>

        <Motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <a className="primary-btn" href="#projects">
            Explore Projects
          </a>
          <a className="secondary-btn" href="/Sandeep_Kaur_Resume.pdf" download>
            View Resume
          </a>
          <a className="ghost-btn" href="#contact">
            Let&apos;s Talk
          </a>
        </Motion.div>
      </div>

      <Motion.div
        className="hero-avatar-wrap"
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="hero-avatar-badge">
          <img
            src={profile}
            alt="Sandeep Kaur developer mascot"
            className="hero-avatar"
          />
        </div>
        <div className="avatar-caption">React / React Native / Node.js</div>
      </Motion.div>
    </section>
  );
};

export default Hero;
