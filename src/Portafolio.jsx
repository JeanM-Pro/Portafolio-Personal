import React from "react";
import { AppRouter } from "./router/AppRouter";
import fondo2 from "./video/fondo2.mp4";

export const Portafolio = () => {
  return (
    <>
      <AppRouter />
      <video autoPlay muted loop className="video-fondo">
        <source src={fondo2} type="video/mp4" />
      </video>
      <div className="capa-fondo"></div>
    </>
  );
};
