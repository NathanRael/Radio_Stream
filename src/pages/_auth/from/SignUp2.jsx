import { FileInput } from "../../../components/Inputs";
import { ButtonIconLg, ButtonLg, IconLg } from "../../../components/Buttons";
import { useNavigate } from "react-router-dom";
import StepGrow from "../../../components/StepGrow";
import ProfileImg from "../../../components/ProfileImg";
import useGlobalContext from "../../../hook/useGlobalContext";
import { useEffect, useState } from "react";
import axios from "axios";
import MessagePopup from "../../../components/MessagePopup";
import useAuth from "../../../hook/useAuth";
import { baseUrl } from "../../../constants";
const SignUp2 = () => {
  const navigate = useNavigate();
  const { inView } = useGlobalContext();
  const [successMsg, setSuccessMsg] = useState("");
  const { sendingReq } = useAuth();
  const [errMsg, setErrMsg] = useState("");
  const [selectedFile, setSelectedFile] = useState({
    name: "",
    path: "",
  });
  const [formData, setFormData] = useState({
    imageUrl: "",
  });
  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "file" ? files[0] : value,
      };
    });
  };

  const handleSubmit = async (e, noImage = false) => {
    const { name, email, password } = JSON.parse(
      sessionStorage.getItem("signUpInfo")
    );
    e.preventDefault();

    axios
      .postForm(`${baseUrl}/user.php/`, {
        name,
        email,
        password,
        imageUrl: noImage ? null : formData.imageUrl,
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
  // useEffect(() => {
  //   !sessionStorage.getItem("signUpInfo") && navigate("/signup");
  // }, []);

  return (
    <section className={`form-box ${inView.signup2 ? "" : "page-anim-left"}`}>
      <MessagePopup
        message={successMsg}
        className={` ${
          successMsg
            ? "translate-x-0 opacity-1"
            : "translate-x-[10rem] opacity-0"
        }  fixed top-10 right-10 transition delay-30 z-50`}
      />
      <MessagePopup
        error
        message={errMsg}
        className={`${
          errMsg ? "translate-x-0 opacity-1" : "translate-x-[10rem] opacity-0"
        } fixed top-10 right-10 transition delay-30 z-50`}
      />
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
          <StepGrow full text="Etape 1/2" />
          <StepGrow
            disabled={!inView.signup2}
            full={inView.signup2}
            text="Etape 2/2"
          />
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-10 items-center justify-center w-full"
        >
          <ProfileImg size="size-[172px]" image={selectedFile?.path} />
          <FileInput
            name="imageUrl"
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            handleChange={handleInputChange}
          />
        </form>
        <div className="flex justify-between gap-6 w-full">
          <ButtonLg
            text="Passer"
            color="bg-black-10 dark:bg-white-10 text-black dark:text-white"
            handleClick={(e) => handleSubmit(e, true)}
          />
          {sendingReq ? (
            <ButtonIconLg
              icon="bi bi-arrow-clockwise"
              animated
              text="Inscription"
            />
          ) : (
            <ButtonLg text="S'inscrire" handleClick={handleSubmit} />
          )}
        </div>
      </div>
    </section>
  );
};

export default SignUp2;
