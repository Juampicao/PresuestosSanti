import { useState } from "react";
import "./App.css";

import Inicio from "./components/pages/Inicio";
import Layout from "./components/moleculas/Layout";
import Listado from "./components/pages/Listado";
import Presupuesto from "./components/pages/Presupuesto";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Presupuesto2 from "./components/pages/Presupuesto2";
import Presupuesto3 from "./components/pages/Prespuesto3";
import { PresupuestoCosto } from "./components/moleculas/PresupuestoCosto";
import PresupuestoVenta from "./components/moleculas/PresupuestoVenta";
import Configuraciones from "./components/pages/Configuraciones";
import FormularioProveedores from "./components/pages/FormularioProveedores";

function App() {
  const [cargando, setCargando] = useState(true);
  const [proveedor, setProveedor] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="inicio"
              index
              element={<Inicio cargando={cargando} setCargando={setCargando} />}
            />
            <Route path="listado" element={<Listado />} />
            <Route path="presupuesto" element={<Presupuesto />} />
            <Route path="presupuesto2" element={<Presupuesto2 />} />
            <Route path="presupuesto3" element={<Presupuesto3 />} />
            <Route path="presupuestocosto" element={<PresupuestoCosto />} />
            <Route path="presupuestoventa" element={<PresupuestoVenta />} />
            <Route
              path="formularioproveedores"
              element={
                <FormularioProveedores
                  proveedor={proveedor}
                  setProveedor={setProveedor}
                />
              }
            />

            <Route path="configuraciones" element={<Configuraciones />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
