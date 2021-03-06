import React from "react";
import Header from "./Header";

const CotizacionesVenta = () => {
  // Styles

  const inputDiv = "space-y-1 flex flex-col  ";
  const inputText = "pl-2 py-1  w-full capitalize border border-slate-300 ";
  const inputSelect =
    "pl-2 py-1  min-w-[20px] max-w-[120px] capitalize border border-slate-300 ";
  const label = "pl-1 font-black";

  return (
    <div>
      <Header title="Cotizaciones Venta" />
      <div className="flex flex-col  m-2 p-4 shadow-xl ">
        <h3 className="text-2xl font-bold my-2"> Cliente </h3>
        {/* Inicio Formulario Materiales */}
        <div className="flex flex-col space-y-5 m-2 p-1  ">
          <div className={inputDiv}>
            <label htmlFor="empresa" className={label}>
              Nombre Empresa
            </label>
            <input
              id="empresa"
              type="text"
              placeholder="Nombre "
              className={inputText}
              // value={empresa}
              // onChange={(e) => setEmpresa(e.target.value)}
            />
          </div>
          <div className={inputDiv}>
            <label htmlFor="direccion" className={label}>
              Direccion
            </label>
            <input
              id="direccion"
              type="text"
              placeholder="Dirección "
              className={inputText}
              // value={empresa}
              // onChange={(e) => setEmpresa(e.target.value)}
            />
          </div>
          <div className={inputDiv}>
            <label htmlFor="correo" className={label}>
              Correo Electronico
            </label>
            <input
              id="correo"
              type="text"
              placeholder="Correo Electrónico "
              className={inputText}
              // value={empresa}
              // onChange={(e) => setEmpresa(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CotizacionesVenta;
