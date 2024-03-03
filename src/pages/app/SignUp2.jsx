import { FileInput, InputLg } from "../../components/Inputs";
import { ButtonLg, IconLg } from "../../components/Buttons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import StepGrow from "../../components/StepGrow";
import ProfileImg from "../../components/ProfileImg";
import AppContext from "../../context/Appcontext";
import { useContext } from "react";
const SignUp2 = () => {
  const navigate = useNavigate();
  const {inView} = useContext(AppContext);
  return (
    <section className={`form-box ${inView.signup2 ? '' : 'page-anim-left'}`}>
      <div className="absolute left-4 top-4">
        <IconLg icon="bi bi-arrow-left" color="text-black dark:text-white" handleClick={() => navigate('/signup')} />
      </div>
      <h1 className="text-subtitle-1 max-md:text-subtitle-3 text-center text-black dark:text-light w-full mt-20">
        Connectez vous dans le monde de la
        <span className="text-primary"> radio</span>{" "}
      </h1>
      <div className="flex items-center justify-between  w-[334px] flex-col gap-10">
        <div className="flex items-center justify-center w-full gap-2">
          <StepGrow full={inView.signup2} text="Etape 1/2" />
          <StepGrow disabled={!inView.signup2} text="Etape 2/2" />
        </div>
        <div className="flex flex-col gap-10 items-center justify-center w-full">
          <ProfileImg size="128" />
          <FileInput />
        </div>
        <div className="flex justify-between gap-6 w-full">
          <ButtonLg
            text="Passer"
            color="bg-black-10 dark:bg-white-10 text-black dark:text-white"
            handleClick={() => navigate("/login")}
          />
          <ButtonLg text="S'inscrire" handleClick={() => navigate("/login")} />
        </div>
      </div>
    </section>
  );
};

export default SignUp2;
