import { InputLg } from "../../../components/Inputs";
import { ButtonLg } from "../../../components/Buttons";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../../../context/Appcontext";
import { useContext } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { inView } = useContext(AppContext);
  return (
    <section className={`form-box ${inView.login ? "" : "page-anim-right"}`}>
      <h1 className="text-subtitle-1 max-md:text-subtitle-3 text-center text-black dark:text-light w-full mt-10">
        Bienvenue sur <span className="text-primary">radio rofia</span>{" "}
      </h1>
      <div className="flex items-center justify-between  w-[334px] flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-6">
          <InputLg placeholder="Entrer votre Email" title="Email" />
          <InputLg
            placeholder="Entrer votre mot de passe"
            title="Mot de passe"
            type="password"
          />
        </div>
        <div className="flex flex-col gap-6 w-full ">
          <p className="text-small-1 font-FuturaThin text-black dark:text-white">
            Pas de compte ?{" "}
            <Link to="/signup" className="text-primary">
              S'inscrire
            </Link>
          </p>
          <ButtonLg
            text="Se connecter"
            handleClick={() => navigate("/user/home")}
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
