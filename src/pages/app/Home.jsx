import { useContext, useEffect, useState } from "react";
import { ButtonLg } from "../../components/Buttons";
import PostCard from "../../components/PostCard";
import AppContext from "../../context/Appcontext";

const Home = () => {
  const {inView} = useContext(AppContext);

  return (
    <section className={`app-box ${inView.home ? '' : 'page-anim'} `}>
      <h1 className="text-black max-lg:text-center dark:text-white text-subtitle-2 mb-8">
        Publication Récentes
      </h1>
      <div className="space-y-20">
        <div className="flex gap-6 flex-wrap items-center justify-center">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <div className="line"></div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center ">
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
