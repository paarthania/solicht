import React from "react";
import "../styles/AboutUs.css";

const MemberContainer = ({ titles, name, img }) => {
  return (
    <div className="teamMembersInnerBody">
      <img src={img} style={{ width: 196, height: 275 }} loading="lazy" />
      <p style={{ color: "#f7941d", fontWeight: "bold", fontSize: "20px" }}>
        {name}
      </p>

      <div className="titles">
        {titles.map((title, index) => (
          <span key={index} className="title">
            {title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MemberContainer;
