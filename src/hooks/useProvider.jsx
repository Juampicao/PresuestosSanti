import { useContext } from "react";
import { PresupuestoProvider } from "../contexts/PresupuestoProvider";

const useProvider = () => {
  return useContext(PresupuestoProvider);
};

export default useProvider;
