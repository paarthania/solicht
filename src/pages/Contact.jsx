import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { contact } from "../content/contact";
import "../styles/Pages.css";

const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.7395356297175!2d9.050999676168258!3d49.2434272735336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47978968920c9d85%3A0x31f82259acfe37a7!2sRingstra%C3%9Fe%2027%2C%2074906%20Bad%20Rappenau%2C%20Germany!5e0!3m2!1sen!2sch!4v1710268629408!5m2!1sen!2sch";

const channels = [
  {
    Icon: FiPhone,
    label: "Telefon",
    value: contact.phone,
    href: contact.phoneHref,
  },
  {
    Icon: FiMail,
    label: "E-Mail",
    value: contact.email,
    href: contact.emailHref,
  },
  {
    Icon: FaWhatsapp,
    label: "WhatsApp",
    value: "Nachricht schreiben",
    href: contact.whatsapp,
    external: true,
  },
  {
    Icon: FiMapPin,
    label: "Adresse",
    value: `${contact.street}, ${contact.city}`,
    href: contact.mapsHref,
    external: true,
  },
];

const Contact = () => (
  <Layout>
    <PageHero
      eyebrow="Kontakt"
      title="Wir freuen uns auf Ihre Anfrage"
      lead="Rufen Sie uns an, schreiben Sie uns oder besuchen Sie uns in Bad Rappenau – die Erstberatung ist kostenlos."
    />
    <section className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-channels">
          {channels.map(({ Icon, label, value, href, external }, index) => (
            <Reveal key={label} delay={index}>
              <a
                className="card card--hover contact-card"
                href={href}
                {...(external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                <span className="icon-badge">
                  <Icon />
                </span>
                <span>
                  <small>{label}</small>
                  <strong>{value}</strong>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="media-frame contact-map" delay={1}>
          <iframe
            title="Standort Solicht Energie"
            src={MAP_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  </Layout>
);

export default Contact;
