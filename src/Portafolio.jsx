import React from "react";
import { AppRouter } from "./router/AppRouter";
import videoFondo from "./exports/video";

export const Portafolio = () => {
  return (
    <>
      <AppRouter />
      {/* <video autoPlay muted loop className="video-fondo">
        <source
          src="https://www.facebook.com/100074368123002/videos/1364521867323210/"
          type="video/mp4"
        />
      </video> */}
      <iframe
        className="video-fondo"
        src="https://www.youtube.com/embed/xKkRgR4AuBA?autoplay=1"
        allowFullScreen
      ></iframe>
      <div className="capa-fondo"></div>
    </>
  );
};
