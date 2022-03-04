import { motion } from "framer-motion";
import React from "react";
import { NavBar } from "../components/NavBar";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <motion.div className="homecontainer">
        <motion.div className="div-container">
          <div className="redes">
            <a href="https://www.linkedin.com/in/jean-centeno-37962b218/">
              <img
                src="https://i.ibb.co/fStJtLn/linkedin.jpg"
                alt="linkedin"
                border="0"
                className="redes-img"
              />
            </a>

            <a href="https://github.com/JeanM-Pro">
              <img
                src="https://i.ibb.co/k6vHhXF/imagen-github.png"
                alt="imagen-github"
                border="0"
                className="redes-img"
              />
            </a>
            <a href="https://www.facebook.com/JeanMCenteno/">
              <img
                src="https://i.ibb.co/fpsfK87/fb.png"
                alt="fb"
                border="0"
                className="redes-img"
              />
            </a>
            <a href="https://www.instagram.com/jeancenteno54/?hl=es-la">
              <img
                src="https://i.ibb.co/TRSMPYW/ig.png"
                alt="ig"
                border="0"
                className="redes-img"
              />
            </a>
          </div>
          <motion.div
            initial={{ scale: 2 }}
            animate={{ scale: 1, transition: { duration: 1.9 } }}
            className="foto-titulo"
          >
            <motion.div>
              <motion.h1
                initial={{ x: "110vw" }}
                animate={{
                  x: "0",
                  transition: { duration: 1.6, ease: "easeInOut" },
                }}
              >
                FRONT END WEB
              </motion.h1>
              <motion.h2
                initial={{ x: "-110vw" }}
                animate={{
                  x: "0",
                  transition: { duration: 1.6, ease: "easeInOut" },
                }}
              >
                DEVELOPER
              </motion.h2>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};
