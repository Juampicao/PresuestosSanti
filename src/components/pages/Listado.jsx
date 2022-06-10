import React, { useState, useEffect } from "react";

import Header from "../moleculas/Header";
import Proveedor from "../moleculas/Proveedor";

const Listado = () => {
  const [proveedores, setProveedores] = useState([]);

  // Get the information from json-server
  useEffect(() => {
    const obtenerProveedoresAPI = async () => {
      try {
        const url = `http://localhost:4000/proveedores`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
        setProveedores(resultado);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerProveedoresAPI();
  }, []);

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
          {proveedores.map((proveedor) => (
            <Proveedor />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listado;
