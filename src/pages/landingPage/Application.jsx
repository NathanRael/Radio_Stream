import { useState } from "react";
import { ButtonLg } from "../../components/Buttons";
import ImgT from "../../components/ImgT";
import '../../animations/Application.css';
const Application = () => {
  const [active, setActive] = useState({
    decouvrer: true,
    utiliser: false,
    experimenter: false,
  });


  return (
    <section className=" box mt-[172px] space-y-10 overflow-hidden" id="Application">
      <h1 className="text-title-2 text-black text-center max-md:text-subtitle-2 dark:text-white">
        Pour plus de <span className="text-primary">fun et de partage</span>
      </h1>
      <div className=" relative flex  flex-col items-center justify-center">
        <ul className="text-subtitle-3 max-md:text-lead text-black-40 text-center flex items-center justify-center gap-4 *:transition-colors *:duration-200">
          <li
            className={`${active.decouvrer ? 'text-black dark:text-white' : 'text-black-40 dark:text-white-40'} cursor-pointer `}
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
            className={`${active.utiliser ? 'text-black dark:text-white' : 'text-black-40 dark:text-white-40'} cursor-pointer`}
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
            className={`${active.experimenter ? 'text-black dark:text-white' : 'text-black-40 dark:text-white-40'} cursor-pointer`}
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
        <Image color="bg-black-10 dark:bg-white-10" active={active.decouvrer} text="Découvrer les différentes fonctionalités de l’application web" />
        <Image color="bg-light dark:bg-white-40" active={active.utiliser} text="Utiliser le dans votre quotidient" />
        <Image color="bg-primary" active={active.experimenter} text="Experiemnter l'application" />
        <h3 className="mt-[348px] text-subtitle-3 text-black max-md:text-lead dark:text-white">
          <span className="text-primary">L'application web</span> Radio Rofia
        </h3>
      </div>
      <div className="text-center">
        <ButtonLg text="Acceder à l'application web" color="bg-black-10 dark:bg-white" />
      </div>
    </section>
  );
};

export default Application;

const Image = ({ text, active, color }) => {
  return (
    <div className={`${color} absolute top-14 transition duration-300  rounded-lg w-full md:w-[529px] h-[312px]   p-6 ${active ? 'card-in' : 'card-out'} `} >
      <p className="text-center text-black-60 dark:text-white">{text}</p>
    </div>
  );
};
