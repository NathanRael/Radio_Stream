import { useEffect, useState } from "react";
import { Button } from "../../components/Buttons";
import PostCard from "../../components/PostCard";
import useGlobalContext from "../../hook/useGlobalContext";
import axios from "axios";
import { baseUrl } from "../../constants";
import useAuth from "../../hook/useAuth";
import useAppContext from "../../hook/useAppContext";

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
          Sauvegardes
        </h1>
        <Button
          text="Tout supprimer"
          color="btn-danger"
          defaultAnim={false}
          handleClick={removeAllSavedPost}
        />
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
        {savedPost.length > 0 ? (
          savedPost.map((post) => (
            <PostCard
              isSaved
              key={post.id}
              {...post}
              isAdmin={auth.roles === "admin"}
              handleSavePost={removeSavedPost}
            />
          ))
        ) : (
          <p className="text-subtitle-3 text-center w-full dark:text-white tetx-black">
            Aucun evénement sauvegardé
          </p>
        )}
      </div>
    </section>
  );
};

export default SavedPost;
