import { FileInput } from "../../../components/Inputs";
import { ButtonLg, IconLg } from "../../../components/Buttons";
import { useNavigate } from "react-router-dom";
import StepGrow from "../../../components/StepGrow";
import ProfileImg from "../../../components/ProfileImg";
import useGlobalContext from "../../../hook/useGlobalContext";
import { useEffect, useState } from "react";
import axios from "axios";
const SignUp2 = () => {
  const navigate = useNavigate();
  const { inView } = useGlobalContext();
  const [selectedFile, setSelectedFile] = useState({
    name: "",
    path: "",
  });

  const handleSubmit = async (e, noImage = false) => {
    const { name, email, password } = JSON.parse(
      sessionStorage.getItem("signUpInfo")
    );
    e.preventDefault();
    if (error) {
      return console.log("Verifier vos champs");
    }

    axios
      .postForm("http://localhost/Rofia/api/user.php/", {
        name,
        email,
        password,
        imageUrl: noImage ? null : selectedFile.path,
      })
      .then((response) => {
        console.log(response.data.success);
        setSuccessMsg(response.data.success);
        sessionStorage.removeItem("signUpInfo");
        setTimeout(() => navigate("/login"), 2000);
      })
      .catch((e) => {
        setErrMsg(e.response.data.error);
        console.log(e.response.data.error);
      });
  };
  useEffect(() => {
    // !sessionStorage.getItem("signUpInfo") && navigate("/signup");
  }, []);

  return (
    <section className={`form-box ${inView.signup2 ? "" : "page-anim-left"}`}>
      <div className="absolute left-4 top-4">
        <IconLg
          icon="bi bi-arrow-left"
          color="text-black dark:text-white"
          handleClick={() => navigate("/signup")}
        />
      </div>
      <h1 className="text-subtitle-1 max-md:text-subtitle-3 text-center text-black dark:text-light w-full mt-20">
        Ajouter votre photo
      </h1>
      <div className="flex items-center justify-between  w-[334px] flex-col gap-10">
        <div className="flex items-center justify-center w-full gap-2">
          <StepGrow full={inView.signup2} text="Etape 1/2" />
          <StepGrow disabled={!inView.signup2} text="Etape 2/2" />
        </div>
        <div className="flex flex-col gap-10 items-center justify-center w-full">
          <ProfileImg size="size-[172px]" image={selectedFile?.path} />
          <FileInput
            name="imageUrl"
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
        </div>
        <div className="flex justify-between gap-6 w-full">
          <ButtonLg
            text="Passer"
            color="bg-black-10 dark:bg-white-10 text-black dark:text-white"
            handleClick={(e) => handleSubmit(e, true)}
          />
          <ButtonLg text="S'inscrire" handleClick={handleSubmit} />
        </div>
      </div>
    </section>
  );
};

export default SignUp2;
