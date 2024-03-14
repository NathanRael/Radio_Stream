import { useNavigate, useParams } from "react-router-dom";
import { Button, IconLg } from "../../components/Buttons";
import { FileInput, Input } from "../../components/Inputs";
import ProfileImg from "../../components/ProfileImg";
import useGlobalContext from "../../hook/useGlobalContext";
import useAuth from "../../hook/useAuth";
import { useEffect, useRef, useState } from "react";
import { EMAIL_REGEX, PASSWORD_REGEX, PSEUDO_REGEX } from "../../constants";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const { inView } = useGlobalContext();
  const { auth } = useAuth();
  const userRef = useRef(null);
  const [error, setError] = useState(false);
  const { setSuccessMsg, setErrMsg, resetMessage } = useAuth("");
  const [imagePath, setImagePath] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    imageUrl: "",

    validName: false,
    validEmail: false,
    validOldPassword: false,
    validNewPassword: false,
    validImageUrl: false,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, oldPassword, newPassword, imageUrl } = formData;
    if (error) {
      return console.log("Verifier vos champs");
    }

    axios
      .patch(
        `http://localhost/Rofia/api/user.php/${auth.id}`,
        {
          name,
          email,
          oldPassword,
          newPassword,
          imageUrl,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setSuccessMsg(response.data.success);
        }
      })
      .catch((e) => {
        setErrMsg(e.response?.data?.error);
        console.log(e.response);
      })
      .finally(() => {
        resetMessage();
      });
  };

  useEffect(() => {
    userRef.current.focus();
    setFormData((prev) => ({
      ...prev,
      name: auth?.name,
      email: auth?.email,
    }));
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
      validOldPassword: PASSWORD_REGEX.test(formData.oldPassword),
    }));
  }, [formData.oldPassword]);
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      validNewPassword: PASSWORD_REGEX.test(formData.newPassword),
    }));
  }, [formData.newPassword]);

  useEffect(() => {
    const { validEmail, validName, validOldPassword, validNewPassword } =
      formData;
    setError(
      !validEmail || !validOldPassword || !validName || !validNewPassword
    );
    setErrMsg("");
    setSuccessMsg("");
  }, [formData, imagePath]);
  return (
    <section className={`app-box ${inView.profile ? "" : "page-anim"} `}>
      <div className="flex items-center justify-between w-full mb-8">
        <div className="flex items-center gap-2">
          <IconLg
            icon="bi bi-arrow-left"
            color="text-black dark:text-white dark:bg-black"
            handleClick={() => navigate(-1)}
          />
          <h1 className="text-subtitle-2 text-black dark:text-white">
            Profile
          </h1>
        </div>
        <Button
          defaultAnim={false}
          color="btn-danger"
          text="Supprimer le compte"
        />
      </div>
      <form
        className="w-fit mx-auto flex items-center justify-center flex-col gap-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col items-center space-y-6 ">
          <ProfileImg size="size-[176px]" image={imagePath} />
          <FileInput
            name="imageUrl"
            setImagePath={setImagePath}
            handleChange={handleInputChange}
          />
          <Input
            name="name"
            inputRef={userRef}
            placeholder="Entrer votre nom"
            title="Nom"
            value={formData.name}
            handleChange={handleInputChange}
            isValid={formData.validName}
            errorMsg="Le champ nom doit cotenir au moins 4 charchtères"
          />
          <Input
            name="email"
            placeholder="Entrer votre Email"
            title="Email"
            value={formData.email}
            handleChange={handleInputChange}
            isValid={formData.validEmail}
            errorMsg="Email incorrect"
          />
          <Input
            title="Ancien mot de passe"
            type="password"
            name="oldPassword"
            placeholder="Entrer votre ancien mot de passe"
            value={formData.oldPassword}
            handleChange={handleInputChange}
            isValid={formData.validOldPassword}
            errorMsg="Le mot de passe doit avoir au moins 8 charachtères"
          />
          <Input
            title="Nouveau mot de passe"
            type="password"
            name="newPassword"
            placeholder="Entrer votre nouveau mot de passe"
            value={formData.newPassword}
            handleChange={handleInputChange}
            isValid={formData.validNewPassword}
            errorMsg="Le mot de passe doit avoir au moins 8 charachtères"
          />
        </div>
        <div className="flex flex-col w-full">
          <Button
            text="Sauvegarder"
            disabled={error}
            handleClick={handleSubmit}
          />
        </div>
      </form>
    </section>
  );
};

export default Profile;
