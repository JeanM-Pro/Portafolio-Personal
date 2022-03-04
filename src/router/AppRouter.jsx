import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { HomePage } from "../pages/HomePage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { StudiesPage } from "../pages/StudiesPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Home" element={<HomePage />} />
        <Route path="About" element={<AboutPage />} />
        <Route path="Studies" element={<StudiesPage />} />
        <Route path="Projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
