import { useLocation, useNavigate } from "react-router-dom";
import Header from "../landingPage/Header";
import AppContext from "../../context/Appcontext";
import { useContext, useEffect } from "react";
import { NAVLINK } from "../../constants/constant";

const Feed = ({ children }) => {
  const navigate = useNavigate();
  const { isNavToggled, activeNav } = useContext(AppContext);
  return (
    <section>
      <Header />
      <div className={` flex mt-24`}>
        <div className="max-md:basis-0 basis-[284px] relative">
          <ul
            className={`${
              isNavToggled
                ? "max-md:opacity-1 max-md:h-screen"
                : "max-md:-translate-x-[20rem] max-md:opacity-0"
            } transition duration-300   bg-white dark:bg-black z-20 fixed left-0 px-4 top-0 pt-24 text-white flex flex-col gap-6 items-center justify-start w-[220px]  border-e border-e-black-10 dark:border-e-white-10 h-screen`}
          >
            {NAVLINK.map((nav) => (
              <NavLink
                key={nav.text}
                handleClick={() => navigate(nav.location)}
                text={nav.text}
                icon={nav.icon}
                active={activeNav === nav.location.split('/')[2]}
              />
            ))}
           
          </ul>
        </div>
        <div
          className={`${
            isNavToggled ? "scale-[0.98]" : ""
          } transition-transform duration-300 flex items-center justify-center w-full`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Feed;

const NavLink = ({ active, text, icon = "", handleClick }) => {
  return (
    <li
      className={` cursor-pointer w-full  flex gap-2 text-base font-FuturaMd items-center justify-start px-6 py-3 text-black dark:text-white hover:bg-black-10 dark:hover:bg-white-10 rounded-xl ${
        active ? "bg-primary" : ""
      }`}
      onClick={handleClick}
    >
      <i className={`${icon} text-icon`}></i>
      <p>{text}</p>
    </li>
  );
};
