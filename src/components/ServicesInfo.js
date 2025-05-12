import React from "react";

import "../styles/ServicesInfo.css";

const ServicesInfo = () => {
  return (
    <div className="services-container" style={{ fontFamily: "Montserrat" }}>
      <Service
        title="Planung & Entwicklung"
        description="Unsere Experten erarbeiten detaillierte Pläne und Konzepte, die die Grundlage für den Erfolg Ihres Projekts bilden. Von der Standortanalyse bis zur technischen Ausarbeitung – wir planen sorgfältig, um optimale Ergebnisse zu gewährleisten."
        align="left"
        image="https://i.postimg.cc/3R9qhPds/Planung-Entwicklung.png"
      />
      <Service
        title="Installation & Inbetriebnahme"
        description="Unsere Elektroingenieure sorgen für die reibungslose Installation Ihrer Photovoltaikanlagen. Wir gewährleisten nicht nur eine fachgerechte Installation, sondern stehen Ihnen auch während der Inbetriebnahme mit Rat und Tat zur Seite."
        align="right"
        image="https://i.postimg.cc/vmrjq1MH/Installation.png"
      />
      <Service
        title="Anlagenbetrieb & Wartung"
        description="Damit Ihre Anlagen stets optimal funktionieren, bieten wir professionellen Betrieb und regelmäßige Wartungsdienste an. Wir überwachen den Anlagenbetrieb und führen präventive Wartungsmaßnahmen durch, um Ausfallzeiten zu minimieren."
        align="left"
        image="https://i.postimg.cc/k4y042hh/Anlagenbetrieb.png"
      />
      <Service
        title="Energieberatung"
        description="Unser Energieeffizienzexperte steht Ihnen zur Seite, um individuelle Lösungen für maximale Energieeffizienz zu entwickeln. Von der Analyse bis zur Umsetzung helfen wir Ihnen, Ihren Energieverbrauch zu optimieren und Kosten zu senken."
        align="right"
        image="https://i.postimg.cc/Fs6275Dm/Energieberatung.png"
      />
      <Service
        title="Baubegleitung"
        description="Unsere Baubegleitung gewährleistet eine reibungslose Umsetzung Ihrer Bauprojekte. Wir übernehmen die Koordination vor Ort, überwachen den Baufortschritt und stehen als kompetenter Ansprechpartner zur Verfügung, um sicherzustellen, dass Ihr Projekt erfolgreich umgesetzt wird."
        align="left"
        image="https://i.postimg.cc/c4Cpx47X/Baubegleitung.png"
      />
      <Service
        title="Aufzugsmontage & Wartungsservice"
        description="Neumontage von Aufzügen: Fachgerechte Installation in Wohn-, Gewerbe- und Industriegebäuden.
        Wartung & Inspektion: Regelmäßige Kontrolle für einen sicheren und störungsfreien Betrieb.
        Reparaturservice: Schnelle und zuverlässige Behebung von Störungen.
        Modernisierung: Technische und sicherheitsrelevante Aufwertung älterer Anlagen.
        Ersatzteile & Notfalldienst: Lieferung, Einbau und 24/7-Service im Störungsfall.
        Warum wir?
        Über 35 Jahre Erfahrung, Arbeit nach CE- und DIN EN 81-Normen, persönliche Beratung und faire Preise."
        align="right"
        image="https://iili.io/38ctAeR.jpg"
      />
    </div>
  );
};

const Service = ({ title, description, align, image }) => {
  return (
    <>
      <div className="desktop">
        <div className={`service ${align}`}>
          {align === "left" && (
            <img
              src={image}
              alt={title}
              className="service-image"
              loading="lazy"
            />
          )}
          <div className="service-content">
            <h2 className="service-title">{title}</h2>
            <p>{description}</p>
          </div>
          {align === "right" && (
            <img
              src={image}
              alt={title}
              className="service-image"
              loading="lazy"
            />
          )}
        </div>
      </div>
      <div className="mobile">
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src={image}
            alt={title}
            className="service-image"
            loading="lazy"
          />
          <h2 className="service-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ServicesInfo;
