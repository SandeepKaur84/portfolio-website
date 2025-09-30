import React, { useState, useRef, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu if click happens outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="navbar">
      <div className="logo">SK</div>

      <ul
        ref={menuRef}
        className={`nav-links ${isMobileMenuOpen ? "mobile-active" : ""}`}
      >
        <li>
          <a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact Me
          </a>
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
