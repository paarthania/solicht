import Header from "../components/Header";
import Headline from "../components/Headline";
import VideoDisplayer from "../components/VideoDisplayer";
import AdvertSection from "../components/AdvertSection";
import Footer from "../components/Footer";
import SocialMediaWidget from "../components/Socials";
import "../app.css";
import "../fonts.css";

function HomePage() {
  return (
    <div className="app">
      <div className="background-image"></div>
      <Header />
      <Headline />
      <SocialMediaWidget />
      <AdvertSection />

      <VideoDisplayer />
      <Footer />
    </div>
  );
}

export default HomePage;
