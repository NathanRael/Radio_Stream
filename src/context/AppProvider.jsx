import { createContext, useEffect, useState } from "react";
import { POST } from "../constants/index.js";
const AppContext = createContext({});

export const AppProvider = ({ children }) => {



  return (
    <AppContext.Provider value={{  }}>{children}</AppContext.Provider>
  );
};

export default AppContext;
