import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialMediaWidget.css";

const SocialMediaWidget = () => {
  return (
    <div className="social-media-widget">
      <a
        href="https://wa.me/491628182112"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/solicht.energie/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61561744439723"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
    </div>
  );
};

export default SocialMediaWidget;
