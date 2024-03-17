import { useEffect } from "react";
import RadioPlayer from "../../components/RadioPlayer";
import useIntersection from "../../hook/UseIntersection";
const RadioSection = () => {
  const [radioRef, isRadioVisible] = useIntersection({
    root: null,
    rootMargin: "260px",
    threshold: 1.0,
  });

  return (
    <div
      className="flex items-center justify-between mt-[172px] box max-md:flex-col max-lg:gap-10  overflow-hidden"
      id="Radio"
      ref={radioRef}
    >
      <div
        className={`transition duration-500 ease-in-out bg-white dark:bg-black w-full h-full fixed top-0 left-0 -z-20 ${
          isRadioVisible ? "opacity-1 " : " opacity-0 "
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

      <div   className={`transition duration-300 ease-out delay-300 flex flex-col max-md:flex-row gap-6   ${
          isRadioVisible
            ? "translate-x-0 opacity-1"
            : "opacity-0 translate-x-[20rem]"
        }`}>
      <RadioPlayer />
      </div>
    </div>
  );
};

export default RadioSection;
