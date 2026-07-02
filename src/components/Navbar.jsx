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
      <a className="logo" href="#hero" aria-label="Sandeep Kaur home">
        SK
      </a>

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
