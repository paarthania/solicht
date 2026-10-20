import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leistungen" element={<Services />} />
        <Route path="/projekte" element={<Projects />} />
        <Route path="/unternehmen" element={<AboutUs />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
