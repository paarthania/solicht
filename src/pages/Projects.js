import Header from "../components/Header";
import "../app.css";
import "../fonts.css";
import ProjectTemplate from "../components/ProjectTemplate";
import Footer from "../components/Footer";
import SocialMediaWidget from "../components/Socials";

const firstProjData = {
  name: "Zweifamilienhaus in Oggersheim",
  description:
    "Die Photovoltaik-Anlage wurde auf einem Zweifamilienhaus in Oggersheim realisiert.",
  images: [
    "https://i.postimg.cc/tgjRnjJ8/0a155c8a-8a2a-4c9f-b06a-403033c64974-e773d05aba1f0a8d39dc.jpg",
    "https://i.postimg.cc/rF2qPTCs/71f00b59-4c86-4750-871f-c6feb5e7eec6-89cea5557a1d28bd38e1.jpg",
    "https://i.postimg.cc/25yYZSmc/IMG-8349-3f2350683b4ebce81ac6.jpg",
  ],
  info: {
    Leistung: "15,12 kWp",
    Module: "36 Stk. Eco Delta 420 Wp Full Black",
    Wechselrichter: "Solax 15 kW Hybrid",
    Stromspeicher: " Solax 11,6 kW",
    Ausrichtung: "Ost- und Westdach",
  },
  customerName: " (Familie S. aus Oggersheim)",
  customerComment:
    "„Perfekt! Sehr guter Plannung, Service und termingerechte Lieferung+Aufbau. Solicht Energie kann ich jederzeit nur weiterempfehlen!“",
};

const secondProjData = {
  name: "Mehrfamilienhaus in Bad Rappenau",
  description:
    "Die Photovoltaik-Anlage wurde auf einem Mehrfamilienhaus in Bad Rappenau realisiert.",
  images: [
    "https://i.postimg.cc/L8swyQ7h/img1.jpg",
    "https://i.postimg.cc/vZD27ggV/img2.jpg",
    "https://i.postimg.cc/fT1mFJqX/img3.jpg",
    "https://i.postimg.cc/2SpLGg37/img4.jpg",
  ],
  info: {
    Leistung: "15,12 kWp",
    Module: "36 Stk. Eco Delta 420 Wp Full Black",
    Wechselrichter: "Solax 15 kW Hybrid",
    Stromspeicher: " Solax 11,6 kW",
    Ausrichtung: "Süd-, Nord- und Westdach",
  },
  customerName: "(Familie H. aus Bad Rappenau) ",
  customerComment: "„Gute Beratung, schneller Service, saubere Arbeit.“ ",
};

const thirdProjData = {
  name: "Einfamilienhaus in Mosbach",
  description:
    "Die Photovoltaik-Anlage wurde auf einem Einfamilienhaus in Mosbach realisiert.",
  images: [
    "https://i.postimg.cc/Kj2t9zGF/DJI-0335.jpg",
    "https://i.postimg.cc/y6mmDFjN/DJI-0359.jpg",
    "https://i.postimg.cc/029pDbX0/DJI-0375.jpg",
  ],
  info: {
    Leistung: "30 kWp",
    Module: "66 Stk. Trina Vertex S+ 450w",
    Wechselrichter: "Solax 30 kW Ultra-Hybrid",
    Stromspeicher: " Solax 23,2 kW",
    Ausrichtung: "Ost-West",
  },
  customerName: "(Familie D. aus Mosbach)",
  customerComment:
    "„Unsere 30-kW-Dachinstallation wurde von Solicht Energie vollständig und einwandfrei abgeschlossen. Solicht Energie ist fleißig und zuverlässig. Die einzige Solarfirma, die ich jedem empfehlen würde.“ ",
};

const fourthProjData = {
  name: "Zweifamilienhaus in Haßmersheim",
  description:
    "Die Photovoltaik-Anlage wurde auf einem Zweifamilienhaus in Haßmersheim realisiert.",
  images: [
    "https://i.postimg.cc/ydqRddS9/DJI-0279.jpg",
    "https://i.postimg.cc/x85Nt3py/DJI-0288.jpg",
    "https://i.postimg.cc/4N49njn8/DJI-0310.jpg",
    "https://i.postimg.cc/GmHTxYFG/DJI-0319.jpg",
  ],
  info: {
    Leistung: "15 kWp",
    Module: "34 Trina Vertex S+ 450W",
    Wechselrichter: "Solax 15 kW Hybrid",
    Stromspeicher: " Solax 11,6 kW",
    Ausrichtung: "Ost",
  },
  customerName: "(Frau P. aus Haßmersheim)",
  customerComment:
    "„Die Installation wurde innerhalb von zwei Tagen abgeschlossen. Die erste Beratung hat mich am meisten überzeugt. Ich habe Angebote von vielen anderen Firmen eingeholt, aber in Bezug auf Preis und Leistung kann ich von Anfang bis Ende nur Solicht Energie empfehlen.“ ",
};

function Projects() {
  return (
    <div className="app">
      <Header />
      <SocialMediaWidget />
      <ProjectTemplate
        name={thirdProjData.name}
        description={thirdProjData.description}
        images={thirdProjData.images}
        info={thirdProjData.info}
        customerComment={thirdProjData.customerComment}
        customerName={thirdProjData.customerName}
      />
      <div style={{ marginTop: "50px" }}></div>

      <ProjectTemplate
        name={fourthProjData.name}
        description={fourthProjData.description}
        images={fourthProjData.images}
        info={fourthProjData.info}
        customerComment={fourthProjData.customerComment}
        customerName={fourthProjData.customerName}
      />

      <div style={{ marginTop: "50px" }}></div>

      <ProjectTemplate
        name={secondProjData.name}
        description={secondProjData.description}
        images={secondProjData.images}
        info={secondProjData.info}
        customerComment={secondProjData.customerComment}
        customerName={secondProjData.customerName}
      />

      <div style={{ marginTop: "50px" }}></div>
      <ProjectTemplate
        name={firstProjData.name}
        description={firstProjData.description}
        images={firstProjData.images}
        info={firstProjData.info}
        customerComment={firstProjData.customerComment}
        customerName={firstProjData.customerName}
      />
      <Footer />
    </div>
  );
}

export default Projects;
