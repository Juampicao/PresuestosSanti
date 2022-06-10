import { Outlet, Link, useLocation } from "react-router-dom";
import ImagenConfiguracion from "../atoms/ImagenConfiguracion";

import ImagenTravertino from "../../img/icono-travertinoBlanco.png";

const Layout = () => {
  const location = useLocation();
  const urlActual = location.pathname;

  return (
    <div className="sm:flex  ">
      <div className="sm:w-1/4 min-w-[250px] bg-blue-900 px-5 py-10">
        <Link to="/presupuesto">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl uppercase font-black text-center text-white">
              Presupuestos Travertino
            </h2>
            <img src={ImagenTravertino} alt="" className="h-10 mt-1" />
          </div>
        </Link>

        <nav className="mt-10">
          <Link
            className={`${
              urlActual === "/clientes" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:text-blue-300`}
            to="/listado"
          >
            Listado
          </Link>

          <Link
            className={`${
              urlActual === "/clientes/nuevo" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:text-blue-300`}
            to="/presupuesto"
          >
            Presupuestos
          </Link>
          {/* <Link
            className={`${
              urlActual === "/clientes/nuevo" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:text-blue-300`}
            to="/presupuesto2"
          >
            Presupuestos2
          </Link>
          <Link
            className={`${
              urlActual === "/clientes/nuevo" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:text-blue-300`}
            to="/presupuesto3"
          >
            Presupuestos3
          </Link> */}
          <Link
            className={`${
              urlActual === "/clientes/nuevo" ? "text-blue-300" : "text-white"
            } text-2xl block mt-4 hover:text-blue-300`}
            to="/costoMateriales"
          >
            Costo Materiales
          </Link>
          <Link
            className={`${
              urlActual === "/clientes/nuevo" ? "text-blue-300" : "text-white"
            } text-2xl block mt-4 hover:text-blue-300`}
            to="/cotizacionesVenta"
          >
            Cotizaciones Venta
          </Link>
          <Link
            className={`${
              urlActual === "/clientes/nuevo" ? "text-blue-300" : "text-white"
            } text-2xl block mt-4 hover:text-blue-300`}
            to="/formularioProveedores"
          >
            Formulario Proveedores
          </Link>

          <Link
            className={`${
              urlActual === "/clientes/nuevo" ? "text-blue-300" : "text-white"
            } text-2xl block mt-4 hover:text-blue-300`}
            to="/configuraciones"
          >
            Configuraciones
          </Link>
          <div className=" ">
            <Link to="/configuraciones">
              <ImagenConfiguracion />
            </Link>
          </div>
        </nav>
      </div>

      <div className="p-3 xs:p-5 sm:w-3/4 sm:p-10 sm:h-screen sm:overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
