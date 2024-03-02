import { Button } from "../../components/Buttons";
import { Input, Textarea } from "../../components/Inputs";
import { UserRequest } from "../../components/UserRequest";

const Request = () => {
  return (
    <section className="px-4 w-full mb-8">
      <div className="flex items-start justify-between">
        <div className="basis-1/2">
          <h1 className="text-subtitle-2 text-black dark:text-white mb-8">
            Liste des requêtes 
          </h1>
          <div className="flex flex-col items-start justify-center gap-8">
            <UserRequest />
            <UserRequest />
            <UserRequest />
          </div>
        </div>
        <div className="  basis-1/2">
          <h1 className="text-subtitle-2 text-black dark:text-white mb-8">
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
