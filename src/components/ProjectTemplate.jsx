import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../styles/Projects.css";

const ProjectTemplate = ({
  name,
  description,
  images,
  info,
  customerComment,
  customerName,
}) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showImage = (offset) =>
    setImageIndex((index) => (index + offset + images.length) % images.length);

  return (
    <div className="project-container">
      <h1 className="project-title">{name}</h1>
      <div className="project-content">
        <div className="project-gallery-wrapper">
          <div className="project-gallery">
            <button
              onClick={() => showImage(-1)}
              className="arrow-button arrow-button--prev"
              aria-label="Vorheriges Bild"
            >
              <FaArrowLeft />
            </button>
            <img
              src={images[imageIndex]}
              alt={`${name} – Bild ${imageIndex + 1}`}
              className="project-image"
              loading="lazy"
            />
            <button
              onClick={() => showImage(1)}
              className="arrow-button arrow-button--next"
              aria-label="Nächstes Bild"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="project-info">
          <table className="project-info-table">
            <thead>
              <tr>
                <th colSpan="2">Anlagedaten</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(info).map(([key, value]) => (
                <tr key={key}>
                  <td className="project-info-key">{key}</td>
                  <td className="project-info-value">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <p className="project-description">
        Das sagt unser Kunde{" "}
        <span className="bracket-content">{customerComment}</span>
        {customerName}
      </p>
    </div>
  );
};

export default ProjectTemplate;
