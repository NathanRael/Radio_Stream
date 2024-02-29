import { IconLg } from "../../components/Buttons";
import ProfileImg from "../../components/ProfileImg";
import soundWaveIcon from "../../assets/images/soundWave.svg";
import "../../animations/Header.css";
import { useContext, useState } from "react";
import { useEffect } from "react";
import AppContext from "../../context/Appcontext";
const Header = () => {
  const {isNavToggled,setIsNavToggled,darkMode,setDarkMode} = useContext(AppContext);
  useEffect(() =>{
     document.body.style.overflow = isNavToggled ? 'hidden' : 'auto';
  }, [isNavToggled])
  return (
    <header className=" flex items-center justify-between box py-4 border-b dark:border-b-white-10 border-b-black-10 fixed top-0  w-full z-50 bg-white shadow-sm dark:bg-black">
      <div className="text-black text-subtitle-3 dark:text-white">
        <a href="#Hero">
          Radio <span className="text-primary">Rofia</span>
        </a>
      </div>
      <ul className={`flex transition-all duration-500  items-center justify-evenly flex-row max-md:flex-col max-md:gap-6  max-md:justify-center max-md:bg-white max-md:dark:bg-black  basis-1/2 max-md:h-full max-md:w-full left-1/2  max-md:-translate-x-1/2 max-md:-translate-y-1/2 max-md:fixed  ${ isNavToggled ? 'nav-hidden' : '-top-1/2'}`}>
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
      <div className={` flex items-center justify-between max-w-[128px] gap-6  max-md:fixed left-4 max-md:flex-row-reverse transition-all duration-500 top-4 z-30 ${isNavToggled ? 'icon-hidden' : 'max-md:-top-1/2'}`}>
        <div className={!isNavToggled ? '' : ''}>
          {/* <i className="bi bi-moon text-[28px]"></i> */}
          <IconLg color="bg-white dark:bg-black" icon={!darkMode ? "bi bi-moon" : "bi bi-sun"} iconSize="text-[28px]" handleClick={() => setDarkMode((prev) => !prev)}/>
        </div>
        <div className={!isNavToggled ? '' : ''}>
          <ProfileImg />
        </div>
      </div>
      <div className="visible md:hidden z-30">
        <IconLg icon={`bi bi-${isNavToggled ? 'x-lg' : 'list'}`} color="bg-white dark:bg-black" handleClick={() => setIsNavToggled((prev) => !prev)} />
      </div>
    </header>
  );
};

export default Header;
