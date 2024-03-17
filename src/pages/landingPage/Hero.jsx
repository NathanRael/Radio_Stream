import soundWave from "../../assets/images/soundWave.svg";
import { ButtonLg, ButtonIconLg } from "../../components/Buttons";
import "../../animations/Hero.css";
import { useNavigate } from "react-router-dom";
import { HERO_TEXT } from "../../constants/index";
import { useEffect, useRef, useState } from "react";
import TypeWriter from "../../components/TypeWriter";
import UseIntersection from "../../hook/UseIntersection";
import { createPortal } from "react-dom";
import RadioBg from "../../assets/images/radio-1.jpg";

const Hero = ({ isHeroVisible = false }) => {
  const navigate = useNavigate();

  return (
    <section
      className={`overflow-x-hidden flex flex-col gap-[80px] max-md:gap-10 items-center justify-center mt-[120px]  max-w-[866px] mx-auto max-md:px-4 h-[80vh]`}
    >
      <div className="" id="Hero"></div>
      <div
        className={`
         ${!isHeroVisible ? "opacity-1" : "opacity-0"}
         overflow-hidden transition duration-150  hero-image fixed  -z-20 bg-white rotate-45 top-[-10%] max-xl:top-[-50%] left-[20%] w-[140vw] h-[140vh] max-lg:rotate-0 max-lg:top-0 max-lg:left-0 `}
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
          <TypeWriter text={HERO_TEXT} delay={100} />
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
        className={`transition duration-200 ease-out flex items-center justify-evenly w-full flex-row max-md:flex-col max-md:gap-y-4 ${
          isHeroVisible ? "scale-[0.6] opacity-0" : "opacity-1 "
        }`}
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
