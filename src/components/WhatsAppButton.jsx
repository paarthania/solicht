import { FaWhatsapp } from "react-icons/fa";
import { contact } from "../content/contact";
import "../styles/Shared.css";

const WhatsAppButton = () => (
  <a
    className="whatsapp-fab"
    href={contact.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Per WhatsApp schreiben"
  >
    <FaWhatsapp />
  </a>
);

export default WhatsAppButton;
