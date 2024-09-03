import Header from "../components/Header";
import "../app.css";
import "../fonts.css";
import "../styles/AboutUs.css";
import SocialMediaWidget from "../components/Socials";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import TeamMembers from "../components/TeamMembers";
function AboutUs() {
  return (
    <div className="app" style={{ fontFamily: "Montserrat" }}>
      <div className="background-image2" alt="background-panels"></div>

      <Header />
      <SocialMediaWidget />

      <div className="aboutBody">
        <AboutSection />
        <TeamMembers />
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
