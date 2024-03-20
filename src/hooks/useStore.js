import { useContext } from "react";
import { storeContext } from "../contexts/StoreContextProvider";

export const useStore = () => {
  return useContext(storeContext);
};