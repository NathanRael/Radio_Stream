import { InputLg } from "../../../components/Inputs";
import { ButtonLg } from "../../../components/Buttons";
import { Link, useNavigate } from "react-router-dom";
import StepGrow from "../../../components/StepGrow";
import { useContext } from "react";
import AppContext from "../../../context/Appcontext";
const SignUp = () => {
  const navigate = useNavigate();
  const { inView } = useContext(AppContext);
  return (
    <section className={`form-box ${inView.signup ? "" : "page-anim-right"}`}>
      <h1 className="text-subtitle-1 max-md:text-subtitle-3 text-center text-black dark:text-light w-full mt-10">
        Connectez vous dans le monde de la{" "}
        <span className="text-primary">radio</span>{" "}
      </h1>
      <div className="flex items-center justify-between  w-[334px] flex-col gap-10">
        <div className="flex items-center justify-center w-full gap-2">
          <StepGrow disabled={!inView.signup} text="Etape 1/2" />
          <StepGrow disabled={inView.signup} text="Etape 2/2" />
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <InputLg placeholder="Entrer votre nom" title="Nom" />
          <InputLg placeholder="Entrer votre Email" title="Email" />
          <InputLg
            placeholder="Entrer votre mot de passe"
            title="Mot de passe"
            type="password"
          />
          <InputLg
            placeholder="Confirmer votre mot de passe"
            title="Confirmer"
            type="password"
          />
        </div>
        <div className="flex flex-col gap-6 w-full ">
          <p className="text-small-1 font-FuturaThin text-black dark:text-white">
            Dejà membre ?{" "}
            <Link to="/login" className="text-primary">
              Se connecter
            </Link>
          </p>
          <ButtonLg text="Suivant" handleClick={() => navigate("/signup-2")} />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
