import React from "react";
import "../styles/AboutUs.css";

import MemberContainer from "./MemberContainer";

const TeamMembers = () => {
  return (
    <div>
      <h2 className="about-title" style={{ marginTop: "30px" }}>
        Das Team
      </h2>

      <div className="teamMembersBody">
        <MemberContainer
          img="https://i.postimg.cc/TYB4Tj33/kerim.jpg"
          name="A. Kerim Turhan"
          titles={[
            "• Inhaber",
            "• Bauingenieur",
            "• Energie Effizienz Experte",
          ]}
        />
        <MemberContainer
          img="https://i.postimg.cc/bNZ5XV85/ufuk.jpg"
          name="Ufuk Büyüknalbant"
          titles={[
            "• Geschäftsführer",
            "• Elektroingenieur",
            "• PV-Anlagen Experte",
          ]}
        />
      </div>
    </div>
  );
};

export default TeamMembers;
