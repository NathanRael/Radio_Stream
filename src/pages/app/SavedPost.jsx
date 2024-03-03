import { useContext } from "react";
import { Button } from "../../components/Buttons";
import PostCard from "../../components/PostCard";
import AppContext from "../../context/Appcontext";

const SavedPost = () => {
  const {inView} = useContext(AppContext);
  return (
    <section className={`app-box ${inView.savedPost ? '' : 'page-anim'} `}>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-subtitle-2 text-black dark:text-white">
          Sauvegardes
        </h1>
        <Button
          text="Tout supprimer"
          color="btn-danger"
          defaultAnim={false}
        />
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
        <PostCard icon="bi bi-bookmark-dash" iconColor="text-danger "/>
        <PostCard icon="bi bi-bookmark-dash" iconColor="text-danger "/>
        <PostCard icon="bi bi-bookmark-dash" iconColor="text-danger "/>
      </div>
    </section>
  );
};

export default SavedPost;
