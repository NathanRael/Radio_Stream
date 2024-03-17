import { Suspense, lazy, useEffect, useState } from "react";
import { Button } from "../../components/Buttons";
import PostCard from "../../components/PostCard";
import useGlobalContext from "../../hook/useGlobalContext";
import axios from "axios";
import { baseUrl } from "../../constants";
import useAuth from "../../hook/useAuth";
import useAppContext from "../../hook/useAppContext";
import RecentPostLoading from "../../animations/RecentPostLoading";
import EmptyBoxIcon from "../../components/EmptyBoxIcon";
import Empty from "../../components/Empty";
const SavedPostCard = lazy(() => import("../../components/SavedPostCard"));

const SavedPost = () => {
  const { inView } = useGlobalContext();
  const { auth } = useAuth();
  const { getSavedPost, removeSavedPost, removeAllSavedPost, savedPost } =
    useAppContext();

  useEffect(() => {
    getSavedPost();
    // console.log(postData);
  }, []);
  return (
    <section className={`app-box ${inView.savedPost ? "" : "page-anim"} `}>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-subtitle-2 text-black dark:text-white">
          <i className="bi bi-bookmark me-2"></i>
          Sauvegardes
        </h1>
        <Button
          text="Tout supprimer"
          color="btn-danger"
          defaultAnim={false}
          handleClick={removeAllSavedPost}
        />
      </div>

      {savedPost.length > 0 ? (
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center xl:place-items-start">
          {savedPost.map((post) => (
            <Suspense key={post.id} fallback={<RecentPostLoading />}>
              <SavedPostCard
                className="max-w-[320px]"
                key={post.id}
                {...post}
                isAdmin={auth.roles === "admin"}
                handleSavePost={removeSavedPost}
                isSaved
              />
            </Suspense>
          ))}
        </div>
      ) : (
        <Empty text='Aucun évènement sauvegardé'/>
      )}
    </section>
  );
};

export default SavedPost;
