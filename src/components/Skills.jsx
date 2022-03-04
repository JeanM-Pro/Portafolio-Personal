import { motion } from "framer-motion";
import React from "react";
import iconos from "../exports/iconos";

export const Skills = () => {
  return (
    <motion.div
      initial={{ y: "-110vh", x: "110vw" }}
      animate={{
        y: 0,
        x: 0,
        transition: { duration: 1.6, ease: "easeInOut" },
      }}
      className="container"
    >
      <h2>Skills</h2>
      <hr />
      <div className="skills-container">
        {iconos.map((icono) => (
          <div className="icono-container" key={icono}>
            <img src={icono} alt="" />
          </div>
        ))}
      </div>
    </motion.div>
  );
};
