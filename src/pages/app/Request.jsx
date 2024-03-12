import { Button } from "../../components/Buttons";
import { Input, Textarea } from "../../components/Inputs";
import { UserRequest } from "../../components/UserRequest";
import useGlobalContext from "../../hook/useGlobalContext";

const Request = () => {
  const { inView } = useGlobalContext();
  return (
    <section className={`app-box ${inView.request ? "" : "page-anim"} `}>
      <div className="flex items-start justify-between max-xl:gap-10 max-xl:flex-col-reverse  max-xl:items-center flex-wrap">
        <div className="basis-1/2">
          <h1 className="max-xl:text-center text-subtitle-2 text-black dark:text-white mb-8">
            Liste des requêtes
          </h1>
          <div className="flex flex-col items-start justify-center gap-8">
            <UserRequest />
            <UserRequest />
            <UserRequest />
          </div>
        </div>
        <div className="xl:hidden line"></div>
        <div className="  basis-1/2">
          <h1 className="max-xl:text-center text-subtitle-2 text-black dark:text-white mb-8">
            Nouvelle requête
          </h1>
          <div className="flex flex-col items-start justify-center gap-8 w-fit">
            <Input title="Titre" placeholder="Entrer le titre du requête " />
            <Textarea
              title="Description"
              placeholder="Entrer la desciprtion du requête"
            />
            <div className="flex w-full flex-col">
              <Button text="Envoyer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Request;
