import React, { useState } from "react";
import "../styles/Projects.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons

const ProjectTemplate = ({
  name,
  description,
  images,
  info,
  customerComment,
  customerName,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="project-container">
      <h1 className="project-title">{name}</h1>
      <div className="content-container">
        <div className="left-section">
          <div className="image-container-desktop">
            <button onClick={goToPreviousImage} className="arrow-button left">
              <FaArrowLeft />
            </button>
            <img
              src={images[currentImageIndex]}
              alt={`Project Image ${currentImageIndex + 1}`}
              className="project-image"
            />
            <button onClick={goToNextImage} className="arrow-button right">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="right-section">
          <table className="project-info-table">
            <thead>
              <tr>
                <th style={{ color: "#183347" }} colSpan="2">
                  Anlagedaten
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(info).map(([key, value]) => (
                <tr key={key}>
                  <td
                    style={{
                      backgroundColor: "#f7941d",
                      color: "white",
                      fontWeight: "1000px",
                    }}
                  >
                    {key}
                  </td>
                  <td style={{ backgroundColor: "#f2f2f2", color: "#183347" }}>
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="image-container-mobile">
          <button onClick={goToPreviousImage} className="arrow-button left">
            <FaArrowLeft />
          </button>
          <img
            src={images[currentImageIndex]}
            alt={`Project Image ${currentImageIndex + 1}`}
            className="project-image"
          />
          <button onClick={goToNextImage} className="arrow-button right">
            <FaArrowRight />
          </button>
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
