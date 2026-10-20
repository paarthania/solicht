import mosbach1 from "../images/projects/mosbach-1.webp";
import mosbach2 from "../images/projects/mosbach-2.webp";
import mosbach3 from "../images/projects/mosbach-3.webp";
import hassmersheim1 from "../images/projects/hassmersheim-1.webp";
import hassmersheim2 from "../images/projects/hassmersheim-2.webp";
import hassmersheim3 from "../images/projects/hassmersheim-3.webp";
import hassmersheim4 from "../images/projects/hassmersheim-4.webp";
import badRappenau1 from "../images/projects/bad-rappenau-1.webp";
import badRappenau2 from "../images/projects/bad-rappenau-2.webp";
import badRappenau3 from "../images/projects/bad-rappenau-3.webp";
import badRappenau4 from "../images/projects/bad-rappenau-4.webp";
import oggersheim1 from "../images/projects/oggersheim-1.webp";
import oggersheim2 from "../images/projects/oggersheim-2.webp";
import oggersheim3 from "../images/projects/oggersheim-3.webp";

export const projects = [
  {
    name: "Einfamilienhaus in Mosbach",
    location: "Mosbach",
    images: [mosbach1, mosbach2, mosbach3],
    specs: {
      Leistung: "30 kWp",
      Module: "66 Stk. Trina Vertex S+ 450 W",
      Wechselrichter: "Solax 30 kW Ultra-Hybrid",
      Stromspeicher: "Solax 23,2 kW",
      Ausrichtung: "Ost-West",
    },
    customer: "Familie D.",
    quote:
      "Unsere 30-kW-Dachinstallation wurde von Solicht Energie vollständig und einwandfrei abgeschlossen. Solicht Energie ist fleißig und zuverlässig. Die einzige Solarfirma, die ich jedem empfehlen würde.",
    shortQuote:
      "Unsere 30-kW-Dachinstallation wurde von Solicht Energie vollständig und einwandfrei abgeschlossen. Solicht Energie ist fleißig und zuverlässig.",
  },
  {
    name: "Zweifamilienhaus in Haßmersheim",
    location: "Haßmersheim",
    images: [hassmersheim1, hassmersheim2, hassmersheim3, hassmersheim4],
    specs: {
      Leistung: "15 kWp",
      Module: "34 Stk. Trina Vertex S+ 450 W",
      Wechselrichter: "Solax 15 kW Hybrid",
      Stromspeicher: "Solax 11,6 kW",
      Ausrichtung: "Ost",
    },
    customer: "Frau P.",
    quote:
      "Die Installation wurde innerhalb von zwei Tagen abgeschlossen. Die erste Beratung hat mich am meisten überzeugt. Ich habe Angebote von vielen anderen Firmen eingeholt, aber in Bezug auf Preis und Leistung kann ich von Anfang bis Ende nur Solicht Energie empfehlen.",
    shortQuote:
      "Die Installation wurde innerhalb von zwei Tagen abgeschlossen. Die erste Beratung hat mich am meisten überzeugt.",
  },
  {
    name: "Mehrfamilienhaus in Bad Rappenau",
    location: "Bad Rappenau",
    images: [badRappenau1, badRappenau2, badRappenau3, badRappenau4],
    specs: {
      Leistung: "15,12 kWp",
      Module: "36 Stk. Eco Delta 420 Wp Full Black",
      Wechselrichter: "Solax 15 kW Hybrid",
      Stromspeicher: "Solax 11,6 kW",
      Ausrichtung: "Süd-, Nord- und Westdach",
    },
    customer: "Familie H.",
    quote: "Gute Beratung, schneller Service, saubere Arbeit.",
  },
  {
    name: "Zweifamilienhaus in Oggersheim",
    location: "Oggersheim",
    images: [oggersheim1, oggersheim2, oggersheim3],
    specs: {
      Leistung: "15,12 kWp",
      Module: "36 Stk. Eco Delta 420 Wp Full Black",
      Wechselrichter: "Solax 15 kW Hybrid",
      Stromspeicher: "Solax 11,6 kW",
      Ausrichtung: "Ost- und Westdach",
    },
    customer: "Familie S.",
    quote:
      "Perfekt! Sehr gute Planung, Service und termingerechte Lieferung und Aufbau. Solicht Energie kann ich jederzeit nur weiterempfehlen!",
  },
];
