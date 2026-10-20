import Layout from "../components/Layout";
import Headline from "../components/Headline";
import AdvertSection from "../components/AdvertSection";
import VideoDisplayer from "../components/VideoDisplayer";

const HomePage = () => (
  <Layout background="sky">
    <Headline />
    <AdvertSection />
    <VideoDisplayer />
  </Layout>
);

export default HomePage;
