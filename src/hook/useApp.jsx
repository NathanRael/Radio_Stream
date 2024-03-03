import { useContext } from "react";
import AppContext from "../context/Appcontext";

const useApp = () => {
  return useContext(AppContext);
};

export default useApp;
