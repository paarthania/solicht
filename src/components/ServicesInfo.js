import planungImage from "../images/services/Planung-Entwicklung.webp";
import installationImage from "../images/services/Installation.webp";
import anlagenbetriebImage from "../images/services/Anlagenbetrieb.webp";
import energieberatungImage from "../images/services/Energieberatung.webp";
import baubegleitungImage from "../images/services/Baubegleitung.webp";
import aufzugsmontageImage from "../images/services/Aufzugsmontage.webp";
import "../styles/ServicesInfo.css";

const services = [
  {
    title: "Planung & Entwicklung",
    description:
      "Unsere Experten erarbeiten detaillierte Pläne und Konzepte, die die Grundlage für den Erfolg Ihres Projekts bilden. Von der Standortanalyse bis zur technischen Ausarbeitung – wir planen sorgfältig, um optimale Ergebnisse zu gewährleisten.",
    image: planungImage,
  },
  {
    title: "Installation & Inbetriebnahme",
    description:
      "Unsere Elektroingenieure sorgen für die reibungslose Installation Ihrer Photovoltaikanlagen. Wir gewährleisten nicht nur eine fachgerechte Installation, sondern stehen Ihnen auch während der Inbetriebnahme mit Rat und Tat zur Seite.",
    image: installationImage,
  },
  {
    title: "Anlagenbetrieb & Wartung",
    description:
      "Damit Ihre Anlagen stets optimal funktionieren, bieten wir professionellen Betrieb und regelmäßige Wartungsdienste an. Wir überwachen den Anlagenbetrieb und führen präventive Wartungsmaßnahmen durch, um Ausfallzeiten zu minimieren.",
    image: anlagenbetriebImage,
  },
  {
    title: "Energieberatung",
    description:
      "Unser Energieeffizienzexperte steht Ihnen zur Seite, um individuelle Lösungen für maximale Energieeffizienz zu entwickeln. Von der Analyse bis zur Umsetzung helfen wir Ihnen, Ihren Energieverbrauch zu optimieren und Kosten zu senken.",
    image: energieberatungImage,
  },
  {
    title: "Baubegleitung",
    description:
      "Unsere Baubegleitung gewährleistet eine reibungslose Umsetzung Ihrer Bauprojekte. Wir übernehmen die Koordination vor Ort, überwachen den Baufortschritt und stehen als kompetenter Ansprechpartner zur Verfügung, um sicherzustellen, dass Ihr Projekt erfolgreich umgesetzt wird.",
    image: baubegleitungImage,
  },
  {
    title: "Aufzugsmontage & Wartungsservice",
    description:
      "Neumontage von Aufzügen: Fachgerechte Installation in Wohn-, Gewerbe- und Industriegebäuden. Wartung & Inspektion: Regelmäßige Kontrolle für einen sicheren und störungsfreien Betrieb. Reparaturservice: Schnelle und zuverlässige Behebung von Störungen. Modernisierung: Technische und sicherheitsrelevante Aufwertung älterer Anlagen. Ersatzteile & Notfalldienst: Lieferung, Einbau und 24/7-Service im Störungsfall. Warum wir? Über 35 Jahre Erfahrung, Arbeit nach CE- und DIN EN 81-Normen, persönliche Beratung und faire Preise.",
    image: aufzugsmontageImage,
  },
];

const ServicesInfo = () => (
  <div className="services-container">
    {services.map(({ title, description, image }, index) => (
      <div
        key={title}
        className={`service ${index % 2 ? "service--right" : "service--left"}`}
      >
        <img
          src={image}
          alt={title}
          className="service-image"
          loading="lazy"
        />
        <div className="service-content">
          <h2 className="service-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ServicesInfo;
