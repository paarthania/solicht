import MemberContainer from "./MemberContainer";
import kerimPhoto from "../images/team/kerim.webp";
import ufukPhoto from "../images/team/ufuk.webp";

const members = [
  {
    name: "A. Kerim Turhan",
    img: kerimPhoto,
    titles: ["Inhaber", "Bauingenieur", "Energie Effizienz Experte"],
  },
  {
    name: "Ufuk Büyüknalbant",
    img: ufukPhoto,
    titles: ["Geschäftsführer", "Elektroingenieur", "PV-Anlagen Experte"],
  },
];

const TeamMembers = () => (
  <div>
    <h2 className="about-title team-title">Das Team</h2>
    <div className="teamMembersBody">
      {members.map((member) => (
        <MemberContainer key={member.name} {...member} />
      ))}
    </div>
  </div>
);

export default TeamMembers;
