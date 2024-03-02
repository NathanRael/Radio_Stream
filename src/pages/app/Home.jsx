import { ButtonLg } from "../../components/Buttons";
import PostCard from "../../components/PostCard";

const Home = () => {
  return (
    <section className="w-full px-4 pb-6">
      <h1 className="text-black dark:text-white text-subtitle-2 mb-8">
        Publication Récentes
      </h1>
      <div className="space-y-20">
        <div className="flex gap-8">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <div className="line"></div>
        <div className="grid grid-cols-3 gap-8 place-items-center">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <div className="w-full mx-auto flex justify-center">
          <ButtonLg text="Voir Plus" />
        </div>
      </div>
    </section>
  );
};

export default Home;
