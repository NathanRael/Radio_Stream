import { ButtonIconLg, ButtonLg } from "../../components/Buttons";
import LoadingIcon from "../../components/LoadingIcon";
import PostCard from "../../components/PostCard";
import UseIntersection from "../../hook/UseIntersection";
import useGlobalContext from "../../hook/useGlobalContext";
import { baseUrl } from "../../constants";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hook/useAuth";
import useAppContext from "../../hook/useAppContext";
import { FileInput } from "../../components/Inputs";
axios.defaults.withCredentials = true;

const Home = () => {
  const { inView } = useGlobalContext();
  const { auth } = useAuth();
  const {
    savePost,
    getSavedPost,
    postData,
    savedPost,
    getAllPost,
    removePost,
  } = useAppContext();

  const [containerRef, isVisible] = UseIntersection({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });

  useEffect(() => {
    getAllPost();
    getSavedPost();
  }, []);

  return (
    <section className={`app-box ${inView.home ? "" : "page-anim"} `}>
      <h1
        ref={containerRef}
        className="text-black max-lg:text-center dark:text-white text-subtitle-2 mb-8"
      >
        Publication Récentes
      </h1>
      <div className="space-y-20">
        <div className="flex gap-6 flex-wrap items-center justify-center">
          {postData?.slice(0, 3).map((post) => (
            <PostCard
              key={post.id}
              {...post}
              isAdmin={auth.roles === "admin"}
              handleSavePost={savePost}
              saveClicked={savedPost.some((v) => v.postId === post.id)}
              handleDelete={removePost}
            />
          ))}
        </div>
        <div className="line"></div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center xl:place-items-start">
          {postData?.map((post) => (
            <PostCard
              key={post.id}
              {...post}
              isAdmin={auth.roles === "admin"}
              handleSavePost={savePost}
              saveClicked={savedPost.some((v) => v.postId === post.id)}
              handleDelete={removePost}
            />
          ))}
        </div>
        <div className="w-full mx-auto">
          <LoadingIcon />
        </div>
      </div>
    </section>
  );
};

export default Home;
