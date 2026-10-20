import { useCallback, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import LegalDialog from "./LegalDialog";

const Layout = ({ children }) => {
  const [legalText, setLegalText] = useState(null);
  const closeLegal = useCallback(() => setLegalText(null), []);

  return (
    <>
      <Header />
      <main className="page">{children}</main>
      <Footer onOpenLegal={setLegalText} />
      <WhatsAppButton />
      {legalText && <LegalDialog html={legalText} onClose={closeLegal} />}
    </>
  );
};

export default Layout;
