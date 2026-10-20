import Reveal from "./Reveal";

const SectionHead = ({ eyebrow, title, text, center = false }) => (
  <Reveal className={`section-head${center ? " section-head--center" : ""}`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </Reveal>
);

export default SectionHead;
