import React from "react";
import { useState, useEffect } from "react";

import imagenTravertino from "../../img/travertino.jpg";

import Layout from "../moleculas/Layout";
import Spiner from "../atoms/spiner/Spiner";

const Inicio = ({ cargando, setCargando }) => {
  const activarSpinner = setTimeout(() => {
    setCargando(false);
  }, 1000);

  activarSpinner;

  return (
    <div>
      <h1>Desde incio.jsx</h1>
      <h1 className="uppercase text-3xl font-bold">Presupuestos Travertino</h1>
      <img src={imagenTravertino} alt="Travertino" />
      {cargando && <Spiner />}
      {/* <Layout /> */}
    </div>
  );
};

export default Inicio;
