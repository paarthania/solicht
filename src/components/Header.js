import React, { useState } from "react";
import "../styles/Header.css";
import logoS from "../images/logo_se_small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DesktopHeader = styled.div`
  justify-content: center;
  align-items: center;
  display: none; /* Default display is none */
  width: 80%;
  z-index: 1;
  @media (min-width: 1000px) {
    display: block;
    margin: auto;
  }
`;

const MobileHeader = styled.div`
  display: block;
  width: 82%;
  z-index: 1;
  margin: auto;

  @media (min-width: 1000px) {
    display: none;
  }
`;
const options = [
  { name: "Startseite", route: "/" },
  { name: "Unternehmen", route: "/unternehmen" },
  { name: "Leistungen", route: "/leistungen" },
  { name: "Projekte", route: "/projekte" },
  { name: "Kontakt", route: "/kontakt" },
];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <DesktopHeader>
        <header className="header">
          <div className="logo">
            <img style={{ width: 60, height: 60 }} src={logoS} />
          </div>
          <div className="main-titles">
            <Link to="/" className="title">
              Startseite
            </Link>

            <Link to="/unternehmen" className="title">
              Unternehmen
            </Link>

            <Link to="/leistungen" className="title">
              Leistungen
            </Link>

            <Link to="/projekte" className="title">
              Projekte
            </Link>

            <Link to="/kontakt" className="title">
              Kontakt
            </Link>
          </div>
        </header>
      </DesktopHeader>
      <MobileHeader>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "15px",
            marginBottom: "30px",
            color: "#2F6185",
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            fontSize: "20px",
          }}
          onClick={toggleDropdown}
        >
          <img
            style={{
              marginRight: 20,
              width: 50,
              height: 50,
            }}
            src={logoS}
          />

          {!isOpen && (
            <div
              style={{
                fontWeight: "bold",

                alignSelf: "center",
              }}
            >
              Menu
            </div>
          )}

          {isOpen && (
            <div>
              <ul style={{ listStyleType: "none", marginLeft: "-25px" }}>
                {options.map((option) => (
                  <li
                    onClick={() => {
                      toggleDropdown();
                    }}
                    style={{
                      marginBottom: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <Link to={option.route} className="title">
                      {option.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </MobileHeader>
    </div>
  );
};

export default Header;
