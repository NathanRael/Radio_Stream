import { useState } from "react";
import { ButtonLg } from "../../components/Buttons";
import ImgT from "../../components/ImgT";
import "../../animations/Application.css";
import { useNavigate } from "react-router-dom";
import useIntersection from "../../hook/UseIntersection";
import useGlobalContext from "../../hook/useGlobalContext";
import { radio1, radio2, radio3 } from "../../constants/images";
const Application = () => {
  const [active, setActive] = useState({
    decouvrer: true,
    utiliser: false,
    experimenter: false,
  });
  const { appliTitleRef, isAppliTitleVisible } = useGlobalContext();
  const [appliRef, isAppliVisible] = useIntersection({
    root: null,
    rootMargin: "250px",
    threshold: 1.0,
  });

  const navigate = useNavigate();

  return (
    <section
      ref={appliRef}
      className={`relative box mt-[172px] space-y-10 overflow-hidden   w-full `}
      id="Application"
    >
      <div
        ref={appliTitleRef}
        className={`h-lvh   flex items-center justify-center `}
      >
        <h1
          className={`transition duration-300 delay-300 text-title-2  text-black text-center max-md:text-subtitle-2 dark:text-white ease-out ${
            isAppliTitleVisible
              ? "opacity-1 translate-y-[-50%]"
              : "translate-y-[5rem] opacity-0"
          }`}
        >
          Pour plus de <span className="text-primary">fun et de partage</span>
        </h1>
      </div>
      <div className="space-y-[84px]">
        <AppImageSection texte="Decouvrer" image={radio2} />
        <AppImageSection texte="Utiliser" reverse image={radio3} />
      </div>
      <h1 className="text-title-2 text-center w-full text-black dark:text-white">
        L'application web <span className="text-primary">Radio Rofia</span>
      </h1>
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

const AppImageSection = ({ texte, image, reverse = false }) => {
  const [imageRef, isImageVisible] = useIntersection({
    root: null,
    rootMargin: "250px",
    threshold: 1.0,
  });
  return (
    <div
      ref={imageRef}
      className={`relative w-full flex  items-start  justify-between  max-lg:gap-10 max-lg:flex-col ${
        reverse ? " flex-row-reverse " : " flex-row"
      }`}
    >
      <div className="flex flex-col gap-6">
        <h2
          className={`transition duration-300 relative before-line text-title-2 text-black delay-150 dark:text-white ${
            isImageVisible
              ? "opacity-1 translate-y-0"
              : "translate-y-[5rem] opacity-0"
          }`}
        >
          {texte}
        </h2>
        <h2
          className={`transition duration-300 relative  text-base max-w-[340px] text-black delay-150 dark:text-white ${
            isImageVisible
              ? "opacity-1 translate-y-0"
              : "translate-y-[5rem] opacity-0"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          debitis tempore eius, porro quae non cupiditate enim consequuntur
          necessitatibus vero cum ea magni iste quas sunt exercitationem sed
          sapiente dicta!
        </h2>
      </div>
      <img
        src={image}
        className={`-z-10 fixed w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover blur-md transition duration-200 ${
          isImageVisible ? "opacity-1" : "opacity-0"
        }`}
        alt=""
      />
      <div
        className={`transition duration-300 delay-300 max-sm:w-full w-[420px] h-[80vh] object-cover rounded-3xl relative overflow-hidden ${
          isImageVisible
            ? "opacity-1 translate-y-0 scale-[1]"
            : "opacity-0 translate-y-[6rem] scale-[0.8]"
        }`}
      >
        <img
          src={image}
          alt=""
          className={`transition duration-300 delay-200 ease-in-out object-cover absolute w-full h-full scale-[1.2] hover:scale-[1] `}
        />
      </div>
    </div>
  );
};
