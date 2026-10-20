import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import "../styles/Footer.css";

const LegalDialog = ({ html, onClose }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".legal-dialog")) onClose();
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div className="legal-backdrop">
      <div className="legal-dialog" role="dialog" aria-modal="true">
        <button
          type="button"
          className="legal-close"
          onClick={onClose}
          aria-label="Schließen"
        >
          <FiX />
        </button>
        <div
          className="legal-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
};

export default LegalDialog;
