import { FiMail, FiPhone } from "react-icons/fi";
import Reveal from "./Reveal";
import { contact } from "../content/contact";
import "../styles/Shared.css";

const CtaBand = () => (
  <section className="container cta-section">
    <Reveal className="cta">
      <h2>Bereit für Ihre eigene Solaranlage?</h2>
      <p>
        Lassen Sie sich kostenlos beraten – wir melden uns zeitnah bei Ihnen.
      </p>
      <div className="actions">
        <a className="btn btn--primary" href={contact.emailHref}>
          <FiMail /> {contact.email}
        </a>
        <a className="btn btn--ghost" href={contact.phoneHref}>
          <FiPhone /> {contact.phone}
        </a>
      </div>
    </Reveal>
  </section>
);

export default CtaBand;
