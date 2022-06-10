import { useState } from "react";
import "./App.css";

import Inicio from "./components/pages/Inicio";
import Layout from "./components/moleculas/Layout";
import Listado from "./components/pages/Listado";
import Presupuesto from "./components/pages/Presupuesto";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Presupuesto2 from "./components/pages/Presupuesto2";
import Presupuesto3 from "./components/pages/Prespuesto3";
import { CostoMateriales } from "./components/moleculas/CostoMateriales";
import CotizacionesVenta from "./components/moleculas/CotizacionesVenta";
import Configuraciones from "./components/pages/Configuraciones";
import FormularioProveedores from "./components/pages/FormularioProveedores";
// import { PresupuestoProvider } from "./contexts/PresupuestoProvider";

function App() {
  return (
    <div className="App">
      {/* <PresupuestoProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="inicio" index element={<Inicio />} />
            <Route path="listado" element={<Listado />} />
            <Route path="presupuesto" element={<Presupuesto />} />
            <Route path="presupuesto2" element={<Presupuesto2 />} />
            <Route path="presupuesto3" element={<Presupuesto3 />} />
            <Route path="costoMateriales" element={<CostoMateriales />} />
            <Route path="cotizacionesVenta" element={<CotizacionesVenta />} />
            <Route
              path="formularioproveedores"
              element={<FormularioProveedores />}
            />

            <Route path="configuraciones" element={<Configuraciones />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </PresupuestoProvider> */}
    </div>
  );
}

export default App;
