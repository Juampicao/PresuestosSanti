import React from "react";

export const PresupuestoCosto = () => {
  // Styles

  const inputDiv = "space-y-1 flex flex-col  ";
  const inputText = "pl-2 py-1  w-full capitalize border border-slate-300 ";
  const inputSelect =
    "pl-2 py-1  min-w-[20px] max-w-[120px] capitalize border border-slate-300 ";
  const label = "pl-1 font-black";

  return (
    <div>
      <div className="flex flex-col  m-2 p-4 shadow-xl ">
        <h3 className="text-2xl font-bold my-2"> Materiales </h3>
        {/* Inicio Formulario Materiales */}
        <div className="flex flex-col space-y-5 m-2 p-1  ">
          <div className={inputDiv}>
            <label htmlFor="material" className={label}>
              Tipo de Material
            </label>
            <input
              id="material"
              type="text"
              placeholder="Nombre"
              className={inputText}
              // value={empresa}
              // onChange={(e) => setEmpresa(e.target.value)}
            />
          </div>
          <div className={inputDiv}>
            <label htmlFor="cantidad" className={label}>
              Cantidad
            </label>
            <input
              id="cantidad"
              type="text"
              placeholder="Cantidad en Metros cuadrados"
              className={inputText}
              // value={empresa}
              // onChange={(e) => setEmpresa(e.target.value)}
            />
          </div>
          <div className={inputDiv}>
            <label htmlFor="costo" className={label}>
              Costo
            </label>
            <input
              id="costo"
              type="text"
              placeholder="Costo por metro cuadrado"
              className={inputText}
              // value={empresa}
              // onChange={(e) => setEmpresa(e.target.value)}
            />
          </div>
          <div className={inputDiv}>
            <label htmlFor="moneda" className={label}>
              Moneda
            </label>
            <div className="flex space-x-3 items-center">
              <input
                id="moneda"
                type="checkbox"
                value="Pesos"
                className=""
                name=""
              />
              Pesos
              <input id="moneda" type="checkbox" value="Dolares" className="" />
              Dolares
            </div>
          </div>
        </div>
        {/* final formulario materiales */}
      </div>
    </div>
  );
};
