import { motion } from "framer-motion";
import React from "react";
import { NavBar } from "../components/NavBar";
import { ProyectoSimple } from "../components/ProyectoSimple";
import { ProyectosJs } from "../components/ProyectosJs";

export const ProjectsPage = () => {
  return (
    <>
      <NavBar />
      <motion.div className="projects-container">
        <motion.h1
          initial={{ scale: 3 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 2,
          }}
        >
          My work
        </motion.h1>
        <ProyectoSimple />
        <ProyectosJs />
      </motion.div>
    </>
  );
};
