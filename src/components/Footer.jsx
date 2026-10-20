import { Link } from "react-router-dom";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../images/logo_se_small.png";
import { contact } from "../content/contact";
import { IMPRESSUM, DATENSCHUTZ } from "./legal";
import "../styles/Footer.css";

const socials = [
  { href: contact.whatsapp, label: "WhatsApp", Icon: FaWhatsapp },
  { href: contact.instagram, label: "Instagram", Icon: FaInstagram },
  { href: contact.facebook, label: "Facebook", Icon: FaFacebookF },
];

const Footer = ({ onOpenLegal }) => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <Link className="brand" to="/">
            <img src={logo} alt="" width="40" height="40" loading="lazy" />
            Solicht <span>Energie</span>
          </Link>
          <p className="footer-about">
            Photovoltaik, Stromspeicher und nachhaltige Energielösungen für
            Mosbach, Heilbronn und die Region.
          </p>
          <div className="socials">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4>Seiten</h4>
          <ul>
            <li>
              <Link to="/unternehmen/">Unternehmen</Link>
            </li>
            <li>
              <Link to="/leistungen/">Leistungen</Link>
            </li>
            <li>
              <Link to="/projekte/">Projekte</Link>
            </li>
            <li>
              <Link to="/kontakt/">Kontakt</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Kontakt</h4>
          <ul className="footer-contact">
            <li>
              <FiPhone />
              <a href={contact.phoneHref}>{contact.phone}</a>
            </li>
            <li>
              <FiMail />
              <a href={contact.emailHref}>{contact.email}</a>
            </li>
            <li>
              <FiMapPin />
              <span>
                {contact.street}, {contact.city}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Solicht Energie UG (haftungsbeschränkt)
        </span>
        <div className="footer-legal">
          <button type="button" onClick={() => onOpenLegal(IMPRESSUM)}>
            Impressum
          </button>
          <button type="button" onClick={() => onOpenLegal(DATENSCHUTZ)}>
            Datenschutz­erklärung
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
