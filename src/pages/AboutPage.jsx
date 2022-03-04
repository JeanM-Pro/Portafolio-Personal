import { motion } from "framer-motion";
import React from "react";
import { NavBar } from "../components/NavBar";
import cvprueba from "../cv/cvprueba.pdf";

export const AboutPage = () => {
  return (
    <>
      <NavBar />
      <motion.div className="about-container">
        <motion.div
          initial={{ y: "-110vh" }}
          animate={{
            y: "0",
            transition: { duration: 1.6, ease: "easeInOut" },
          }}
          className="foto-container"
        >
          <img
            src="https://i.ibb.co/PtVt31Y/about-definitivo.png"
            alt="about-definitivo"
            border="0"
          />
        </motion.div>
        <motion.div
          initial={{ y: "110vh" }}
          animate={{
            y: "0",
            transition: { duration: 1.6, ease: "easeInOut" },
          }}
          className="text-container"
        >
          <h1>Hola, Soy Jean Centeno</h1>
          <hr />
          <p>
            {" "}
            Soy un Desarrollador Front-end autodidacta con un año de experiencia
            en la creación de aplicaciones web, los trabajos que he realizado
            han sido proyectos personales hechos para afianzar mis conocimientos
            y mejorar en mi práctica. Como desarrollador Front-end estoy mas
            enfocado en las herramientas y lenguajes de programación
            concernientes a esta área del desarrollo web.
            <br />
            <br />
            En un futuro una vez que esté mas especializado en el desarrollo
            Front-end también me gustaría ampliar mis conocimientos y destrezas
            por la parte del Back-end, aunque de ser necesario aprender algún
            lenguaje de Back-end en un puesto de trabajo antes del tiempo que yo
            crea conveniente, lo haré.
            <br />
            <br />
            Actualmente estoy planeando mudarme a Brasil con mi esposa y mi hija
            de dos años, mis tiempos libres los disfruto yendo a pasear con mi
            familia, viendo alguna película o serie, jugando videojuegos o
            viendo anime.
          </p>
          <motion.div className="button-container">
            <motion.a
              initial={{ y: -10 }}
              animate={{
                y: 10,
                transition: {
                  duration: 1,
                  ease: "easeIn",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              href={cvprueba}
              download={cvprueba}
              title="JeanCenteno"
            >
              &lt;DESCARGAR CV&#47;&gt;
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};
