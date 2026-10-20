import { FiCheck } from "react-icons/fi";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Steps from "../components/Steps";
import CtaBand from "../components/CtaBand";
import { services } from "../content/services";
import "../styles/Pages.css";

const Services = () => (
  <Layout>
    <PageHero
      eyebrow="Leistungen"
      title="Alles aus einer Hand – von der Planung bis zur Wartung"
      lead="Ob Photovoltaik-Anlage, Energieberatung oder Baubegleitung: Wir begleiten Ihr Projekt von der ersten Idee bis zum zuverlässigen Betrieb."
    />
    <section className="section">
      <div className="container service-rows">
        {services.map(({ title, description, points, image }, index) => (
          <article className="service-row" key={title}>
            <Reveal className="media-frame service-row-image">
              <img
                src={image}
                alt={title}
                width="900"
                height="600"
                loading="lazy"
              />
            </Reveal>
            <div>
              <Reveal as="span" className="service-row-number">
                {String(index + 1).padStart(2, "0")}
              </Reveal>
              <Reveal as="h2" delay={1}>
                {title}
              </Reveal>
              <Reveal as="p" delay={2} className="muted service-row-text">
                {description}
              </Reveal>
              {points && (
                <Reveal as="ul" delay={3} className="check-list">
                  {points.map(([label, text]) => (
                    <li key={label}>
                      <FiCheck />
                      <span>
                        <b>{label}:</b> {text}
                      </span>
                    </li>
                  ))}
                </Reveal>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
    <div className="section--tint">
      <Steps />
    </div>
    <CtaBand />
  </Layout>
);

export default Services;
