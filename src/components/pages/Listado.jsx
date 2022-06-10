import React, { useState, useEffect } from "react";

import Header from "../moleculas/Header";
import Proveedor from "../moleculas/Proveedor";

const Listado = () => {
  const [proveedores, setProveedores] = useState([]);

  // Get the information from json-server
  // useEffect(() => {
  //   const obtenerProveedoresAPI = async () => {
  //     try {
  //       const url = `http://localhost:4000/proveedores`;
  //       const respuesta = await fetch(url);
  //       const resultado = await respuesta.json();
  //       console.log(resultado);
  //       setProveedores(resultado);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   obtenerProveedoresAPI();
  // }, []);

  // const { id, empresa, domicilio } = proveedores;

  return (
    <div>
      <Header title="Listado de Proveedores" />

      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Empresa</th>
            <th className="p-2">Direccion</th>
            <th className="p-2">Correo</th>
            <th className="p-2">Observaciones</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b hover:bg-gray-50">
            <td className="p-3">Marmo S.A</td>
            <td className="p-3">
              <p>
                <span className="text-gray-800 uppercase ">Cabildo 2026</span>
              </p>
              <p>
                <span className="text-gray-800 uppercase font-black">
                  Tel:{" "}
                </span>{" "}
                15555555
              </p>
            </td>
            <td className="p-3"> marmol@marmol.com </td>
            <td className="p-3">
              <button
                type="button"
                className="bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs"
                onClick={() => navigate(`/clientes/${id}`)}
              >
                Ver
              </button>

              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
                onClick={() => navigate(`/clientes/editar/${id}`)}
              >
                Editar
              </button>

              <button
                type="button"
                className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
                // onClick={() => handleEliminar(id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Listado;
