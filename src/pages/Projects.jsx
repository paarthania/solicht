import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import ProjectGallery from "../components/ProjectGallery";
import CtaBand from "../components/CtaBand";
import { projects } from "../content/projects";
import "../styles/Pages.css";

const Projects = () => (
  <Layout>
    <PageHero
      eyebrow="Projekte"
      title="Realisierte Anlagen in der Region"
      lead="Ein Auszug unserer Photovoltaik-Projekte – mit den technischen Daten und dem, was unsere Kunden dazu sagen."
    />
    <section className="section">
      <div className="container project-list">
        {projects.map(({ name, location, images, specs, customer, quote }) => (
          <article className="project-detail" key={name}>
            <Reveal className="project-detail-media">
              <ProjectGallery name={name} images={images} />
            </Reveal>
            <div>
              <Reveal as="span" className="eyebrow">
                {location}
              </Reveal>
              <Reveal as="h2" delay={1}>
                {name}
              </Reveal>
              <Reveal as="dl" delay={2} className="spec-list">
                {Object.entries(specs).map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </Reveal>
              <Reveal as="figure" delay={3} className="project-quote">
                <blockquote>„{quote}“</blockquote>
                <figcaption>
                  {customer} aus {location}
                </figcaption>
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </section>
    <CtaBand />
  </Layout>
);

export default Projects;
