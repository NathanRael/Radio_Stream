import { InputLg } from "../../../components/Inputs";
import { ButtonLg } from "../../../components/Buttons";
import { Link, useNavigate } from "react-router-dom";
import StepGrow from "../../../components/StepGrow";
import { useState, useEffect, useRef } from "react";
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  PSEUDO_REGEX,
} from "../../../constants/index";
import axios from "axios";
import MessagePopup from "../../../components/MessagePopup";
import useGlobalContext from "../../../hook/useGlobalContext";

const SignUp = () => {
  const signUpInfo = JSON.parse(sessionStorage.getItem("signUpInfo")) || null;
  const navigate = useNavigate();
  const { inView } = useGlobalContext();
  const userRef = useRef(null);
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [formData, setFormData] = useState({
    name: signUpInfo?.name || "",
    email: signUpInfo?.email || "",
    password: signUpInfo?.password || "",
    match: signUpInfo?.match || "",

    validName: false,
    validEmail: false,
    validPassword: false,
    validMatch: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "checkox" ? checked : value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    if (error) {
      return console.log("Verifier vos champs");
    }
    sessionStorage.setItem("signUpInfo", JSON.stringify(formData));
    navigate("/signup-2");
    // axios
    //   .post("http://localhost/Rofia/api/user.php/", {
    //     name,
    //     email,
    //     password,
    //   })
    //   .then((response) => {
    //     console.log(response.data.success);
    //     setSuccessMsg(response.data.success);
    //     setTimeout(() => navigate("/signup-2"), 2000);
    //     localStorage.setItem("signUpInfo", JSON.stringify(formData));
    //   })
    //   .catch((e) => {
    //     setErrMsg(e.response.data.error);
    //     console.log(e.response.data.error);
    //   });
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      validName: PSEUDO_REGEX.test(formData.name),
    }));
  }, [formData.name]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      validEmail: EMAIL_REGEX.test(formData.email),
    }));
  }, [formData.email]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      validPassword: PASSWORD_REGEX.test(formData.password),
    }));
    setFormData((prev) => ({
      ...prev,
      validMatch: formData.password === formData.match && formData.match != "",
    }));
  }, [formData.password, formData.match]);

  useEffect(() => {
    const { validEmail, validMatch, validName, validPassword } = formData;
    setError(!validEmail || !validMatch || !validPassword || !validName);
    setErrMsg("");
    setSuccessMsg("");
  }, [formData]);

  return (
    <section className={`form-box ${inView.signup ? "" : "page-anim-right"}`}>
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
      <h1 className="text-subtitle-1 max-md:text-subtitle-3 text-center text-black dark:text-light w-full mt-10">
        Connectez vous dans le monde de la{" "}
        <span className="text-primary">radio</span>{" "}
      </h1>
      <form
        className="flex items-center justify-between  w-[334px] flex-col gap-10"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center w-full gap-2">
          <StepGrow disabled={!inView.signup} text="Etape 1/2" />
          <StepGrow disabled={inView.signup} text="Etape 2/2" />
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <InputLg
            name="name"
            inputRef={userRef}
            placeholder="Entrer votre nom"
            title="Nom"
            value={formData.name}
            handleChange={handleChange}
            isValid={formData.validName}
            errorMsg="Le champ nom doit cotenir au moins 4 charchtères"
          />
          <InputLg
            name="email"
            placeholder="Entrer votre Email"
            title="Email"
            value={formData.email}
            handleChange={handleChange}
            isValid={formData.validEmail}
            errorMsg="Email incorrect"
          />
          <InputLg
            title="Mot de passe"
            type="password"
            name="password"
            placeholder="Entrer votre mot de passe"
            value={formData.password}
            handleChange={handleChange}
            isValid={formData.validPassword}
            errorMsg="Le mot de passe doit avoir au moins 8 charachtères"
          />
          <InputLg
            title="Confirmer"
            type="password"
            placeholder="Confirmer votre mot de passe"
            name="match"
            value={formData.match}
            handleChange={handleChange}
            isValid={formData.validMatch}
            errorMsg="Mot de passe incorrect"
          />
        </div>
        <div className="flex flex-col gap-6 w-full ">
          <p className="text-small-1 font-FuturaThin text-black dark:text-white">
            Dejà membre ?{" "}
            <Link to="/login" className="text-primary">
              Se connecter
            </Link>
          </p>
          <ButtonLg disabled={error} text="Suivant" />
        </div>
      </form>
    </section>
  );
};

export default SignUp;
