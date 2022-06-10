import React from "react";
import ImagenConfiguracion from "../atoms/ImagenConfiguracion";
import Header from "../moleculas/Header";

const Configuraciones = () => {
  return (
    <div>
      <Header
        title={`Configuraciones - 
       Pagina en Construccion`}
      />
      <h1>
        Aqui vas a poder crear tus opciones preestablecidas para ahorrar tiempo
        en tus cotizaciones.
      </h1>
      <ImagenConfiguracion />
      <p> Santi "Oso" Gomez </p>
    </div>
  );
};

export default Configuraciones;
