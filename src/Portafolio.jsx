import React from "react";
import { AppRouter } from "./router/AppRouter";
import fondo from "./video/fondo.mp4";

export const Portafolio = () => {
  return (
    <>
      <AppRouter />
      {/* <video autoPlay muted loop className="video-fondo">
        <source src={fondo} type="video/mp4" />
      </video> */}
      <div className="capa-fondo"></div>
    </>
  );
};
