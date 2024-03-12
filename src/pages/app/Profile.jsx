import { useNavigate } from "react-router-dom";
import { Button, IconLg } from "../../components/Buttons";
import { FileInput, Input } from "../../components/Inputs";
import ProfileImg from "../../components/ProfileImg";
import useGlobalContext from "../../hook/useGlobalContext";

const Profile = () => {
  const navigate = useNavigate();
  const { inView } = useGlobalContext();

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
      <div className="w-fit mx-auto flex items-center justify-center flex-col gap-10">
        <div className="flex flex-col items-center space-y-6">
          <ProfileImg size="176" />
          <FileInput />
          <Input title="Nom" value="Ralaivoavy Natanael" />
          <Input
            title="Email"
            value="Ralaivoavy.natanael@gmail.com"
            type="email"
          />
          <Input
            title="Mot de passe"
            value="Ralaivoavy Natanael"
            type="password"
          />
        </div>
        <div className="flex flex-col w-full">
          <Button text="Sauvegarder" />
        </div>
      </div>
    </section>
  );
};

export default Profile;
