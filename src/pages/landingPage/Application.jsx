import { useState } from "react";
import { ButtonLg } from "../../components/Buttons";
import ImgT from "../../components/ImgT";
import "../../animations/Application.css";
import { useNavigate } from "react-router-dom";
import useIntersection from "../../hook/UseIntersection";
const Application = () => {
  const [active, setActive] = useState({
    decouvrer: true,
    utiliser: false,
    experimenter: false,
  });
  const [appliRef, isAppliVisible] = useIntersection({
    root: null,
    rootMargin: "250px",
    threshold: 1.0,
  });
  const [appliTitleRef, isAppliTitleVisible] = useIntersection({
    root: null,
    rootMargin: "750px",
    threshold: 1.0,
  });
  const navigate = useNavigate();

  return (
    <section
      ref={appliRef}
      className={`relative box mt-[172px] space-y-10 overflow-hidden   w-full `}
      id="Application"
    >
      <div ref={appliTitleRef} className="w-full h-[140vh] ">
        <h1
          className={`transition duration-200  ${isAppliTitleVisible ? "fixed" : ""} -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  text-title-2 text-black text-center max-md:text-subtitle-2 dark:text-white ease-out`}

        >
         <span className={` ${isAppliTitleVisible ? " opacity-1 translate-y-0 " : "opacity-0 "} translate-y-[5rem] transition duration-200 delay-300 ease-in`}> Pour plus de</span> <span className={` ${isAppliTitleVisible ? " opacity-1 " : "opacity-0"} transition duration-200 delay-700 text-primary `}>fun et de partage</span>
        </h1>
      </div>
      {/* <h1
          className={`transition duration-250 delay-100 text-title-2 text-black text-center max-md:text-subtitle-2 dark:text-white ease-out ${
            isAppliVisible
              ? "opacity-1 translate-x-0"
              : "opacity-0 translate-x-[-5rem]"
          }`}
        >
          Pour plus de <span className="text-primary">fun et de partage</span>
        </h1> */}
      <div
        className={`relative flex  flex-col items-center justify-center transition ease-out  duration-200 delay-150 ${
          !isAppliTitleVisible
            ? "opacity-1 translate-x-0"
            : "opacity-0 translate-x-[5rem]"
        }`}
      >
        <ul className="p-2 dark:border shadow-md dark:shadow-none dark:border-white-10 bg-white  dark:bg-black rounded-full text-lead max-md:text-lead text-black-40 text-center flex items-center justify-center gap-2 *:transition-colors *:duration-200 ">
          <li
            className={`py-2 px-4 rounded-full  ${
              active.decouvrer
                ? "bg-primary text-white"
                : "text-black dark:text-white"
            } cursor-pointer`}
            onClick={() =>
              setActive(() => ({
                decouvrer: true,
                utiliser: false,
                experimenter: false,
              }))
            }
          >
            Découvrer
          </li>
          {/* <li className="text-">|</li> */}
          <li
            className={`py-2 px-4 rounded-full  ${
              active.utiliser
                ? "bg-primary text-white"
                : "text-black dark:text-white"
            } cursor-pointer`}
            onClick={() =>
              setActive((prev) => ({
                decouvrer: false,
                utiliser: true,
                experimenter: false,
              }))
            }
          >
            Utiliser
          </li>
          {/* <li className="text-">|</li> */}
          <li
            className={`py-2 px-4 rounded-full  ${
              active.experimenter
                ? "bg-primary text-white"
                : "text-black dark:text-white"
            } cursor-pointer`}
            onClick={() =>
              setActive((prev) => ({
                decouvrer: false,
                utiliser: false,
                experimenter: true,
              }))
            }
          >
            Expérimenter
          </li>
        </ul>
        <Image
          color="bg-black-10 dark:bg-white-10"
          active={active.decouvrer}
          text="Découvrer les différentes fonctionalités de l’application web"
        />
        <Image
          color="bg-light dark:bg-white-40"
          active={active.utiliser}
          text="Utiliser le dans votre quotidient"
        />
        <Image
          color="bg-primary"
          active={active.experimenter}
          text="Experiemnter l'application"
        />
        <h3 className="mt-[348px] text-subtitle-3 text-black max-md:text-lead dark:text-white">
          <span className="text-primary">L'application web</span> Radio Rofia
        </h3>
      </div>
      <div className="text-center">
        <ButtonLg
          text="Acceder à l'application web"
          color="bg-primary"
          handleClick={() => navigate("/login")}
        />
      </div>
    </section>
  );
};

export default Application;

const Image = ({ text, active, color }) => {
  return (
    <div
      className={`${color} absolute top-20 transition duration-300  rounded-lg w-full md:w-[529px] h-[312px]   p-6 ${
        active ? "card-in" : "card-out"
      } `}
    >
      <p className="text-center text-black-60 dark:text-white">{text}</p>
    </div>
  );
};
