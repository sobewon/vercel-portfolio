// import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import About from "./about";
import Contact from "./contact";
import Resume from "./resume";
import Project from "./project";

import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

function Main({ setPage }) {
  return (
    <Router>
      <Header setPage={setPage} />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/reaction-portfolio" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Main;