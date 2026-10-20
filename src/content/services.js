import planungImage from "../images/services/Planung-Entwicklung.webp";
import installationImage from "../images/services/Installation.webp";
import anlagenbetriebImage from "../images/services/Anlagenbetrieb.webp";
import energieberatungImage from "../images/services/Energieberatung.webp";
import baubegleitungImage from "../images/services/Baubegleitung.webp";
import aufzugsmontageImage from "../images/services/Aufzugsmontage.webp";

export const services = [
  {
    title: "Planung & Entwicklung",
    summary:
      "Von der Standortanalyse bis zur technischen Ausarbeitung – wir planen sorgfältig für optimale Ergebnisse.",
    description:
      "Unsere Experten erarbeiten detaillierte Pläne und Konzepte, die die Grundlage für den Erfolg Ihres Projekts bilden. Von der Standortanalyse bis zur technischen Ausarbeitung – wir planen sorgfältig, um optimale Ergebnisse zu gewährleisten.",
    image: planungImage,
  },
  {
    title: "Installation & Inbetriebnahme",
    summary:
      "Unsere Elektroingenieure sorgen für die fachgerechte, reibungslose Installation Ihrer PV-Anlage.",
    description:
      "Unsere Elektroingenieure sorgen für die reibungslose Installation Ihrer Photovoltaikanlagen. Wir gewährleisten nicht nur eine fachgerechte Installation, sondern stehen Ihnen auch während der Inbetriebnahme mit Rat und Tat zur Seite.",
    image: installationImage,
  },
  {
    title: "Anlagenbetrieb & Wartung",
    summary:
      "Überwachung und präventive Wartung, damit Ihre Anlage stets optimal läuft.",
    description:
      "Damit Ihre Anlagen stets optimal funktionieren, bieten wir professionellen Betrieb und regelmäßige Wartungsdienste an. Wir überwachen den Anlagenbetrieb und führen präventive Wartungsmaßnahmen durch, um Ausfallzeiten zu minimieren.",
    image: anlagenbetriebImage,
  },
  {
    title: "Energieberatung",
    summary:
      "Individuelle Lösungen für maximale Energieeffizienz – Verbrauch optimieren, Kosten senken.",
    description:
      "Unser Energieeffizienzexperte steht Ihnen zur Seite, um individuelle Lösungen für maximale Energieeffizienz zu entwickeln. Von der Analyse bis zur Umsetzung helfen wir Ihnen, Ihren Energieverbrauch zu optimieren und Kosten zu senken.",
    image: energieberatungImage,
  },
  {
    title: "Baubegleitung",
    summary:
      "Koordination vor Ort und Überwachung des Baufortschritts – Ihr kompetenter Ansprechpartner.",
    description:
      "Unsere Baubegleitung gewährleistet eine reibungslose Umsetzung Ihrer Bauprojekte. Wir übernehmen die Koordination vor Ort, überwachen den Baufortschritt und stehen als kompetenter Ansprechpartner zur Verfügung, um sicherzustellen, dass Ihr Projekt erfolgreich umgesetzt wird.",
    image: baubegleitungImage,
  },
  {
    title: "Aufzugsmontage & Wartungsservice",
    summary:
      "Neumontage, Wartung, Reparatur und Modernisierung – über 35 Jahre Erfahrung.",
    description:
      "Über 35 Jahre Erfahrung, Arbeit nach CE- und DIN EN 81-Normen, persönliche Beratung und faire Preise.",
    points: [
      [
        "Neumontage von Aufzügen",
        "Fachgerechte Installation in Wohn-, Gewerbe- und Industriegebäuden.",
      ],
      [
        "Wartung & Inspektion",
        "Regelmäßige Kontrolle für einen sicheren und störungsfreien Betrieb.",
      ],
      ["Reparaturservice", "Schnelle und zuverlässige Behebung von Störungen."],
      [
        "Modernisierung",
        "Technische und sicherheitsrelevante Aufwertung älterer Anlagen.",
      ],
      [
        "Ersatzteile & Notfalldienst",
        "Lieferung, Einbau und 24/7-Service im Störungsfall.",
      ],
    ],
    image: aufzugsmontageImage,
  },
];
