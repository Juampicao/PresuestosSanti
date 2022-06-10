import React from "react";

const Observaciones = () => {
  // Styles

  const inputDiv = "space-y-1 flex flex-col mt-3  ";
  const inputText = "pl-2 py-1  w-full capitalize border border-slate-300 ";
  const inputSelect =
    "ml-2 mr-2 pl-2 py-1  min-w-[20px] max-w-[120px] capitalize border border-slate-300 ";
  const label = "pl-1 font-black";

  return (
    <div>
      <h2
        className="text-xl font-sans font-bold text-gray-800  mt-6 mb-3
"
      >
        Observaciones
      </h2>
      <div className="">
        <label htmlFor="validezDias" className={label}>
          Validez del Presupuesto
        </label>
        <select
          id="validezDias"
          className={inputSelect}
          // value={empresa}
          // onChange={(e) => setEmpresa(e.target.value)}
        >
          <option> 5 </option>
          <option> 7 </option>
          <option> 10 </option>
          <option> 15 </option>
          <option> 30 </option>
        </select>
        <label htmlFor="" className={label}>
          Dias
        </label>
      </div>
      <div className={inputDiv}>
        <label htmlFor="observacion" className={label}>
          Comentario
        </label>

        <textarea
          name=""
          id="observacion"
          cols="15"
          rows="5"
          className="border border-slate-300 pl-2 pt-2 capitalize"
          placeholder="Escribe aqui una Comentario..."
        ></textarea>
      </div>
    </div>
  );
};

export default Observaciones;
