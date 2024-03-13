import React from "react";
import "../styles/AboutUs.css";
import kerim from "../images/kerim.jpg";
import ufuk from "../images/ufuk.jpg";

import MemberContainer from "./MemberContainer";

const TeamMembers = () => {
  return (
    <div>
      <h2 className="about-title" style={{ marginTop: "30px" }}>
        Das Team
      </h2>

      <div className="teamMembersBody">
        <MemberContainer
          img={kerim}
          name="A. Kerim Turhan"
          titles={[
            "• Inhaber",
            "• Bauingenieur",
            "• Energie Effizienz Experte",
          ]}
        />
        <MemberContainer
          img={ufuk}
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
