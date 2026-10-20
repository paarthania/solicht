import { FiAward, FiTool, FiZap } from "react-icons/fi";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import MemberCard from "../components/MemberCard";
import CtaBand from "../components/CtaBand";
import { team } from "../content/team";
import panelImage from "../images/backgrounds/panel.webp";
import "../styles/Pages.css";

const strengths = [
  {
    Icon: FiTool,
    title: "Bauingenieurwesen",
    text: "Robuste Bauingenieurprojekte und eine fundierte Baubegleitung.",
  },
  {
    Icon: FiAward,
    title: "Energieeffizienz",
    text: "Wegweisende Lösungen, um Energieverbrauch und Kosten zu senken.",
  },
  {
    Icon: FiZap,
    title: "Photovoltaik",
    text: "Planung und Installation hochmoderner Photovoltaikanlagen.",
  },
];

const AboutUs = () => (
  <Layout>
    <PageHero
      eyebrow="Unternehmen"
      title={"Bau- und Elektro\u00ADingenieurwesen unter einem Dach"}
      lead="Solicht Energie aus Bad Rappenau verbindet technisches Know-how mit persönlicher Betreuung – für nachhaltige Lösungen nach höchsten Qualitätsstandards."
    />
    <section className="section">
      <div className="container split split--top">
        <Reveal className="media-frame about-image">
          <img
            src={panelImage}
            alt="Solarpark bei Sonnenaufgang"
            width="1280"
            height="559"
          />
        </Reveal>
        <div>
          <Reveal as="span" className="eyebrow">
            Unsere Stärken
          </Reveal>
          <Reveal as="h2" delay={1}>
            Die Synergie macht den Unterschied
          </Reveal>
          <Reveal as="p" delay={2} className="muted about-text">
            Unser Team setzt sich aus einem erfahrenen Bauingenieur und einem
            Spezialisten für Energieeffizienz zusammen, ergänzt durch einen
            Elektroingenieur mit umfassender Expertise in Photovoltaikanlagen.
            Diese einzigartige Kombination ermöglicht es uns, nicht nur robuste
            Bauingenieurprojekte zu realisieren, sondern auch wegweisende
            Lösungen im Bereich der Energieeffizienz zu entwickeln.
          </Reveal>
          <Reveal as="p" delay={3} className="muted about-text">
            Die Synergie zwischen Bau- und Elektroingenieurwesen bildet das
            Herzstück unserer Firma und ermöglicht es uns, innovative,
            maßgeschneiderte und nachhaltige Lösungen anzubieten, die den
            höchsten Qualitäts- und Effizienzstandards entsprechen.
          </Reveal>
        </div>
      </div>
      <div className="container strengths">
        {strengths.map(({ Icon, title, text }, index) => (
          <Reveal
            as="article"
            className="card card--hover"
            delay={index}
            key={title}
          >
            <span className="icon-badge">
              <Icon />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
    <section className="section section--tint">
      <div className="container">
        <SectionHead eyebrow="Das Team" title="Ihre Ansprechpartner" center />
        <div className="team-grid">
          {team.map((member, index) => (
            <MemberCard key={member.name} delay={index} {...member} />
          ))}
        </div>
      </div>
    </section>
    <CtaBand />
  </Layout>
);

export default AboutUs;
