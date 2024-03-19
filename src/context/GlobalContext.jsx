import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useIntersection from "../hook/UseIntersection";
import useWindowSize from "../hook/useWindowSize";

const GlobalContext = createContext({});

export const GloBalProvider = ({ children }) => {
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

  const [width] = useWindowSize();
  //animation
  const [historyRef, isHistoryRefVisible] = useIntersection({
    root: null,
    rootMargin: width <= 420 ? "120px" : "30px",
    threshold: 1.0,
  });
  const [radioRef, isRadioVisible] = useIntersection({
    root: null,
    rootMargin: width <= 720 ? "260px" : "500px",
    threshold: 1.0,
  });
  const [appliTitleRef, isAppliTitleVisible] = useIntersection({
    root: null,
    rootMargin: "512px",
    threshold: 1.0,
  });

  const Load = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
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
    setProfileClicked(false);
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
    <GlobalContext.Provider
      value={{
        historyRef,
        isHistoryRefVisible,
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
        width,
        radioRef,
        isRadioVisible,
        appliTitleRef,
        isAppliTitleVisible,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
