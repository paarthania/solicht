import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ProjectGallery = ({ name, images }) => {
  const [active, setActive] = useState(0);
  const show = (offset) =>
    setActive((index) => (index + offset + images.length) % images.length);

  return (
    <div className="gallery">
      <img
        key={active}
        className="gallery-image"
        src={images[active]}
        alt={`${name} – Bild ${active + 1} von ${images.length}`}
        width="1280"
        height="720"
        loading="lazy"
      />
      <button
        type="button"
        className="gallery-button gallery-button--prev"
        onClick={() => show(-1)}
        aria-label="Vorheriges Bild"
      >
        <FiChevronLeft />
      </button>
      <button
        type="button"
        className="gallery-button gallery-button--next"
        onClick={() => show(1)}
        aria-label="Nächstes Bild"
      >
        <FiChevronRight />
      </button>
      <div className="gallery-dots">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className={index === active ? "is-active" : ""}
            aria-label={`Bild ${index + 1} anzeigen`}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
