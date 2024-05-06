import { Button, Icon, IconLg } from "../../components/Buttons";
import ProfileImg from "../../components/ProfileImg";
import "../../animations/Header.css";
import { useContext, useState } from "react";
import { useEffect } from "react";
import PorfilePopup from "../../components/PorfilePopup";
import GlobalContext from "../../context/GlobalContext";
import useGlobalContext from "../../hook/useGlobalContext";
import useAppContext from "../../hook/useAppContext";
import useAuth from "../../hook/useAuth";
import { currentPage, imageDir } from "../../constants";
import { useLocation, useNavigate } from "react-router-dom";
const Header = ({
  isForLanding = false,
  isTitleVisible = false,
  isHeroVisible = false,
}) => {
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
  const { setSearch, search } = useAppContext();
  const navigate = useNavigate();
  const { auth } = useAuth();
  useEffect(() => {
    document.body.style.overflow = isNavToggled ? "hidden" : "auto";
  }, [isNavToggled]);

  const toogleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const [toggledSearch, setToggledSearch] = useState(false);
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  return (
    <header
      className={` ${isForLanding ? "box " : "px-4"} ${
        isLoading && isForLanding ? "hidden" : ""
      } fixed flex items-center justify-between  py-4   top-0  w-full z-50 ${
        isHeroVisible
          ? "bg-primary"
          : "border-b dark:border-b-white-10 border-b-black-10 bg-white shadow-sm dark:bg-black"
      }`}
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
          Radio{" "}
          <span className={isHeroVisible ? "text-black" : "text-primary"}>
            Anonym
          </span>
        </a>
        <div
          href="#Hero"
          className={` transition duration-150 ${
            !isTitleVisible ? " opacity-0 translate-x-[5rem] " : "translate-x-0"
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
          <li
            className={`${
              isHeroVisible ? "text-black" : "navLink"
            } text-lead max-md:text-subtitle-3 font-FuturaMd`}
          >
            <a href="#Hero">Accueil</a>
          </li>
          <li
            className={`${
              isHeroVisible ? "text-black" : "navLink"
            } text-lead max-md:text-subtitle-3 font-FuturaMd`}
          >
            <a href="#Historique">Historique</a>
          </li>
          <li
            className={`${
              isHeroVisible ? "text-black" : "navLink"
            } text-lead max-md:text-subtitle-3 font-FuturaMd`}
          >
            <a href="#Radio">Radio</a>
          </li>
          <li
            className={`${
              isHeroVisible ? "text-black" : "navLink"
            } text-lead max-md:text-subtitle-3 font-FuturaMd`}
          >
            <a href="#Application">Application</a>
          </li>
        </ul>
      )}
      {!isForLanding && (
        <div className="visible sm:hidden">
          <IconLg
            handleClick={() => setToggledSearch((prev) => !prev)}
            icon="bi bi-search"
            color="bg-white text-black dark:bg-black dark:text-white"
          />
        </div>
      )}
      <div
        className={` flex items-center justify-between  gap-6  max-md:fixed left-4 max-md:flex-row-reverse transition-all duration-500 top-4 z-30  ${
          auth.name ? "max-w-[828px]" : "max-w-[320px]"
        } ${isNavToggled ? "icon-hidden" : "max-md:-top-1/2"} `}
      >
        {!isForLanding && /home|postlist/i.test(currentDir) && (
          <>
            <div className="max-sm:w-[140px]  w-full max-sm:hidden flex items-center justify-between px-4 py-2 rounded-lg bg-light dark:bg-black dark:border dark:border-white-10 gap-4 focus:border focus:border-p">
              <i className="bi bi-search text-black  dark:text-white"></i>
              <input
                type="search"
                className="flex-1 outline-0 border-0 bg-white-60 dark:bg-black text-black-60 dark:text-white-60 text-small-1"
                placeholder="Rechercher une publication"
                onChange={(e) => setSearch(e.target.value.trim())}
                value={search}
              />
            </div>
            <div
              className={`transition duration-300 ${
                toggledSearch
                  ? "-translate-x-1/2 opacity-1"
                  : " translate-x-[10rem] opacity-0"
              } fixed top-[84px] left-1/2    w-[95%] hidden max-sm:flex items-center justify-between px-4 py-2 rounded-lg bg-light dark:bg-black dark:border dark:border-white-10 gap-4 focus:border focus:border-p`}
            >
              <i className="bi bi-search text-black  dark:text-white"></i>
              <input
                type="search"
                className="flex-1 outline-0 border-0 bg-white-60 dark:bg-black text-black-60 dark:text-white-60 text-small-1"
                placeholder="Rechercher une publication"
                onChange={(e) => setSearch(e.target.value.trim())}
                value={search}
              />
            </div>
          </>
        )}
        <div className={!isNavToggled ? "" : ""}>
          {/* <i className="bi bi-moon text-[28px]"></i> */}
          <IconLg
            color={isHeroVisible ? "" : "bg-white icon-white dark:bg-black"}
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
              color={isHeroVisible ? "bg-white" : "bg-primary "}
            />
          )}
        </div>
      </div>
      <div className="visible md:hidden z-30">
        <IconLg
          icon={`bi bi-${isNavToggled ? "x-lg" : "list"}`}
          color={
            isHeroVisible
              ? "text-black"
              : "dark:text-white bg-white dark:bg-black"
          }
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
