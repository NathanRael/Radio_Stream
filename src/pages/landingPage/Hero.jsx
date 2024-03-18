import soundWave from "../../assets/images/soundWave.svg";
import { ButtonLg, ButtonIconLg } from "../../components/Buttons";
import "../../animations/Hero.css";
import { useNavigate } from "react-router-dom";
import { HERO_TEXT } from "../../constants/index";
import { useEffect, useRef, useState } from "react";
import TypeWriter from "../../components/TypeWriter";
import UseIntersection from "../../hook/UseIntersection";
import SvgIcon from "../../components/SvgIcon";
import RadioBg from "../../assets/images/radio-1.jpg";
import disk from "../../assets/images/disk.svg";
import radio from "../../assets/images/radio2.svg";
import ImgIcon from "../../components/ImgIcon";
import useGlobalContext from "../../hook/useGlobalContext";

const Hero = ({ isHeroVisible = false }) => {
  const navigate = useNavigate();
  const { isHistoryRefVisible, width } = useGlobalContext();

  return (
    <section
      className={`overflow-hidden flex flex-col gap-[80px] max-md:gap-10 items-center justify-center mt-[120px]  max-w-[866px] mx-auto max-md:px-4 h-[80vh]  `}
    >
      <div
        className={` hero-down-indicator *:bg-black absolute bottom-10 left-1/2 translate-x-1/2 space-y-3 ${
          isHeroVisible ? "opacity-1" : "opacity-0"
        }`}
      >
        <div className="w-2 h-2  rounded-full"></div>
        <div className="w-2 h-2  rounded-full"></div>
        <div className="w-2 h-2  rounded-full"></div>
        <div className="w-2 h-2  rounded-full"></div>
      </div>
      <SvgIcon
        icon={disk}
        className={`transition duration-200 delay-200  absolute size-[88px] top-1/2 left-20 animate-spin`}
      />
      <ImgIcon
        icon="bi bi-mic"
        className={`absolute top-[60%] right-10 animate-pulse transition duration-500 delay-150 ${
          isHeroVisible
            ? "opacity-1 scale-[1] "
            : "opacity-0 scale-[0.3] -rotate-180"
        }`}
      />
      <ImgIcon
        icon="bi bi-boombox"
        className={`absolute top-[20%] max-lg:top-[14%]  -translate-x-1/2 ${
          isHeroVisible ? " animate-bounce left-[47%]" : "left-1/2"
        }`}
      />
      <div className="w-[128px] h-10  border-t-4 border-black absolute max-lg:left-[53%] left-1/2 top-[35%] max-lg:top-[28%] -translate-x-1/2"></div>

      <div className="" id="Hero"></div>
      <div
        className={`
         ${!isHeroVisible ? "opacity-1" : "opacity-0"}
         overflow-hidden transition duration-150  hero-image fixed  -z-20 bg-white rotate-45 top-[-20%] max-xl:top-[-50%] left-[20%] w-[140vw] h-[140vh] max-lg:rotate-0 max-lg:top-0 max-lg:left-0 `}
      >
        <img
          src={RadioBg}
          alt=""
          className="-rotate-45  max-lg:rotate-0 object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <p
          className={`transition-color duration-150 text-title-1 max-md:text-subtitle-1 font-FuturaBold text-center ${
            isHeroVisible ? "text-black" : "text-black  dark:text-white"
          }`}
        >
          <TypeWriter text={HERO_TEXT} delay={80} />
        </p>
        <p
          className={`text-lead text-center ${
            isHeroVisible ? "text-black" : " text-black-60  dark:text-white-60"
          }`}
        >
          Ecoutons et partageons tous ensemble des nouvelles choses au sein de
          notre radio préférée.
        </p>
      </div>
      <div
        className={` -translate-x-1/2 top-[65%] left-1/2 transition duration-200 ease-out flex items-center justify-evenly w-full flex-row max-md:flex-col max-md:gap-y-10 ${
          isHeroVisible
            ? " translate-y-[20rem] scale-[0.6] opacity-0"
            : "opacity-1 backdrop-blur-sm  w-[100vw] h-[100vh] absolute  translate-y-0   "
        } `}
      >
        <ButtonIconLg
          text="Ecouter la radio"
          icon="bi bi-boombox"
          link="#Radio"
        />
        <ButtonLg
          text="Acceder à l'application"
          color="bg-white"
          handleClick={() => navigate("/login")}
        />
      </div>
    </section>
  );
};

export default Hero;
