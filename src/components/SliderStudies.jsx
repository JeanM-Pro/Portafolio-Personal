import React, { useEffect, useRef, useState } from "react";
import images from "../exports/images";
import { motion } from "framer-motion";

export const SliderStudies = () => {
  const [ancho, setAncho] = useState(0);
  const calculatedWidth = useRef();
  useEffect(() => {
    setAncho(
      calculatedWidth.current.scrollWidth - calculatedWidth.current.offsetWidth
    );
  }, []);

  return (
    <motion.div
      initial={{ y: "110vh", x: "-110vw" }}
      animate={{
        y: 0,
        x: 0,
        transition: { duration: 1.6, ease: "easeInOut" },
      }}
      className="container"
    >
      <h2>Certifications</h2>
      <hr />
      <motion.div className="image-container" ref={calculatedWidth}>
        <motion.div
          className="images-content"
          drag="x"
          dragConstraints={{ right: 0, left: -ancho }}
        >
          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} alt="" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
