import { IconLg } from "../../components/Buttons";

const Footer = () => {
  return (
    <footer className="mt-[172px] space-y-6">
      <div className="flex items-start justify-between box max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-y-10">
        <div className="flex flex-col gap-4 text-black text-base dark:text-white">
          <h3 className="text-lead max-md:text-center font-FuturaMd">
            Liens de navigation
          </h3>
          <ul className="text-base flex flex-col items-start text-black max-md:items-center gap-y-4 dark:text-white-60">
            <li>
              <a href="#Hero">Accueil</a>
            </li>
            <li>
              <a href="#Historique">Historique</a>
            </li>
            <li>
              <a href="#Radio">Radio</a>
            </li>
            <li>
              <a href="#Application">application web</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-black text-base dark:text-white font-FuturaMd">
          <h3 className="text-lead max-md:text-center">Contact</h3>
          <ul className="text-base flex flex-col items-start text-black max-md:items-center gap-y-4 dark:text-white-60">
            <li>
              {" "}
              <i className="bi bi-telephone"></i>{" "}
              <a href="#">+261 38 87 329 17</a>
            </li>
            <li>
              {" "}
              <i className="bi bi-geo-alt"></i>{" "}
              <a href="#">BP 1264 Andrainjato | 301 – FIANARANTSOA</a>
            </li>
            <li>
              {" "}
              <i className="bi bi-envelope-at"></i>{" "}
              <a href="#">radio.rofia@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-black  dark:text-white">
          <IconLg
            icon="bi bi-facebook"
            color="bg-primary text-white dark:bg-white-40"
          />
          <IconLg
            icon="bi bi-github"
            color="bg-primary text-white dark:bg-white-40"
          />
        </div>
      </div>
      <div className="box bg-primary dark:bg-primary-60 text-black text-small py-4 text-center max-md:text-[12px] dark:text-white">
        © Radio Rofia 2024, Tous droits reservés
      </div>
    </footer>
  );
};

export default Footer;
