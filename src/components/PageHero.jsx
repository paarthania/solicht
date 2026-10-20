import Reveal from "./Reveal";
import "../styles/Shared.css";

const PageHero = ({ eyebrow, title, lead }) => (
  <section className="page-hero">
    <div className="container">
      <Reveal as="span" className="eyebrow">
        {eyebrow}
      </Reveal>
      <Reveal as="h1" delay={1}>
        {title}
      </Reveal>
      {lead && (
        <Reveal as="p" delay={2} className="page-hero-lead">
          {lead}
        </Reveal>
      )}
    </div>
  </section>
);

export default PageHero;
