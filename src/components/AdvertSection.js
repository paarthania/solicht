import React from "react";
import "../styles/AdvertSection.css";

const AdvertSection = () => {
  return (
    <div className="main-container">
      <div className="title-text">Warum Solicht Energie?</div>
      <div className="content-wrapper">
        <div className="benefits-list">
          <p>
            Bei Solicht Energie stehen Nachhaltigkeit und Kundenzufriedenheit an
            erster Stelle. Jedes Projekt wird individuell auf Ihre Bedürfnisse
            zugeschnitten und als schlüsselfertige Lösung umgesetzt. Qualität,
            Schnelligkeit und Sicherheit sind bei uns selbstverständlich.
          </p>

          <h2>Unsere Vorteile:</h2>
          <ul>
            <li>
              <strong>0% MwSt:</strong> Steuerfreies Investment in Solarenergie.
            </li>
            <li>
              <strong>Installation in 3 Wochen:</strong> Schnelle und effiziente
              Projektabwicklung.
            </li>
            <li>
              <strong>Schlüsselfertiger Service:</strong> Von der ersten
              Beratung bis zur Inbetriebnahme.
            </li>
            <li>
              <strong>Individuelle Planung:</strong> Maßgeschneiderte Lösungen
              für jeden Kunden.
            </li>
            <li>
              <strong>Hocheffiziente Module:</strong> Systeme mit modernster
              Technologie.
            </li>
            <li>
              <strong>10 Jahre Garantie:</strong> Langfristige Sicherheit für
              Ihre Anlage.
            </li>
            <li>
              <strong>Fernüberwachung:</strong> Überwachen Sie Ihre
              Energieproduktion von überall.
            </li>
          </ul>
        </div>
        <a href="mailto:info@solicht.com" className="request-button">
          Jetzt Angebot Anfragen
        </a>
      </div>
    </div>
  );
};

export default AdvertSection;
