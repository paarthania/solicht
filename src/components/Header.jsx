import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo_se_small.png";
import "../styles/Header.css";

const navItems = [
  { name: "Startseite", route: "/" },
  { name: "Unternehmen", route: "/unternehmen/" },
  { name: "Leistungen", route: "/leistungen/" },
  { name: "Projekte", route: "/projekte/" },
  { name: "Kontakt", route: "/kontakt/" },
];

const NavLinks = () =>
  navItems.map(({ name, route }) => (
    <Link key={route} to={route} className="nav-link">
      {name}
    </Link>
  ));

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="desktop-header">
        <header className="header">
          <div className="logo">
            <Link to="/">
              <img className="logo-image" src={logo} alt="Solicht Energie" />
            </Link>
          </div>
          <nav className="main-titles">
            <NavLinks />
          </nav>
        </header>
      </div>
      <div className="mobile-header">
        <div className="mobile-header-bar">
          <Link to="/" onClick={closeMenu}>
            <img
              className="mobile-logo-image"
              src={logo}
              alt="Solicht Energie"
            />
          </Link>
          {isMenuOpen ? (
            <ul className="mobile-menu">
              {navItems.map(({ name, route }) => (
                <li key={route}>
                  <Link to={route} className="nav-link" onClick={closeMenu}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <button
              type="button"
              className="mobile-menu-label"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(true)}
            >
              Menu
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
