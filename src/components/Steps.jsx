import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import "../styles/Shared.css";

const steps = [
  ["Beratung", "Wir lernen Ihr Gebäude und Ihren Energiebedarf kennen."],
  ["Planung", "Maßgeschneidertes Konzept vom Standort bis zur Technik."],
  ["Installation", "Fachgerecht montiert und in Betrieb genommen."],
  ["Betrieb", "Fernüberwachung und Wartung für langfristige Sicherheit."],
];

const Steps = () => (
  <section className="section">
    <div className="container">
      <SectionHead
        eyebrow="So einfach geht's"
        title="In vier Schritten zur eigenen Solaranlage"
        center
      />
      <ol className="steps">
        {steps.map(([title, text], index) => (
          <Reveal as="li" className="step" delay={index} key={title}>
            <div className="step-num">{index + 1}</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Steps;
