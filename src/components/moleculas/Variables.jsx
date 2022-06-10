import React from "react";

const Variables = () => {
  const inputDiv = "space-y-1 flex flex-col  ";
  const inputText =
    "pl-2 py-1 capitalize border border-slate-300 w-[75px] ml-3 text-center ";
  const inputSelect =
    "pl-3 py-1  min-w-[70px] max-w-[120px] capitalize border border-slate-300 ml-3 ";
  const label = "pl-1 uppercase font-black";
  return (
    <div>
      {/* <h3 className="text-2xl font-bold my-2"> Variables </h3> */}

      <div className="flex justify-center space-x-10 mt-10">
        <div className="space-y-1">
          <label htmlFor="cotizacion" className={label}>
            $ Cotizacion Dolar
          </label>
          <input
            id="cotizacion"
            type="text"
            placeholder="$"
            className={inputText}
            // value={empresa}
            // onChange={(e) => setEmpresa(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="coeficienteVenta" className={label}>
            % Coeficiente Venta
          </label>
          <select
            id="coeficienteVenta"
            placeholder="$"
            className={inputSelect}
            // value={empresa}
            // onChange={(e) => setEmpresa(e.target.value)}
          >
            <option> 1 </option>
            <option> 1.2 </option>
            <option> 1.5 </option>
            <option> 2 </option>
            <option> 3</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Variables;
