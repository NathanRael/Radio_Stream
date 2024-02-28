import { createContext, useState, useEffect } from "react";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const Load = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(Load, 2000);

    return () => clearTimeout(Load);
  }, []);
  return (
    <AppContext.Provider value={{ isLoading }}>{children}</AppContext.Provider>
  );
};

export default AppContext;
