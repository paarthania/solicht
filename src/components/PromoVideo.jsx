import { useEffect, useRef } from "react";
import promoVideo from "../images/video/promo.mp4";
import promoPoster from "../images/video/promo-poster.webp";

const PromoVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={videoRef}
      src={promoVideo}
      poster={promoPoster}
      aria-label="Drohnenaufnahme einer Solicht-Anlage"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
};

export default PromoVideo;
