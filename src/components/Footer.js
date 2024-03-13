import React from "react";
import { useState, useEffect } from "react";
import logoS from "../images/logo_se_small.png";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Footer.css";
import Datenschutz from "./datenschutz";

const impressumInfo = `
Impressum
<br>
<br>
Angaben gemäß § 5 TMG<br>
Solicht Energie UG (haftungsbeschränkt)<br>
Ringstraße 27<br>
74906 Bad Rappenau<br><br>

Handelsregister: HRB 793558<br>
Registergericht: Stuttgart<br><br>

Vertreten durch:<br>
Ahmet Kerim Turhan<br><br>

Kontakt<br>
Telefon: +49 178 823 31 08<br>
E-Mail: info@solicht.com<br><br>

Umsatzsteuer-ID<br>
Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br>
HRB 793558<br><br>

Verbraucher­streit­beilegung/Universal­schlichtungs­stelle<br>
Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
`;

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [infoData, setInfoData] = useState("");

  const toggleInfoBox = (data) => {
    if (data === "imprs") {
      setInfoData(impressumInfo);
    }
    if (data === "daten") {
      setInfoData(Datenschutz);
    }

    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".info-box")) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

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
        <img
          src={logoS}
          alt="Website Logo"
          loading="lazy"
          className="footer__logo"
        />
      </div>
      <div className="bottom_infos">
        <button
          className="info_button"
          style={{ fontFamily: "Montserrat" }}
          onClick={() => toggleInfoBox("imprs")}
        >
          Impressum
        </button>
        <button
          className="info_button"
          style={{ fontFamily: "Montserrat" }}
          onClick={() => toggleInfoBox("daten")}
        >
          Datenschutz­erklärung
        </button>
      </div>
      {isOpen && (
        <div className="info-box" onClick={handleClose}>
          <div className="info-content">
            <div dangerouslySetInnerHTML={{ __html: infoData }} />
            <button className="close-btn" onClick={handleClose}>
              X
            </button>
          </div>
        </div>
      )}
      <style jsx>{`
        .info-box {
          position: fixed;
          top: 50%;
          max-height: 600px;
          overflow-y: auto;
          border-radius: 10px;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          padding: 30px;
          border: 3px solid #f7941d;
          z-index: 9999;
          animation: fadeIn 0.3s ease-out; /* Add animation */
        }
        .info-content {
          position: relative;
        }
        .close-btn {
          position: absolute;
          top: 1px;
          right: 1px;
          color: #2f6185;
          font-weight: 800;
          cursor: pointer;
          background: none;
          border: none;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
