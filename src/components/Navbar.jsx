import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">SK</div>

      <ul className={`nav-links ${isMobileMenuOpen ? "mobile-active" : ""}`}>
        <li>
          <a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
        </li>
        <li>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Me</a>
        </li>
      </ul>

      <div className="mobile-menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isMobileMenuOpen ? "change" : ""}`}></div>
        <div className={`bar ${isMobileMenuOpen ? "change" : ""}`}></div>
        <div className={`bar ${isMobileMenuOpen ? "change" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
