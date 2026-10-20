import { useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../images/logo_se_small.png";
import { IMPRESSUM, DATENSCHUTZ } from "./legal";
import "../styles/Footer.css";

const Footer = () => {
  const [legalText, setLegalText] = useState(null);
  const close = () => setLegalText(null);

  useEffect(() => {
    if (!legalText) return;
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".info-box")) close();
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [legalText]);

  return (
    <footer className="footer">
      <div className="footer__contact-info">
        <div className="footer__contact-item">
          <FaPhone className="footer__icon" />
          <span>+49 178 823 31 08</span>
        </div>
        <div className="footer__contact-item">
          <FaEnvelope className="footer__icon" />
          <span>info@solicht.com</span>
        </div>
        <div className="footer__contact-item">
          <FaMapMarkerAlt className="footer__icon" />
          <span>Ringstraße 27, 74906 Bad Rappenau</span>
        </div>
      </div>
      <div className="footer__logos">
        <img
          src={logo}
          alt="Solicht Energie"
          loading="lazy"
          className="footer__logo"
        />
      </div>
      <div className="bottom_infos">
        <button className="info_button" onClick={() => setLegalText(IMPRESSUM)}>
          Impressum
        </button>
        <button
          className="info_button"
          onClick={() => setLegalText(DATENSCHUTZ)}
        >
          Datenschutz­erklärung
        </button>
      </div>
      {legalText && (
        <div className="info-box" onClick={close}>
          <div className="info-content">
            <div dangerouslySetInnerHTML={{ __html: legalText }} />
            <button className="close-btn" onClick={close} aria-label="Schließen">
              X
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
