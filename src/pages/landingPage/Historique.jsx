import { useEffect, useState } from "react";
import { ButtonLg } from "../../components/Buttons";
import ImgT from "../../components/ImgT";
import { ABOUT_TEXT } from "../../constants/index";
import "../../animations/Historique.css";
import useIntersection from "../../hook/UseIntersection";
import useWindowSize from "../../hook/useWindowSize";
import useGlobalContext from "../../hook/useGlobalContext";
const Historique = () => {
  const [showMore, setShowMore] = useState(false);
  const { historyRef, isHistoryRefVisible, width } = useGlobalContext();
  const maxTextLen = 420;

  return (
    <section
      className={`space-y-10 mt-[420px] box transition duration-300 ease-out  flex items-center justify-between max-lg:flex-col gap-6 overflow-x-hidden`}
      id="Historique"
      ref={historyRef}
    >
      <div
        className={` before-line hover:before:scale-x-[3] overflow-hidden cursor-cell hover:*:-translate-y-2 relative  dark:border-white transition duration-300 ease-out xl:delay-150 text-black text-title-2 max-md:text-subtitle-2 max-xl:text-center dark:text-white
      ${
        isHistoryRefVisible
          ? "translate-x-0 opacity-1"
          : "opacity-0 -translate-x-[20rem]"
      }`}
      >
        <p className={`transition duration-200 title`}>Qui somme nous ?</p>
      </div>
      <div
        className={`flex items-center justify-between max-xl:flex-col max-xl:gap-y-10 transition duration-300 ease-out delay-300 ${
          isHistoryRefVisible
            ? "translate-x-0 opacity-1"
            : "opacity-0 translate-x-[20rem]"
        }`}
      >
        <div className="bg-white shadow-lg  dark:shadow-none text-black rounded-3xl p-10 flex gap-6 flex-col items-left max-w-[648px] dark:border dark:border-white-10 dark:bg-black card-anim dark:text-white-60">
          <p className="text-base font-FuturaThin " style={{lineHeight : "32px"}}>
            {showMore ? ABOUT_TEXT : ABOUT_TEXT.slice(0, maxTextLen) + " ..."}
          </p>
          <div className="">
            <ButtonLg
              text={`${showMore ? "Reduire" : "Afficher plus"}`}
              color="text-black bg-primary dark:bg-white"
              handleClick={() => setShowMore((prev) => !prev)}
            />
          </div>
        </div>
        {/* <div className="visible max-lg:hidden">
          <ImgT className="rounded-lg h-full" />
        </div> */}
      </div>
    </section>
  );
};

export default Historique;
