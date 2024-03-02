import { ButtonLg } from "../../components/Buttons";
import PostCard from "../../components/PostCard";

const SavedPost = () => {
  return (
    <section className="px-4 w-full">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-subtitle-2 text-black dark:text-white">
          Sauvegardes
        </h1>
        <ButtonLg
          text="Tout supprimer"
          color="btn-danger"
          defaultAnim={false}
        />
      </div>
      <div className="grid grid-cols-3 gap-8">
        <PostCard icon="bi bi-bookmark-dash" iconColor="text-danger "/>
        <PostCard icon="bi bi-bookmark-dash" iconColor="text-danger "/>
        <PostCard icon="bi bi-bookmark-dash" iconColor="text-danger "/>
      </div>
    </section>
  );
};

export default SavedPost;
