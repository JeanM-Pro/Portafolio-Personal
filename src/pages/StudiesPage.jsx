import { motion } from "framer-motion";
import React from "react";
import { NavBar } from "../components/NavBar";
import { Skills } from "../components/Skills";
import { SliderStudies } from "../components/SliderStudies";

export const StudiesPage = () => {
  return (
    <>
      <NavBar />
      <div className="studies-container">
        <SliderStudies />
        <Skills />
      </div>
    </>
  );
};
