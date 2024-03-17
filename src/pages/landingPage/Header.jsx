import { Button, IconLg } from "../../components/Buttons";
import ProfileImg from "../../components/ProfileImg";
import "../../animations/Header.css";
import { useContext } from "react";
import { useEffect } from "react";
import PorfilePopup from "../../components/PorfilePopup";
import GlobalContext from "../../context/GlobalContext";
import useGlobalContext from "../../hook/useGlobalContext";
import useAuth from "../../hook/useAuth";
import { currentPage, imageDir } from "../../constants";
import { useNavigate } from "react-router-dom";
const Header = ({ isForLanding = false, isTitleVisible = false }) => {
  const {
    isNavToggled,
    setIsNavToggled,
    darkMode,
    setDarkMode,
    setProfileClicked,
    profileClicked,
    currentDir,
    isLoading,
  } = useGlobalContext();
  const navigate = useNavigate();
  const { auth } = useAuth();
  useEffect(() => {
    document.body.style.overflow = isNavToggled ? "hidden" : "auto";
  }, [isNavToggled]);

  const toogleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  return (
    <header
      className={` ${isForLanding ? "box " : "px-4"} ${
        isLoading && isForLanding ? "hidden" : ""
      } fixed flex items-center justify-between  py-4 border-b dark:border-b-white-10 border-b-black-10  top-0  w-full z-50 bg-white shadow-sm dark:bg-black`}
    >
      <div
        className={`transition duration-300 z-40 fixed top-[88px] right-4 ${
          profileClicked
            ? "translate-x-0 opacity-1"
            : "translate-x-[20rem] opacity-0"
        }`}
      >
        <PorfilePopup />
      </div>
      <div
        className={`transition-opacity duration-500 text-black text-subtitle-3 dark:text-white ${
          isNavToggled ? "opacity-0" : "opacity-1"
        } `}
      >
        <a
          href="#Hero"
          className={` transition duration-150 ${
            isTitleVisible
              ? "absolute opacity-0 -translate-x-[10rem] "
              : "absolute "
          }`}
        >
          Radio <span className="text-primary">Rofia</span>
        </a>
        <div
          href="#Hero"
          className={` transition duration-150 ${
            !isTitleVisible ? " opacity-0 " : ""
          }`}
        >
          <i className={`${currentPage[currentDir]} me-2`}></i>
          {currentDir[0]?.toUpperCase() + currentDir?.slice(1)}
        </div>
      </div>
      {isForLanding && (
        <ul
          className={`flex transition-all duration-500  items-center justify-evenly flex-row max-md:flex-col max-md:gap-6  max-md:justify-center max-md:bg-white max-md:dark:bg-black  basis-1/2 max-md:h-full max-md:w-full left-1/2  max-md:-translate-x-1/2 max-md:-translate-y-1/2 max-md:fixed  ${
            isNavToggled ? "nav-hidden" : "-top-1/2"
          }`}
        >
          <li className="navLink max-md:text-subtitle-3">
            <a href="#Hero">Accueil</a>
          </li>
          <li className="navLink max-md:text-subtitle-3">
            <a href="#Historique">Historique</a>
          </li>
          <li className="navLink max-md:text-subtitle-3">
            <a href="#Radio">Radio</a>
          </li>
          <li className="navLink max-md:text-subtitle-3">
            <a href="#Application">Application</a>
          </li>
        </ul>
      )}
      <div
        className={`${
          auth.name ? "max-w-[128px]" : "max-w-[320px]"
        }  flex items-center justify-between  gap-6  max-md:fixed left-4 max-md:flex-row-reverse transition-all duration-500 top-4 z-30 ${
          isNavToggled ? "icon-hidden" : "max-md:-top-1/2"
        }`}
      >
        <div className={!isNavToggled ? "" : ""}>
          {/* <i className="bi bi-moon text-[28px]"></i> */}
          <IconLg
            color="bg-white icon-white dark:bg-black"
            icon={!darkMode ? "bi bi-moon" : "bi bi-sun"}
            iconSize="text-[28px]"
            handleClick={toogleDarkMode}
          />
        </div>
        <div className={"w-full"}>
          {auth?.name ? (
            <ProfileImg
              image={imageDir + auth.imageUrl}
              handleClick={() => setProfileClicked((prev) => !prev)}
            />
          ) : (
            <Button
              handleClick={() => navigate("/login")}
              text="Se connecter"
            />
          )}
        </div>
      </div>
      <div className="visible md:hidden z-30">
        <IconLg
          icon={`bi bi-${isNavToggled ? "x-lg" : "list"}`}
          color="dark:text-white bg-white dark:bg-black"
          handleClick={() => {
            setIsNavToggled((prev) => !prev);
            setProfileClicked(false);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
