import Header from "../components/Header";
import "../app.css";
import "../fonts.css";
import Footer from "../components/Footer";
import SocialMediaWidget from "../components/Socials";

import ServicesInfo from "../components/ServicesInfo";

function Services() {
  return (
    <div className="app">
      <Header />
      <SocialMediaWidget />
      <ServicesInfo />
      <Footer />
    </div>
  );
}

export default Services;
