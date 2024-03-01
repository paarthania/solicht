import React from "react";
import logoS from "../images/logo_se_small.png";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer className="footer" style={{ fontFamily: "Montserrat" }}>
      <div className="footer__contact-info">
        <div className="footer__contact-item">
          <FaPhone className="footer__icon" />
          <span className="footer__text">+49 178 823 31 08</span>
        </div>
        <div className="footer__contact-item">
          <FaEnvelope className="footer__icon" />
          <span className="footer__text">info@solicht.com</span>
        </div>
        <div className="footer__contact-item">
          <FaMapMarkerAlt className="footer__icon" />
          <span className="footer__text">
            Ringstraße 27, 74906 Bad Rappenau
          </span>
        </div>
      </div>
      <div className="footer__logos">
        <img src={logoS} alt="Website Logo" className="footer__logo" />
      </div>
    </footer>
  );
};

export default Footer;
