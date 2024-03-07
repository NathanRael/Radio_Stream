import soundWave from "../../assets/images/soundWave.svg";
import { ButtonLg, ButtonIconLg } from "../../components/Buttons";
import "../../animations/Hero.css";
import { useNavigate } from "react-router-dom";
import { HERO_TEXT } from "../../constants/index";
import { useEffect, useRef, useState } from "react";
import TypeWriter from "../../components/TypeWriter";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className={`flex flex-col gap-12 max-md:gap-10 items-center justify-center mt-[120px]  max-w-[866px] mx-auto max-md:px-4 `}
    >
      <div className="" id="Hero">
        <img src={soundWave} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <p className="text-black text-title-1 max-md:text-subtitle-1 font-FuturaBold text-center dark:text-white">
          <TypeWriter text={HERO_TEXT} delay={100} />
        </p>
        <p className="text-lead text-black-60 text-center dark:text-white-60">
          Ecoutons et partageons tous ensemble des nouvelles choses au sein de
          notre radio préférée.
        </p>
      </div>
      <div className="flex items-center justify-evenly w-full flex-row max-md:flex-col max-md:gap-y-4">
        <ButtonIconLg
          text="Ecouter la radio"
          icon="bi bi-boombox"
          link="#Radio"
        />
        <ButtonLg
          text="Acceder à l'application"
          color="bg-black-10 dark:bg-white"
          handleClick={() => navigate("/login")}
        />
      </div>
    </section>
  );
};

export default Hero;
