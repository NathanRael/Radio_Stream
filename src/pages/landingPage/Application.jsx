import { ButtonLg } from "../../components/Buttons";
import ImgT from "../../components/ImgT";
const Application = () => {
  return (
    <section className="box mt-[172px] space-y-10" id = "Application">
      <h1 className="text-title-2 text-black text-center max-md:text-subtitle-2">
        Pour plus de <span className="text-primary">fun et de partage</span>
      </h1>
      <div className="flex gap-6 flex-col items-center justify-center">
        <ul className="text-subtitle-3 max-md:text-lead text-black-40 text-center flex items-center justify-center gap-1">
          <li className="text-black cursor-pointer">Découvrer</li>
          <li>|</li>
          <li className="cursor-pointer">Utiliser</li>
          <li>|</li>
          <li className="cursor-pointer">Expérimenter</li>
        </ul>
        <div className="bg-black-10 rounded-lg w-full md:w-[529px] h-[312px] relative p-6">
          {/* <ImgT className="rounded-lg" /> */}
          <p className="text-center text-black-60">
            Découvrer les différentes fonctionalités de l’application web
          </p>
        </div>
        <h3 className="text-subtitle-3 text-black max-md:text-lead">
          <span className="text-primary">L'application web</span> Radio Rofia
        </h3>
      </div>
      <div className="text-center">
        <ButtonLg text="Acceder à l'application web" color="bg-black-10" />
      </div>
    </section>
  );
};

export default Application;
