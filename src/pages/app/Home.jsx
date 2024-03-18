import { ButtonIconLg, ButtonLg } from "../../components/Buttons";
import LoadingIcon from "../../components/LoadingIcon";
// import RecentPost from "../../components/RecentPost";
import UseIntersection from "../../hook/UseIntersection";
import useGlobalContext from "../../hook/useGlobalContext";
import { baseUrl } from "../../constants";
import { Suspense, lazy, useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hook/useAuth";
import useAppContext from "../../hook/useAppContext";
import PostCardLoading from "../../animations/PostCardLoading";
import RecentPostLoading from "../../animations/RecentPostLoading";
axios.defaults.withCredentials = true;
const RecentPostCard = lazy(() => import("../../components/RecentPostCard"));
const PostCard = lazy(() => import("../../components/PostCard"));

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
    <section
      className={`app-box  overflow-hidden ${inView.home ? "" : "page-anim"} `}
    >
      <h1
        ref={containerRef}
        className="text-black max-lg:text-center dark:text-white text-subtitle-2 mb-8"
      >
        <i className="bi bi-newspaper me-2"></i>
        Publications
      </h1>
      <div className="space-y-20">
        <div className="flex w-full flex-col items-center justify-center gap-8">
          {postData?.map((post) => (
            <Suspense key={post.id} fallback={<PostCardLoading />}>
              <PostCard
                key={post.id}
                {...post}
                isAdmin={auth.roles === "admin"}
                handleSavePost={savePost}
                saveClicked={savedPost.some((v) => v.postId === post.id)}
                handleDelete={removePost}
              />
            </Suspense>
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
