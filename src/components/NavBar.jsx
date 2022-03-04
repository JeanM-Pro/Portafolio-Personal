import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <motion.div
      initial={{ x: "110vw", y: "-110" }}
      animate={{
        x: "0",
        transition: { duration: 1.6, ease: "easeInOut" },
      }}
      className="navbar"
    >
      <motion.div className="nombrelogo-container">
        <img
          src="https://i.ibb.co/Dg3vFhy/logo-portafolio.jpg"
          alt="logo-portafolio"
          border="0"
          className="logo"
        ></img>
        <h3>JEAN MARCOS CENTENO ROJAS</h3>
      </motion.div>
      <nav className="nav-items">
        <NavLink className="navlink" activeclassname="active" to="/Home">
          <span className="black">&lt;</span>
          Inicio
          <span className="black">&#47;&gt;</span>
        </NavLink>
        <NavLink className="navlink" activeclassname="active" to="/About">
          <span className="black">&lt;</span>
          SobreMi
          <span className="black">&#47;&gt;</span>
        </NavLink>
        <NavLink className="navlink" activeclassname="active" to="/Studies">
          <span className="black">&lt;</span>
          Estudios
          <span className="black">&#47;&gt;</span>
        </NavLink>
        <NavLink className="navlink" activeclassname="active" to="/Projects">
          <span className="black">&lt;</span>
          Proyectos
          <span className="black">&#47;&gt;</span>
        </NavLink>
      </nav>
    </motion.div>
  );
};
