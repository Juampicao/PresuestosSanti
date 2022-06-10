import React, { useState } from "react";
import agregarProducto from "../../../img/iconoAgregar.png";
import { PresupuestoCosto } from "../../moleculas/PresupuestoCosto";

const BotonAgregar = () => {
  const [prueba, setPrueba] = useState(true);

  const handleAgregarProducto = () => {
    console.log("agregando");
    {
      prueba && console.log("es true");
    }
  };
  return (
    <div>
      <div className="flex items-center ">
        <p className="font-black">Agregar Producto </p>
        <input
          type="image"
          src={agregarProducto}
          className="  h-10 hover:scale-[110%]	 duration-200 ml-2"
          onClick={handleAgregarProducto}
        />
      </div>
    </div>
  );
};

export default BotonAgregar;
