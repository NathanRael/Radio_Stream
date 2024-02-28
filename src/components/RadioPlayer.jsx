import { useState } from "react";
// import SoundWave from "../assets/images/soundWave.svg";
import { Icon, IconLg } from "./Buttons";
import "../animations/RadioPlayer.css";
import SoundWave from "../components/SoundWave";
const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  return (
    <div className="rounded-lg p-6 flex flex-col gap-4 items-center justify-center bg-black-10 overflow-hidden min-w-[330px] max-md:w-full">
      <RadioPlayIcon
        isPlaying={isPlaying}
        handleClick={() => setIsPlaying((prev) => !prev)}
      />
      <p
        className={`text-base text-black radio-text ${
          isPlaying ? "animate" : ""
        }`}
      >
        Miley Cyrus- Flower
      </p>
      <div className="flex gap-2 items-center justify-center">
        <Icon
          icon="bi bi-volume-up"
          color="bg-primary-60"
          handleClick={() => setIsMuted((prev) => !isMuted)}
        />
        <input type="range" name="" id="musicRange" />
      </div>
      <div className="flex soundWave">
        <SoundWave animate={isPlaying} />
        <SoundWave animate={isPlaying} />
        <SoundWave animate={isPlaying} />
      </div>
    </div>
  );
};

export default RadioPlayer;

const RadioPlayIcon = ({ handleClick, isPlaying }) => {
  return (
    <div
      className="rounded-full bg-primary text-black size-[88px] flex items-center justify-center cursor-pointer icon-anim"
      onClick={handleClick}
    >
      <i
        className={`${
          isPlaying ? "bi bi-pause" : "bi bi-play ps-[18px]"
        } text-[44px] p-4 `}
      ></i>
    </div>
  );
};
