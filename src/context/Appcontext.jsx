import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const location = useLocation();
  const [profileClicked, setProfileClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [isNavToggled, setIsNavToggled] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const splitedPath = location.pathname.split("/");
  const currentDir = splitedPath[splitedPath.length - 1];
  const [inView, setInView] = useState({});

  const Load = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
      // document.body.classList.add("dark:bg-black");
    } else {
      document.documentElement.classList.remove("dark");
      // document.body.classList.remove("dark:bg-black");
    }
  }, [darkMode]);

  useEffect(() => {
    setTimeout(Load, 2000);
    return () => clearTimeout(Load);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";
  }, [isLoading]);

  useEffect(() => {
    setIsNavToggled(false);
    setActiveNav(currentDir);

    setInView({
      home: currentDir === "home" ? true : false,
      radio: currentDir === "radio" ? true : false,
      request: currentDir === "request" ? true : false,
      savedPost: currentDir === "savedPost" ? true : false,
      requestList: currentDir === "requestList" ? true : false,
      postList: currentDir === "postList" ? true : false,
      profile: currentDir === "profile" ? true : false,
      signup: currentDir === "signup" ? true : false,
      signup2: currentDir === "signup-2" ? true : false,
      login: currentDir === "login" ? true : false,
      landingPage: currentDir === "/" ? true : false,
      editPost: currentDir === "edit" ? true : false,
      editRequest: currentDir === "edit" ? true : false,
    });

    // console.log(currentDir);
  }, [location.pathname]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        isNavToggled,
        setIsNavToggled,
        darkMode,
        setDarkMode,
        profileClicked,
        setProfileClicked,
        activeNav,
        inView,
        currentDir,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
