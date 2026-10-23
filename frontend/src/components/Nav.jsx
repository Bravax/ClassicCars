import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoTD from "../assets/logoTD.png";
import "../styles/Nav.scss";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width <= 1024);
      setIsDesktop(width > 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Des voitures de légende", path: "/LegendaryCars" },
    { name: "Rénovations", path: "/Restorations" },
    { name: "Événements", path: "/Events" },
    { name: "À propos", path: "/About" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <nav className={`navbar ${isTablet ? "tablet" : ""} ${isDesktop ? "desktop" : ""}`}>
      <div className="navbar_logo">
        <img src={logoTD} alt="Logo" />
      </div>

      {/* Bouton menu burger (affiché uniquement sur mobile et tablette) */}
      {!isDesktop && (
        <button className={`navbar_burger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu} aria-label="Menu">
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </button>
      )}

      {/* Liste des liens (visible selon la taille de l'écran) */}
      <ul className={`navbar_links ${isMenuOpen || isDesktop ? "show" : "hide"}`}>
        {navLinks.map((link, index) => (
          <li key={index} className="navbar_item">
            <Link to={link.path} className="navbar_link" onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;