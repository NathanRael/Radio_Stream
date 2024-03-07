import { InputLg } from "../../../components/Inputs";
import { ButtonLg } from "../../../components/Buttons";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../../../context/Appcontext";
import { useContext, useEffect, useRef, useState } from "react";
import MessagePopup from "../../../components/MessagePopup";
import axios from "axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";

const Login = () => {
  const signIn = useSignIn();
  const navigate = useNavigate();
  const { inView } = useContext(AppContext);
  const inputRef = useRef(null);
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
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
    const { email, password } = formData;
    if (error) {
      return console.log("Verifier vos champs");
    }

    try {
      const response = await axios.post(
        "http://localhost/Rofia/api/login.php/",
        {
          email,
          password,
        }
      );
      console.log(response?.data);
      signIn({
        auth: {
          token: response.data.session.id,
          type: "Bearer",
        },
        userState: response.data.session,
      });
      setSuccessMsg(response?.data?.success);
    } catch (e) {
      setErrMsg(e.response?.data?.error);
      inputRef.current.focus();
    }
    // axios
    //   .post("http://localhost/Rofia/api/login.php/", {
    //     email,
    //     password,
    //   })
    //   .then((response) => {
    //     if (response.status != 200) throw response?.data?.error;
    //     console.log(response);
    //     signIn({
    //       auth: {
    //         token: "ey....mA",
    //         type: "Bearer",
    //       },
    //       userState: response.data.session,
    //     });

    //     setSuccessMsg(response?.data?.success);
    //     console.log(response?.data?.success);
    //   })
    //   .catch((e) => {
    //     setErrMsg(e.response?.data?.error);
    //     inputRef.current.focus();
    //   });
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
    setSuccessMsg("");
  }, [formData]);

  return (
    <section className={`form-box ${inView.login ? "" : "page-anim-right"}`}>
      <h1 className="text-subtitle-1 max-md:text-subtitle-3 text-center text-black dark:text-light w-full mt-10">
        Bienvenue sur <span className="text-primary">radio rofia</span>{" "}
      </h1>
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
      <form
        className="flex items-center justify-between  w-[334px] flex-col gap-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center justify-center gap-6">
          <InputLg
            name="email"
            inputRef={inputRef}
            placeholder="Entrer votre Email"
            title="Email"
            handleChange={handleInputChange}
          />
          <InputLg
            name="password"
            placeholder="Entrer votre mot de passe"
            title="Mot de passe"
            type="password"
            handleChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-6 w-full ">
          <p className="text-small-1 font-FuturaThin text-black dark:text-white">
            Pas de compte ?{" "}
            <Link to="/signup" className="text-primary">
              S'inscrire
            </Link>
          </p>
          <ButtonLg text="Se connecter" />
        </div>
      </form>
    </section>
  );
};

export default Login;
