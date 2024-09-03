import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom"; // Import HashRouter instead of BrowserRouter
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Conatct"; // Correct typo here

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leistungen" element={<Services />} />
        <Route path="/projekte" element={<Projects />} />
        <Route path="/unternehmen" element={<AboutUs />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </HashRouter>{" "}
  </React.StrictMode>
);
