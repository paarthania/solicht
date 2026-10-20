import Header from "./Header";
import SocialMediaWidget from "./Socials";
import Footer from "./Footer";

const Layout = ({ background, children }) => (
  <div className="app">
    {background && (
      <div className={`page-background page-background--${background}`} />
    )}
    <Header />
    <SocialMediaWidget />
    {children}
    <Footer />
  </div>
);

export default Layout;
