import { FileInput, InputLg } from "../../components/Inputs";
import { ButtonLg, IconLg } from "../../components/Buttons";
import { Link, useNavigate } from "react-router-dom";
import StepGrow from "../../components/StepGrow";
import ProfileImg from "../../components/ProfileImg";
const SignUp2 = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center justify-center flex-col gap-8">
      <div className="absolute left-4 top-4">
        <IconLg icon="bi bi-arrow-left" color="bg-dark" handleClick={() => navigate('/signup')} />
      </div>
      <h1 className="text-subtitle-1 text-center text-black dark:text-light w-full mt-10">
        Connectez vous dans le monde de la
        <span className="text-primary"> radio</span>{" "}
      </h1>
      <div className="flex items-center justify-between  w-[334px] flex-col gap-10">
        <div className="flex items-center justify-center w-full gap-2">
          <StepGrow disbled={true} text="Etape 1/2" />
          <StepGrow text="Etape 2/2" />
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
