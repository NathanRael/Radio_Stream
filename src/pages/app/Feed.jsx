import { useNavigate } from "react-router-dom";
import Header from "../landingPage/Header";

const Feed = ({ children }) => {
  const navigate = useNavigate();

  return (
    <section>
      <Header />
      <div className="flex mt-24">
        <div className="basis-[284px] relative">
          <ul className="fixed left-0 px-4 top-0 pt-24 text-white flex flex-col gap-6 items-center justify-start w-[220px]  border-e border-e-black-10 dark:border-e-white-10 h-screen">
            <NavLink
              handleClick={() => navigate("/user/home")}
              text="Accueil"
              // active={true}
              icon="bi bi-house"
            />
            <NavLink
              handleClick={() => navigate("/user/radio")}
              text="Radio"
              icon="bi bi-boombox"
            />
            <NavLink
              handleClick={() => navigate("/user/request")}
              text="Requêtes"
              icon="bi bi-list-task"
            />
            <NavLink
              handleClick={() => navigate("/user/savedPost")}
              text="Sauvegardes"
              icon="bi bi-bookmark"
            />
            <NavLink
              handleClick={() => navigate("/user/requestList")}
              text="Liste requêtes"
              icon="bi bi-lock"
            />
            <NavLink
              handleClick={() => navigate("/user/postList")}
              text="Publications"
              icon="bi bi-lock"
            />

          </ul>
        </div>
        <div className=" flex items-center justify-center w-full">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Feed;

const NavLink = ({ active = false, text, icon = "", handleClick }) => {
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
