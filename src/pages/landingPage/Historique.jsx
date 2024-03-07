import { useState } from "react";
import { ButtonLg } from "../../components/Buttons";
import ImgT from "../../components/ImgT";
import {ABOUT_TEXT}  from "../../constants/index";
import "../../animations/Historique.css";
const Historique = () => {
  const [showMore,setShowMore] = useState(false);
  const maxTextLen = 420;
  return (
    <section className="space-y-10 mt-[172px] box  y" id="Historique">
      <p className="text-black text-title-2 max-md:text-subtitle-2 max-xl:text-center dark:text-white">Historique</p>
      <div className="flex items-center justify-between max-xl:flex-col max-xl:gap-y-10">
        <div className="bg-primary-10 text-black-60 rounded-lg p-6 flex gap-6 flex-col items-left max-w-[648px] dark:border dark:border-white-10 dark:bg-black card-anim dark:text-white dark:hover:text-black-60">
          <p className="text-base ">
            { showMore ? ABOUT_TEXT : ABOUT_TEXT.slice(0,maxTextLen) + ' ...' }
          </p>
          <div className="">
            <ButtonLg text={`${showMore ? 'Reduire' : "Afficher plus"}`} color="bg-black-10 dark:bg-white-40" handleClick={() => setShowMore((prev) => !prev)} />
          </div>
        </div>
        <div className="visible max-lg:hidden">
          <ImgT className="rounded-lg h-full" />
        </div>
      </div>
    </section>
  );
};

export default Historique;
