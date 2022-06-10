import React, { useState } from "react";

import Observaciones from "../moleculas/Observaciones";
import { PresupuestoCosto } from "../moleculas/PresupuestoCosto";
import PresupuestoVenta from "../moleculas/PresupuestoVenta";
import Variables from "../moleculas/Variables";
import Header from "../moleculas/Header";

// import BotonAgregar from "../atoms/button/BotonAgregar";
import agregarProducto from "../../img/iconoAgregar.png";

const Presupuesto = ({ materiales }) => {
  const [listadoMateriales, setListadoMateriales] = useState([
    PresupuestoCosto,
  ]);
  const [activeMostrarMateriales, setActiveMostrarMateriales] = useState(true);

  const handleAgregarProducto = () => {
    console.log("funciona..");
    listadoMateriales.push({ ...listadoMateriales[0] });
    console.log(listadoMateriales);
    setActiveMostrarMateriales(true);
  };

  // Styles
  const botonCrearPresupuesto =
    "bg-black hover:bg-white hover:text-black hover:border hover:border-black text-white px-2 py-3 w-full mx-auto uppercase text-sm  font-bold uppercase cursor-pointer";

  const botonLimpiar =
    " duration-200 bg-slate-400 hover:bg-slate-500 text-white  px-3 py-1 my-5";

  return (
    <div>
      <Header title="Crear Presupuesto" />
      <Variables />
      {/* <PresupuestoCosto materiales="Materiales" /> */}
      {activeMostrarMateriales &&
        listadoMateriales.map((e) => (
          <PresupuestoCosto materiales="Materiales" />
        ))}
      {/* Boton agregar Producto  */}
      <div className="flex items-center my-4 ">
        <p className="font-black">Agregar Producto </p>
        <input
          type="image"
          src={agregarProducto}
          className="h-10 hover:scale-[110%]	duration-200 ml-2"
          onClick={handleAgregarProducto}
        />
      </div>
      {/* Fin Boton agregar Producto  */}

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
