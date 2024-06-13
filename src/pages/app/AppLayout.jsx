import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../landingPage/Header";
import { useContext, useEffect, useState } from "react";
import { NAVLINK } from "../../constants/index";
import { IconLg } from "../../components/Buttons";
import useAuth from "../../hook/useAuth";
import { AppProvider } from "../../context/AppProvider";
import MessagePopup from "../../components/MessagePopup";
import { initBody } from "../../functions";
import Notification from "../../components/Notification";
import useGlobalContext from "../../hook/useGlobalContext";
import useAppContext from "../../hook/useAppContext";

const AppLayout = () => {
  const { successMsg, errMsg, auth, getCurrentSession, loading } = useAuth();
  const navigate = useNavigate();
  const { isNavToggled, activeNav } = useGlobalContext();
  const { reqCount } = useAppContext();
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const location = useLocation();

  const handleVisible = (e) => {
    setIsButtonVisible(window.scrollY >= 120 ? true : false);
  };

  useEffect(() => {
    getCurrentSession();
    initBody();
    window.addEventListener("scroll", handleVisible);
    return () => {
      window.removeEventListener("scroll", handleVisible);
    };
  }, []);

  return (
    <>
      {!auth?.name && !loading ? (
        <Navigate to="/login" />
      ) : (
        <section>
          <Header isTitleVisible={window.scrollY >= 120} />
          <MessagePopup
            message={successMsg}
            className={` ${
              successMsg
                ? "translate-x-0 opacity-1"
                : "translate-x-[10rem] opacity-0"
            }  fixed top-10 right-10 transition delay-30 z-50`}
          />
          <MessagePopup
            error
            message={errMsg}
            className={`${
              errMsg
                ? "translate-x-0 opacity-1"
                : "translate-x-[10rem] opacity-0"
            } fixed top-10 right-10 transition delay-30 z-50`}
          />
          <div
            className={`transition duration-300 ${
              isButtonVisible ? "" : "opacity-0"
            } fixed right-10 bottom-10 z-50`}
          >
            <IconLg
              icon="bi bi-arrow-up"
              color="btn-success"
              handleClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            />
          </div>
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
                    active={activeNav === nav.location.split("/")[2]}
                    notification={nav.text === "Liste requêtes"}
                    notifValue={reqCount || "..."}
                    secured={nav.secured}
                    isAdmin={auth.roles === "admin"}
                  />
                ))}
              </ul>
            </div>
            <div
              className={`${
                isNavToggled ? "scale-[0.98]" : ""
              } transition-transform duration-300 flex items-center justify-center w-full`}
            >
              <Outlet />
            </div>
          </div>
          {/* <Footer/> */}
        </section>
      )}
    </>
  );
};

export default AppLayout;

const NavLink = ({
  active,
  text,
  icon = "",
  handleClick,
  notification,
  notifValue,
  secured,
  isAdmin,
}) => {
  if (isAdmin) {
    return (
      <li
        className={`relative cursor-pointer w-full  flex gap-2 text-base font-FuturaMd items-center justify-start px-6 py-3 text-black dark:text-white hover:bg-black-10 dark:hover:bg-white-10 rounded-xl ${
          active ? "bg-primary" : ""
        }`}
        onClick={handleClick}
      >
        {notification && <Notification value={notifValue} />}
        <i className={`${icon} text-[16px]`}></i>
        <p>{text}</p>
      </li>
    );
  } else if (!secured) {
    return (
      <li
        className={`relative cursor-pointer w-full  flex gap-2 text-base font-FuturaMd items-center justify-start px-6 py-3 text-black dark:text-white hover:bg-black-10 dark:hover:bg-white-10 rounded-xl ${
          active ? "bg-primary" : ""
        }`}
        onClick={handleClick}
      >
        {notification && <Notification value={notifValue} />}
        <i className={`${icon} text-[16px]`}></i>
        <p>{text}</p>
      </li>
    );
  }
};
