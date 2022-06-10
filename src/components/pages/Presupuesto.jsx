import React from "react";

import Observaciones from "../moleculas/Observaciones";
import { PresupuestoCosto } from "../moleculas/PresupuestoCosto";
import PresupuestoVenta from "../moleculas/PresupuestoVenta";
import Variables from "../moleculas/Variables";
import Header from "../moleculas/Header";

import BotonAgregar from "../atoms/button/BotonAgregar";

const Presupuesto = () => {
  const botonCrearPresupuesto =
    "bg-black hover:bg-white hover:text-black hover:border hover:border-black text-white px-2 py-3 w-full mx-auto uppercase text-sm  font-bold uppercase cursor-pointer";

  const botonLimpiar =
    " duration-200 bg-slate-400 hover:bg-slate-500 text-white  px-3 py-1 my-5";

  return (
    <div>
      <Header title="Crear Presupuesto" />
      <Variables />
      <PresupuestoCosto />
      <div className="my-5">
        <BotonAgregar />
      </div>
      <PresupuestoVenta />
      <Observaciones />
      <div>
        <button
          type="button"
          className={botonLimpiar}
          // onClick={handleLimpiar}
        >
          Limpiar
        </button>
      </div>
      <input
        type="submit"
        className={botonCrearPresupuesto}
        value="Crear Presupuesto"
      />
    </div>
  );
};

export default Presupuesto;
