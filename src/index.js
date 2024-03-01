import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import AboutUs from "./pages/AboutUs";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leistungen" element={<Services />} />
        <Route path="/projekte" element={<Projects />} />
        <Route path="/unternehmen" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
