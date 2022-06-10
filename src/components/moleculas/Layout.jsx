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

        <nav className=" mt-5 sm:mt-10">
          <Link
            className={`${
              urlActual === "/listado"
                ? "bg-indigo-500 rounded-lg ml-2 text-white pl-3 duration-200 p-2"
                : "text-white duration-200 hover:bg-indigo-500 hover:rounded-lg hover:pl-2"
            } text-2xl block mt-2 sm:mt-4 `}
            to="/listado"
          >
            Listado
          </Link>

          <Link
            className={`${
              urlActual === "/presupuesto"
                ? "bg-indigo-500 rounded-lg ml-2 text-white pl-3 duration-200 p-2"
                : "text-white duration-200 hover:bg-indigo-500 hover:rounded-lg hover:pl-2"
            } text-2xl block mt-2 sm:mt-4 `}
            to="/presupuesto"
          >
            Presupuestos
          </Link>
          {/* <Link
            className={`${
              urlActual === "/presupuesto2"
                ? "bg-indigo-500 rounded-lg ml-2 text-white pl-3 duration-200 p-2"
                : "text-white duration-200 hover:bg-indigo-500 hover:rounded-lg hover:pl-2"
            } text-2xl block mt-2 `}
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
              urlActual === "/costoMateriales"
                ? "bg-indigo-500 rounded-lg ml-2 text-white pl-3 duration-200 p-2"
                : "text-white duration-200 hover:bg-indigo-500 hover:rounded-lg hover:pl-2"
            } text-2xl block mt-2 sm:mt-4`}
            to="/costoMateriales"
          >
            Costo Materiales
          </Link>
          <Link
            className={`${
              urlActual === "/cotizacionesVenta"
                ? "bg-indigo-500 rounded-lg ml-2 text-white pl-3 duration-200 p-2"
                : "text-white duration-200 hover:bg-indigo-500 hover:rounded-lg hover:pl-2"
            } text-2xl block mt-2 sm:mt-4`}
            to="/cotizacionesVenta"
          >
            Cotizaciones Venta
          </Link>
          <Link
            className={`${
              urlActual === "/formularioProveedores"
                ? "bg-indigo-500 rounded-lg ml-2 text-white pl-3 duration-200 p-2"
                : "text-white duration-200 hover:bg-indigo-500 hover:rounded-lg hover:pl-2"
            } text-2xl block mt-2 sm:mt-4`}
            to="/formularioProveedores"
          >
            Formulario Proveedores
          </Link>

          <Link
            className={`${
              urlActual === "/configuraciones"
                ? "bg-indigo-500 rounded-lg ml-2 text-white pl-3 duration-200 p-2"
                : "text-white duration-200 hover:bg-indigo-500 hover:rounded-lg hover:pl-2"
            } text-2xl block mt-2 sm:mt-4 `}
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
