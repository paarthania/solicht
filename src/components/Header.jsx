import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo_se_small.png";
import { contact } from "../content/contact";
import "../styles/Header.css";

const navItems = [
  { name: "Startseite", route: "/" },
  { name: "Unternehmen", route: "/unternehmen/" },
  { name: "Leistungen", route: "/leistungen/" },
  { name: "Projekte", route: "/projekte/" },
  { name: "Kontakt", route: "/kontakt/" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const classes = [
    "site-header",
    isScrolled && "is-scrolled",
    isMenuOpen && "menu-open",
  ];

  return (
    <header className={classes.filter(Boolean).join(" ")}>
      <div className="container nav">
        <Link className="brand" to="/" onClick={closeMenu}>
          <img src={logo} alt="" width="40" height="40" />
          Solicht <span>Energie</span>
        </Link>
        <nav aria-label="Hauptmenü">
          <ul className="nav-links" id="nav-links">
            {navItems.map(({ name, route }) => (
              <li key={route}>
                <NavLink to={route} end onClick={closeMenu}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn--primary nav-cta" href={contact.emailHref}>
          Angebot anfragen
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={isMenuOpen}
          aria-controls="nav-links"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;
