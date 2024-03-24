import { useEffect } from "react";
import RadioPlayer from "../../components/RadioPlayer";
import useIntersection from "../../hook/UseIntersection";
import ImgIcon from "../../components/ImgIcon";
import useWindowSize from "../../hook/useWindowSize";
import useGlobalContext from "../../hook/useGlobalContext";
const RadioSection = () => {
  const [width] = useWindowSize();
  const { radioRef, isRadioVisible, isAppliTitleVisible } = useGlobalContext();

  return (
    <div
      className="flex relative items-center justify-between mt-[172px] box max-md:flex-col max-lg:gap-10  overflow-hidden xl:h-[140vh]"
      id="Radio"
      ref={radioRef}
    >
      <ImgIcon
        icon="bi bi-boombox"
        className={`fixed transition duration-300  top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 hover:scale-[1.4] hover:rotate-0 ${
          isRadioVisible && width >= 1000
            ? "rotate-45 opacity-1 text-black-60 dark:text-white-60  scale-[1]"
            : "left-1/2 opacity-0 scale-[0.2]"
        }`}
      />
      <div
        className={`transition duration-500 ease-in-out bg-white dark:bg-black w-full h-full fixed top-0 left-0 -z-20 ${
          isRadioVisible || isAppliTitleVisible ? "opacity-1 " : " opacity-0 "
        }`}
      ></div>
      <div
        className={`transition duration-300 ease-out delay-150 flex flex-col max-md:flex-row gap-6   ${
          isRadioVisible
            ? "translate-x-0 opacity-1"
            : "opacity-0 -translate-x-[20rem]"
        }`}
      >
        <p className="text-black text-title-2 max-md:text-subtitle-2 dark:text-white">
          Radio Rofia
        </p>
        <p className="text-subtitle-1 max-md:text-subtitle-3 text-black-60 dark:text-white-60">
          91.4MHz
        </p>
      </div>

      <div
        className={`transition duration-300 ease-out delay-300 flex flex-col max-md:flex-row gap-6   ${
          isRadioVisible
            ? "translate-x-0 opacity-1"
            : "opacity-0 translate-x-[20rem]"
        }`}
      >
        <RadioPlayer/>
      </div>
    </div>
  );
};

export default RadioSection;
