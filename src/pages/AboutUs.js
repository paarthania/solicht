import Header from "../components/Header";
import "../app.css";
import "../fonts.css";
import "../styles/AboutUs.css";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <div className="app" style={{ fontFamily: "Montserrat" }}>
      <div className="background-image2" alt="background-panels"></div>

      <Header />
      <div className="aboutBody">
        <h2 className="about-title">Unsere Stärken</h2>
        <div className="about-text">
          Unser Team setzt sich aus einem erfahrenen Bauingenieur und einem
          Spezialisten für Energieeffizienz zusammen, ergänzt durch einen
          Elektroingenieur mit umfassender Expertise in Photovoltaikanlagen.
          Diese einzigartige Kombination ermöglicht es uns, nicht nur robuste
          Bauingenieurprojekte zu realisieren, sondern auch wegweisende Lösungen
          im Bereich der Energieeffizienz zu entwickeln. Der Elektroingenieur
          fokussiert sich dabei insbesondere auf die Planung und Installation
          hochmoderner Photovoltaikanlagen. Die Synergie zwischen Bau- und
          Elektroingenieurwesen bildet das Herzstück unserer Firma und
          ermöglicht es uns, innovative, maßgeschneiderte und nachhaltige
          Lösungen anzubieten, die den höchsten Qualitäts- und
          Effizienzstandards entsprechen.
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
