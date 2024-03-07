import {  useNavigate } from "react-router-dom";
import { Button, IconLg } from "../../components/Buttons";
import { Input, Textarea } from "../../components/Inputs";
import useApp from "../../hook/useApp";

const EditRequest = () => {
  const { inView } = useApp();
  const navigate = useNavigate();
  return (
    <section className={`app-box ${inView.editRequest ? "" : "page-anim"} `}>
      <div className="flex items-start justify-between max-xl:gap-10 max-xl:flex-col-reverse  max-xl:items-center flex-wrap">
        <div className="xl:hidden line"></div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-full  flex items-center justify-center gap-2 mb-8">
            <IconLg
              icon="bi bi-arrow-left"
              color="text-black dark:text-white dark:bg-black"
              handleClick={() => navigate(-1)}
            />
            <h1 className="text-subtitle-2 text-black dark:text-white">
              Modifier une requête
            </h1>
          </div>
          <div className="flex flex-col items-start justify-center gap-8 w-fit">
            <Input title="Titre" placeholder="Entrer le titre du requête " />
            <Textarea
              title="Description"
              placeholder="Entrer la desciprtion du requête"
            />
            <div className="flex w-full flex-col">
              <Button text="Modifier" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditRequest;
