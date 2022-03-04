import React, { useRef } from "react";
import proyectosJs from "../exports/proyectosJs";

export const ProyectosJs = () => {
  const carrusel = useRef();

  const maxScrollLeft = () => {
    const loco = carrusel.current.scrollWidth - carrusel.current.clientWidth;
    return loco;
  };

  let intervalo = null;
  let step = -1;

  const start = async () => {
    intervalo = setInterval(() => {
      carrusel.current.scrollLeft = carrusel.current.scrollLeft + step;
      if (carrusel.current.scrollLeft === maxScrollLeft()) {
        step = step * -1;
      } else if (carrusel.current.scrollLeft === 0) {
        step = step * -1;
      }
    }, 10);

    const result = await maxScrollLeft();
  };

  const stop = () => {
    clearInterval(intervalo);
  };

  start();

  return (
    <div className="contenedor">
      <h3>HTML-CSS-JS-REACT.JS</h3>
      <hr />
      <div className="projects-carrusel">
        <div
          className="carrusel-items"
          ref={carrusel}
          onMouseOver={stop}
          onMouseOut={start}
        >
          {proyectosJs.reverse().map((proyecto) => (
            <div className="carrusel-item" key={proyecto.id}>
              <a href={proyecto.href} target="_blank">
                <img src={proyecto.src} alt={proyecto.titulo} />
              </a>
              <p>{proyecto.titulo}</p>
              <p>{proyecto.estado}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
