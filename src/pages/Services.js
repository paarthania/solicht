import Header from "../components/Header";
import "../app.css";
import "../fonts.css";
import Footer from "../components/Footer";

import ServicesInfo from "../components/ServicesInfo";

function Services() {
  return (
    <div className="app">
      <Header />
      <ServicesInfo />
      <Footer />
    </div>
  );
}

export default Services;
