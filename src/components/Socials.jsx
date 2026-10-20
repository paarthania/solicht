import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import "../styles/Socials.css";

const links = [
  { href: "https://wa.me/491628182112", label: "WhatsApp", Icon: FaWhatsapp },
  {
    href: "https://www.instagram.com/solicht.energie/",
    label: "Instagram",
    Icon: FaInstagram,
  },
  {
    href: "https://www.facebook.com/profile.php?id=61561744439723",
    label: "Facebook",
    Icon: FaFacebook,
  },
];

const SocialMediaWidget = () => (
  <div className="social-media-widget">
    {links.map(({ href, label, Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <Icon size="2em" />
      </a>
    ))}
  </div>
);

export default SocialMediaWidget;
