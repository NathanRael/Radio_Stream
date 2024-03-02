import React from "react";
import RadioPlayer from "../../components/RadioPlayer";

const Radio = () => {
  return (
    <section className="w-full px-4">
      <div className="absolute top-0 left-[248px] h-full w-[80%] blur-sm -z-10">
        <div className="absolute top-24">
          <RadioPlayer />
        </div>
        <div className="absolute bottom-0 right-0">
          <RadioPlayer />
        </div>
      </div>
      <h1 className="text-subtitle-2 dark:text-white mb-8  text-black">Radio</h1>
      <div className="mx-auto max-w-[334px]">
        <p className="text-subtitle-3 text-black dark:text-white text-center mb-4">
            Radio Rofia <span className="text-primary">91.4 Mhz</span>
        </p>
        <RadioPlayer />
      </div>
    </section>
  );
};

export default Radio;
