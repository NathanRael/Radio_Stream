import LoadingIcon from "../../components/LoadingIcon";
import UseIntersection from "../../hook/UseIntersection";
import useGlobalContext from "../../hook/useGlobalContext";
import { Suspense, lazy, useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hook/useAuth";
import useAppContext from "../../hook/useAppContext";
import PostCardLoading from "../../animations/PostCardLoading";
import Empty from "../../components/Empty";
axios.defaults.withCredentials = true;
const PostCard = lazy(() => import("../../components/PostCard"));

const Home = () => {
  const { inView } = useGlobalContext();
  const { auth } = useAuth();
  const {
    savePost,
    getSavedPost,
    postData,
    postDataLen,
    savedPost,
    getAllPost,
    removePost,
    search,
    searchPost,
    searchLoading,
  } = useAppContext();
  const [actualDataLen, setactualDataLen] = useState(3);

  const [containerRef, isVisible] = UseIntersection({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });
  const [loadRef, isLoadRefVisible] = UseIntersection({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });

  useEffect(() => {
    getAllPost();
    getSavedPost();
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      isLoadRefVisible
        ? setactualDataLen((prev) =>
            actualDataLen + 1 <= postDataLen ? prev + 1 : postDataLen
          )
        : null;
    };
    setTimeout(handleLoad, 1000);
    return () => {
      clearTimeout(handleLoad);
    };
  }, [isLoadRefVisible, postDataLen]);

  useEffect(() => {
    searchPost();
  }, [search]);

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
          {searchLoading ? (
            <PostCardLoading />
          ) : postData?.length > 0 ? (
            postData?.slice(0, actualDataLen).map((post) => (
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
            ))
          ) : (
            <Empty text="Aucune publication trouvée" />
          )}
        </div>
        {postData?.length > 0 && (
          <div ref={loadRef} className="w-full mx-auto">
            <LoadingIcon />
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
