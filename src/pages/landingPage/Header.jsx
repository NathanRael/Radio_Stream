import ProfileImg from "../../components/ProfileImg";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-16 py-4 border-b border-b-black-10">
      <div className="text-black text-subtitle-3">
        Radio <span className="text-primary">Rofia</span>
      </div>
      <ul className="inline-flex  items-center justify-between w-[440px]">
        <li className="navLink">Accueil</li>
        <li className="navLink ">Historique</li>
        <li className="navLink ">Radio</li>
        <li className="navLink ">Application</li>
      </ul>
      <div className="flex items-center justify-between max-w-[128px] gap-6">
        <div className="">
          <i className="bi bi-moon text-[28px]"></i>
        </div>
        <div className="">
          <ProfileImg />
        </div>
      </div>
    </header>
  );
};

export default Header;
