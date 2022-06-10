// // import { createContext, useState } from "react";

// // const PresupuestosContext = createContext();

// // const ContextProvider = ({ children }) => {
// //   const [proveedor, setProveedor] = useState("Roman");
// //   const [cargando, setCargando] = useState(true);

// //   return (
// //     <PresupuestosContext.Provider
// //       value={{
// //         proveedor,
// //         setProveedor,

// //         cargando,
// //         setCargando,
// //       }}
// //     >
// //       {children}
// //     </PresupuestosContext.Provider>
// //   );
// // };

// // export { ContextProvider };

// // export default PresupuestosContext;

// import React from "react";
// import { createContext, useState } from "react";

// const PresupuestosContext = createContext();

// const PresupuestoProvider = ({ children }) => {
//   const [proveedor, setProveedor] = useState("Roman");
//   const [cargando, setCargando] = useState(true);
//   return (
//     <PresupuestoProvider
//       value={{
//         proveedor,
//         setProveedor,

//         cargando,
//         setCargando,
//       }}
//     >
//       {children}
//     </PresupuestoProvider>
//   );
// };

// export { PresupuestoProvider };

// export default PresupuestosContext;
