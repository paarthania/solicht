import Layout from "../components/Layout";
import AboutSection from "../components/AboutSection";
import TeamMembers from "../components/TeamMembers";
import "../styles/AboutUs.css";

const AboutUs = () => (
  <Layout background="panels">
    <div className="aboutBody">
      <AboutSection />
      <TeamMembers />
    </div>
  </Layout>
);

export default AboutUs;
