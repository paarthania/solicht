import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiGrid,
  FiKey,
  FiPenTool,
  FiShield,
  FiSun,
  FiZap,
} from "react-icons/fi";
import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import Rotator from "../components/Rotator";
import PromoVideo from "../components/PromoVideo";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";
import MemberCard from "../components/MemberCard";
import CtaBand from "../components/CtaBand";
import { contact } from "../content/contact";
import { services } from "../content/services";
import { projects } from "../content/projects";
import { team } from "../content/team";
import heroImage from "../images/projects/mosbach-2.webp";
import "../styles/Home.css";

const HERO_WORDS = ["planen", "installieren", "realisieren"];

const highlights = [
  {
    value: "0 %",
    title: "MwSt.",
    text: "Steuerfreies Investment in Solarenergie.",
  },
  {
    value: "3 Wochen",
    title: "bis zur Installation",
    text: "Schnelle und effiziente Projektabwicklung.",
  },
];

const benefits = [
  {
    Icon: FiKey,
    title: "Schlüsselfertiger Service",
    text: "Von der ersten Beratung bis zur Inbetriebnahme.",
  },
  {
    Icon: FiPenTool,
    title: "Individuelle Planung",
    text: "Maßgeschneiderte Lösungen für jeden Kunden.",
  },
  {
    Icon: FiGrid,
    title: "Hocheffiziente Module",
    text: "Systeme mit modernster Technologie.",
  },
  {
    Icon: FiShield,
    title: "10 Jahre Garantie",
    text: "Langfristige Sicherheit für Ihre Anlage.",
  },
];

const ArrowIcon = () => <FiArrowRight className="btn-arrow" />;

