import React from "react";
import "../styles/VideoDisplayer.css";

const VideoDisplayer = ({}) => {
  return (
    <div className="video-displayer-container">
      <p className="above-video-description">
        Nutzen Sie die Kraft der Sonne und verwandeln Sie Ihr Dach in eine
        effiziente Energiequelle. Mit unserer maßgeschneiderten Solarlösung
        senken Sie nicht nur Ihre Energiekosten, sondern tragen auch aktiv zum
        Umweltschutz bei. Vertrauen Sie auf unsere Expertise und starten Sie in
        eine nachhaltige Zukunft!
      </p>

      <div className="content-container">
        <div className="left-section">
          <div className="image-container-desktop">
            <img
              src="https://i.postimg.cc/s2bL549M/Whats-App-Video2024-09-02at16-48-01-ezgif-com-optimize.gif"
              alt="solicht energie promo video"
              className="project-image"
            />
          </div>
        </div>
        <div className="right-section">
          <div className="static-video-text" style={{ color: "#f7941d" }}>
            Energie von oben.
          </div>
          <div className="static-video-text" style={{ color: "white" }}>
            Nachhaltig,
          </div>
          <div className="static-video-text" style={{ color: "#f7941d" }}>
            sauber,
          </div>
          <div className="static-video-text" style={{ color: "white" }}>
            zukunftssicher.
          </div>
        </div>
        <div className="image-container-mobile">
          <img
            src="https://i.postimg.cc/s2bL549M/Whats-App-Video2024-09-02at16-48-01-ezgif-com-optimize.gif"
            alt="solicht energie promo video"
            className="project-image"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoDisplayer;
