import { useNavigate } from "react-router-dom";
import { Button, IconLg } from "../../components/Buttons";
import { FileInput, Input, Textarea } from "../../components/Inputs";
import useApp from "../../hook/useApp";

const EditPost = () => {
  const { inView } = useApp();
  const navigate = useNavigate();
  return (
    <section className={`app-box ${inView.editPost ? "" : "page-anim"} `}>
      <div className="flex items-start max-lg:flex-col-reverse max-lg:items-center max-lg:gap-10 justify-between">
        <div className="  basis-1/2">
          <div className="w-full  flex items-center gap-2 mb-8">
            <IconLg
              icon="bi bi-arrow-left"
              color="text-black dark:text-white dark:bg-black"
              handleClick={() => navigate(-1)}
            />
            <h1 className="text-subtitle-2 text-black dark:text-white">
              Modifier une publication
            </h1>
          </div>
          <div className="flex flex-col items-start justify-center gap-8 w-fit">
            <Input title="Titre" placeholder="Entrer le titre du requête " />
            <Textarea
              title="Description"
              placeholder="Entrer la desciprtion du requête"
            />
            <div className="bg-black-10 dark:bg-white-10 rounded-lg w-full h-[240px] relative">
              <i className="bi bi-image text-black-60 dark:text-white-60 absolute text-[128px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
            </div>
            <FileInput />
            <div className="flex w-full flex-col mt-8">
              <Button text="Modifier" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditPost;
