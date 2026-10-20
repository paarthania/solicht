const MemberContainer = ({ titles, name, img }) => (
  <div className="teamMembersInnerBody">
    <img
      className="member-photo"
      src={img}
      alt={name}
      width="196"
      height="275"
      loading="lazy"
    />
    <p className="member-name">{name}</p>
    <div className="titles">
      {titles.map((title) => (
        <span key={title} className="member-title">
          • {title}
        </span>
      ))}
    </div>
  </div>
);

export default MemberContainer;
