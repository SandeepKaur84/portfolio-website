import { motion } from "framer-motion";
import "../styles/Navbar.css";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <motion.a
          className="logo"
          href="#hero"
          aria-label="Sandeep Kaur home"
          whileHover={{ y: -2, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          SK
        </motion.a>

        <div className="navbar-meta">
          <span className="navbar-name">Sandeep Kaur</span>
          <span className="navbar-status">Open to work</span>
        </div>
      </div>

      <nav className="nav-panel">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
