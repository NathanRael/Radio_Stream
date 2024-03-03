import { useContext } from "react";
import { Button } from "../../components/Buttons";
import { FileInput, Input, Textarea } from "../../components/Inputs";
import PostCard from "../../components/PostCard";
import AppContext from "../../context/Appcontext";

const PostList = () => {
  const {inView} = useContext(AppContext);
  return (
    <section className={`app-box ${inView.postList ? '' : 'page-anim'} `}>
      <div className="flex items-start max-lg:flex-col-reverse max-lg:items-center max-lg:gap-10 justify-between">
        <div className="basis-1/2">
          <h1 className="text-subtitle-2 text-black dark:text-white mb-8">
            Liste des publications
          </h1>
          <div className="flex flex-col items-start justify-center gap-8">
              <PostCard/>
              <PostCard/>
              <PostCard/>
          </div>
        </div>
        <div className="line lg:hidden"></div>
        <div className="  basis-1/2">
          <h1 className="text-subtitle-2 text-black dark:text-white mb-8">
            Nouvelle publications
          </h1>
          <div className="flex flex-col items-start justify-center gap-8 w-fit">
            <Input title="Titre" placeholder="Entrer le titre du requête " />
            <Textarea
              title="Description"
              placeholder="Entrer la desciprtion du requête"
            />
            <div className="bg-black-10 dark:bg-white-10 rounded-lg w-full h-[240px] relative">
              <i className="bi bi-image text-black-60 dark:text-white-60 absolute text-[128px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
            </div>
            <FileInput/>
            <div className="flex w-full flex-col mt-8">
              <Button text="Publier" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostList;
