import Layout from "../components/Layout";
import ProjectTemplate from "../components/ProjectTemplate";
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

const projects = [
  {
    name: "Einfamilienhaus in Mosbach",
    description:
      "Die Photovoltaik-Anlage wurde auf einem Einfamilienhaus in Mosbach realisiert.",
    images: [mosbach1, mosbach2, mosbach3],
    info: {
      Leistung: "30 kWp",
      Module: "66 Stk. Trina Vertex S+ 450w",
      Wechselrichter: "Solax 30 kW Ultra-Hybrid",
      Stromspeicher: "Solax 23,2 kW",
      Ausrichtung: "Ost-West",
    },
    customerName: "(Familie D. aus Mosbach)",
    customerComment:
      "„Unsere 30-kW-Dachinstallation wurde von Solicht Energie vollständig und einwandfrei abgeschlossen. Solicht Energie ist fleißig und zuverlässig. Die einzige Solarfirma, die ich jedem empfehlen würde.“ ",
  },
  {
    name: "Zweifamilienhaus in Haßmersheim",
    description:
      "Die Photovoltaik-Anlage wurde auf einem Zweifamilienhaus in Haßmersheim realisiert.",
    images: [hassmersheim1, hassmersheim2, hassmersheim3, hassmersheim4],
    info: {
      Leistung: "15 kWp",
      Module: "34 Trina Vertex S+ 450W",
      Wechselrichter: "Solax 15 kW Hybrid",
      Stromspeicher: "Solax 11,6 kW",
      Ausrichtung: "Ost",
    },
    customerName: "(Frau P. aus Haßmersheim)",
    customerComment:
      "„Die Installation wurde innerhalb von zwei Tagen abgeschlossen. Die erste Beratung hat mich am meisten überzeugt. Ich habe Angebote von vielen anderen Firmen eingeholt, aber in Bezug auf Preis und Leistung kann ich von Anfang bis Ende nur Solicht Energie empfehlen.“ ",
  },
  {
    name: "Mehrfamilienhaus in Bad Rappenau",
    description:
      "Die Photovoltaik-Anlage wurde auf einem Mehrfamilienhaus in Bad Rappenau realisiert.",
    images: [badRappenau1, badRappenau2, badRappenau3, badRappenau4],
    info: {
      Leistung: "15,12 kWp",
      Module: "36 Stk. Eco Delta 420 Wp Full Black",
      Wechselrichter: "Solax 15 kW Hybrid",
      Stromspeicher: "Solax 11,6 kW",
      Ausrichtung: "Süd-, Nord- und Westdach",
    },
    customerName: "(Familie H. aus Bad Rappenau)",
    customerComment: "„Gute Beratung, schneller Service, saubere Arbeit.“ ",
  },
  {
    name: "Zweifamilienhaus in Oggersheim",
    description:
      "Die Photovoltaik-Anlage wurde auf einem Zweifamilienhaus in Oggersheim realisiert.",
    images: [oggersheim1, oggersheim2, oggersheim3],
    info: {
      Leistung: "15,12 kWp",
      Module: "36 Stk. Eco Delta 420 Wp Full Black",
      Wechselrichter: "Solax 15 kW Hybrid",
      Stromspeicher: "Solax 11,6 kW",
      Ausrichtung: "Ost- und Westdach",
    },
    customerName: " (Familie S. aus Oggersheim)",
    customerComment:
      "„Perfekt! Sehr guter Plannung, Service und termingerechte Lieferung+Aufbau. Solicht Energie kann ich jederzeit nur weiterempfehlen!“",
  },
];

const Projects = () => (
  <Layout>
    {projects.map((project) => (
      <ProjectTemplate key={project.name} {...project} />
    ))}
  </Layout>
);

export default Projects;
