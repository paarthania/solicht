import { useEffect, useRef } from "react";
import promoVideo from "../images/video/promo.mp4";
import promoPoster from "../images/video/promo-poster.webp";
import "../styles/VideoDisplayer.css";

const VideoDisplayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <div className="video-displayer-container">
      <p className="above-video-description">
        Nutzen Sie die Kraft der Sonne und verwandeln Sie Ihr Dach in eine
        effiziente Energiequelle. Mit unserer maßgeschneiderten Solarlösung
        senken Sie nicht nur Ihre Energiekosten, sondern tragen auch aktiv zum
        Umweltschutz bei. Vertrauen Sie auf unsere Expertise und starten Sie in
        eine nachhaltige Zukunft!
      </p>

      <div className="promo-content">
        <div className="promo-media">
          <video
            ref={videoRef}
            className="promo-video"
            src={promoVideo}
            poster={promoPoster}
            aria-label="Solicht Energie Promo-Video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
        <div className="promo-text">
          <div className="static-video-text accent">Energie von oben.</div>
          <div className="static-video-text">Nachhaltig,</div>
          <div className="static-video-text accent">sauber,</div>
          <div className="static-video-text">zukunftssicher.</div>
        </div>
      </div>
    </div>
  );
};

export default VideoDisplayer;
