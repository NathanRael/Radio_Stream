import { createContext, useState, useEffect } from "react";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [profileClicked, setProfileClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode,setDarkMode] = useState(false);
  useEffect(() => {
    setDarkMode(localStorage.darkMode ||false);
  }, []);
  const Load = () => {
    setIsLoading(false);
  };
  const [isNavToggled, setIsNavToggled] = useState(false);
  useEffect(() => {
      if (darkMode){
        document.documentElement.classList.add('dark');
        document.body.classList.add("dark:bg-black");
      }else{
        document.documentElement.classList.remove('dark');
        document.body.classList.remove("dark:bg-black");
      }
  },[darkMode])

  useEffect(() => { 
    setTimeout(Load, 2000);

    return () => clearTimeout(Load);
  }, []);
  return (
    <AppContext.Provider value={{ isLoading, isNavToggled,setIsNavToggled,darkMode,setDarkMode, profileClicked, setProfileClicked }}>{children}</AppContext.Provider>
  );
};

export default AppContext;