const Hero = () => (
  <section className="hero">
    <div className="container hero-grid">
      <div>
        <Reveal className="pill">
          <b>0 % MwSt.</b> auf Solaranlagen
        </Reveal>
        <Reveal as="h1" delay={1}>
          Ihre{" "}
          <span className="highlight">
            Solaranlage
            <svg
              viewBox="0 0 300 20"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M4 14C70 4 200 2 296 10" />
            </svg>
          </span>{" "}
          für Mosbach, Heilbronn und die Region
        </Reveal>
        <Reveal as="p" delay={2} className="hero-lead">
          Wir <Rotator words={HERO_WORDS} /> PV-Anlagen und effiziente
          Sanierungen – individuell auf Ihre Bedürfnisse zugeschnitten und als
          schlüsselfertige Lösung umgesetzt.
        </Reveal>
        <Reveal className="actions" delay={3}>
          <a className="btn btn--primary" href={contact.emailHref}>
            Kostenloses Angebot <ArrowIcon />
          </a>
          <Link className="btn btn--ghost" to="/projekte/">
            Projekte ansehen
          </Link>
        </Reveal>
        <Reveal className="hero-trust" delay={4}>
          {[
            "Installation in 3 Wochen",
            "10 Jahre Garantie",
            "Kostenlose Beratung",
          ].map((item) => (
            <div key={item}>
              <FiCheckCircle />
              {item}
            </div>
          ))}
        </Reveal>
      </div>

      <Reveal className="hero-media" delay={2}>
        <img
          src={heroImage}
          alt="Photovoltaik-Anlage auf einem Einfamilienhaus in Mosbach"
          width="1280"
          height="720"
          fetchPriority="high"
        />
        <div className="float-card float-card--a">
          <span className="icon-badge">
            <FiZap />
          </span>
          <div>
            <strong>30 kWp</strong>
            <small>Einfamilienhaus in Mosbach</small>
          </div>
        </div>
        <div className="float-card float-card--b">
          <span className="icon-badge">
            <FiSun />
          </span>
          <div>
            <strong>Schlüsselfertig</strong>
            <small>Von Beratung bis Inbetriebnahme</small>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const Benefits = () => (
  <section className="section section--tint">
    <div className="container">
      <SectionHead
        eyebrow="Warum Solicht Energie?"
        title="Nachhaltigkeit und Kundenzufriedenheit an erster Stelle"
        text="Qualität, Schnelligkeit und Sicherheit sind bei uns selbstverständlich."
      />
      <div className="benefits">
        {highlights.map(({ value, title, text }, index) => (
          <Reveal
            as="article"
            className="card benefit-highlight"
            delay={index}
            key={title}
          >
            <div className="stat">{value}</div>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </Reveal>
        ))}
        {benefits.map(({ Icon, title, text }, index) => (
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
    </div>
  </section>
);

const VideoFeature = () => (
  <section className="section">
    <div className="container split">
      <Reveal className="media-frame video-frame">
        <PromoVideo />
        <span className="video-tag">
          <i />
          Drohnenaufnahme
        </span>
      </Reveal>
      <div>
        <Reveal as="span" className="eyebrow">
          Energie von oben
        </Reveal>
        <Reveal as="h2" delay={1}>
          Verwandeln Sie Ihr Dach in eine effiziente Energiequelle
        </Reveal>
        <Reveal as="p" delay={2} className="muted feature-text">
          Mit unserer maßgeschneiderten Solarlösung senken Sie nicht nur Ihre
          Energiekosten, sondern tragen auch aktiv zum Umweltschutz bei. Und
          dank Fernüberwachung behalten Sie Ihre Energieproduktion von überall
          im Blick.
        </Reveal>
        <Reveal className="tagline" delay={3}>
          <span>Nachhaltig</span>
          <span>Sauber</span>
          <span>Zukunftssicher</span>
        </Reveal>
      </div>
    </div>
  </section>
);

const ServicesPreview = () => (
  <section className="section section--tint">
    <div className="container">
      <SectionHead
        eyebrow="Leistungen"
        title="Alles aus einer Hand – von der Planung bis zur Wartung"
      />
      <div className="service-grid">
        {services.map(({ title, summary, image }, index) => (
          <Reveal
            as="article"
            className="card card--hover service-card"
            delay={index % 3}
            key={title}
          >
            <div className="service-card-image">
              <img src={image} alt="" width="900" height="600" loading="lazy" />
            </div>
            <div className="service-card-body">
              <h3>{title}</h3>
              <p>{summary}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="center-action">
        <Link className="btn btn--ghost" to="/leistungen/">
          Alle Leistungen <ArrowIcon />
        </Link>
      </Reveal>
    </div>
  </section>
);

const ProjectsPreview = () => (
  <section className="section section--tint">
    <div className="container">
      <SectionHead
        eyebrow="Projekte"
        title="Realisierte Anlagen in der Region"
      />
      <div className="project-grid">
        {projects.map(({ name, images, specs }, index) => (
          <Reveal delay={index} key={name}>
            <Link className="project-card" to="/projekte/">
              <img
                src={images[0]}
                alt=""
                width="1280"
                height="720"
                loading="lazy"
              />
              <div className="project-card-info">
                <h3>{name}</h3>
                <div className="project-card-meta">
                  <span>{specs.Leistung}</span>
                  <span>
                    Speicher {specs.Stromspeicher.replace("Solax ", "")}
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <Testimonials />
    </div>
  </section>
);

const TeamTeaser = () => (
  <section className="section">
    <div className="container split">
      <div>
        <Reveal as="span" className="eyebrow">
          Unternehmen
        </Reveal>
        <Reveal as="h2" delay={1}>
          {"Bau- und Elektro\u00ADingenieurwesen unter einem Dach"}
        </Reveal>
        <Reveal as="p" delay={2} className="muted feature-text">
          Unser Team vereint einen erfahrenen Bauingenieur und Spezialisten für
          Energieeffizienz mit einem Elektroingenieur mit umfassender Expertise
          in Photovoltaikanlagen. Diese Synergie ermöglicht innovative,
          maßgeschneiderte und nachhaltige Lösungen nach höchsten Qualitäts- und
          Effizienzstandards.
        </Reveal>
        <Reveal className="actions" delay={3}>
          <Link className="btn btn--ghost" to="/unternehmen/">
            Mehr über uns <ArrowIcon />
          </Link>
        </Reveal>
      </div>
      <div className="team-teaser">
        {team.map((member, index) => (
          <MemberCard key={member.name} delay={index} {...member} />
        ))}
      </div>
    </div>
  </section>
);

const HomePage = () => (
  <Layout>
    <Hero />
    <Benefits />
    <VideoFeature />
    <ServicesPreview />
    <Steps />
    <ProjectsPreview />
    <TeamTeaser />
    <CtaBand />
  </Layout>
);

export default HomePage;
