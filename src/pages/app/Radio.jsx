import React, { useContext, useEffect } from "react";
import RadioPlayer from "../../components/RadioPlayer";
import AppContext from "../../context/GlobalContext";
import useGlobalContext from "../../hook/useGlobalContext";
import axios from "axios";

const Radio = () => {
  const { inView } = useGlobalContext();
  // useEffect(() => {
  //   axios.get("http://rdj966.net:8000/", {
  //     withCredentials : false,
      
  //   }).then((res) => console.log(res));
  // }, []);
  return (
    <section className={`app-box ${inView.radio ? "" : "page-anim"} `}>
      <h1 className="max-lg:text-center text-subtitle-2 dark:text-white mb-8  text-black">
        <i className="bi bi-boombox me-2"></i>
        Radio
      </h1>
      <div className="mx-auto max-w-[334px] space-y-10">
        <p className="text-subtitle-3 text-black dark:text-white text-center mb-4">
          Radio Rofia <span className="text-primary">91.4 Mhz</span>
        </p>
        <RadioPlayer  />
        <RadioPlayer server />
      </div>
    </section>
  );
};

export default Radio;
{
  /* <div className="  absolute max-lg:hidden top-0 left-[248px] max-lg:w-1/2 h-full w-[70%] blur-sm -z-10"  >
        <div className="absolute top-24">
          <RadioPlayer />
        </div>
        <div className="absolute max-lg:bottom-20 bottom-0 right-0">
          <RadioPlayer />
        </div>
      </div> */
}
