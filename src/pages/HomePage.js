import Header from "../components/Header";
import Headline from "../components/Headline";
import GradientInfo from "../components/GradientInfo";
import Footer from "../components/Footer";
import "../app.css";
import "../fonts.css";

function HomePage() {
  return (
    <div className="app">
      <div className="background-image"></div>
      <Header />
      <Headline />
      <GradientInfo />
      <Footer />
    </div>
  );
}

export default HomePage;
