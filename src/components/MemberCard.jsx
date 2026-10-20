import Reveal from "./Reveal";

const MemberCard = ({ name, role, skills, photo, delay }) => (
  <Reveal as="article" className="card card--hover member" delay={delay}>
    <img src={photo} alt={name} width="400" height="560" loading="lazy" />
    <h3>{name}</h3>
    <p>{role}</p>
    <div className="chips">
      {skills.map((skill) => (
        <span className="chip" key={skill}>
          {skill}
        </span>
      ))}
    </div>
  </Reveal>
);

export default MemberCard;
