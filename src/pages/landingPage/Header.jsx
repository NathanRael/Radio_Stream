import { IconLg } from "../../components/Buttons";
import ProfileImg from "../../components/ProfileImg";
import soundWaveIcon from "../../assets/images/soundWave.svg";

const Header = () => {
  return (
    <header className=" flex items-center justify-between box py-4 border-b border-b-black-10 fixed top-0  w-full z-50 bg-white shadow-sm">
      <div className="text-black text-subtitle-3">
        <a href="#Hero">
          Radio <span className="text-primary">Rofia</span>
        </a>
      </div>
      <ul className="inline-flex  items-center justify-evenly max-lg:gap-4  max-md:hidden basis-1/2">
        <li className="navLink">
          <a href="#Hero">Accueil</a>
        </li>
        <li className="navLink ">
          <a href="#Historique">Historique</a>
        </li>
        <li className="navLink ">
          <a href="#Radio">Radio</a>
        </li>
        <li className="navLink ">
          <a href="#Application">Application</a>
        </li>
      </ul>
      <div className="flex items-center justify-between max-w-[128px] gap-6  max-md:hidden">
        <div className="">
          {/* <i className="bi bi-moon text-[28px]"></i> */}
          <IconLg color="bg-white" icon="bi bi-moon" iconSize="text-[28px]" />
        </div>
        <div className="">
          <ProfileImg />
        </div>
      </div>
      <div className="visible md:hidden">
        <IconLg icon="bi bi-list" color="bg-white" />
      </div>
    </header>
  );
};

export default Header;
