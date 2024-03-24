import { useEffect, useRef, useState } from "react";
// import SoundWave from "../assets/images/soundWave.svg";
import { Button, Icon, IconLg } from "./Buttons";
import "../animations/RadioPlayer.css";
import SoundWave from "../components/SoundWave";
import Audio from "../assets/audio.mp3";
import axios from "axios";
const RadioPlayer = ({ server = false, source }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying((prev) => !prev);
    // setVolume(!isPlaying ? 1 : 0)
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleMuted = () => {
    setIsMuted((prev) => !prev);
  };


  useEffect(() => {
    audioRef.current.volume = isMuted ? 0 : volume;
    // console.log(isMuted, audioRef.current.volume);
  }, [volume, isMuted, isPlaying]);
  
  return !server ? (
    <div className="rounded-3xl p-10 flex flex-col gap-4 items-center justify-center bg-black-10 overflow-hidden min-w-[330px] max-md:w-full dark:bg-white-10">
      <RadioPlayIcon
        isPlaying={isPlaying}
        handleClick={() => togglePlayPause()}
      />
      <p
        className={`text-base text-black radio-text  dark:text-white ${
          isPlaying ? "animate" : ""
        }`}
      >
        {" "}
        Miley Cyrus- Flower"
      </p>
      <div className="flex gap-2 items-center justify-center">
        <Icon
          icon={isMuted ? "bi bi-volume-mute" : "bi bi-volume-up"}
          color="bg-primary"
          handleClick={() => handleMuted()}
        />
        <input
          type="range"
          name=""
          min={0}
          max={1}
          step={0.1}
          onChange={(e) => handleVolumeChange(e)}
          id="musicRange"
          className="w-full rounded-lg cursor-pointer bg-primary-60  appearance-none"
        />
      </div>
      <audio controls ref={audioRef} className="w-0 h-0 hidden" playsInline>
        <source src={Audio} type="audio/mpeg" />
      </audio>

      <div className="flex soundWave">
        <SoundWave animate={isPlaying} />
        <SoundWave animate={isPlaying} />
        <SoundWave animate={isPlaying} />
      </div>
    </div>
  ) : (
    <div className="rounded-3xl p-10 flex flex-col gap-4 items-center justify-center bg-black-10 overflow-hidden min-w-[330px] max-md:w-full dark:bg-white-10">
      <Button
        text={`${isPlaying ? "Arrêter" : "Demarrer un stream"}`}
        handleClick={togglePlayPause}
        color={`${isPlaying ? "text-white bg-danger" : "text-black bg-white"}`}
      />
      <audio controls ref={audioRef} className="w-0 h-0 hidden">
        <source src={Audio} type="audio/mpeg" />
      </audio>
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
      className="rounded-full bg-primary text-black size-[88px] flex items-center justify-center cursor-pointer icon-anim play-anim"
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
