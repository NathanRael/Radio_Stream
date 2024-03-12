import { useEffect, useState } from "react";
import { Button } from "../../components/Buttons";
import PostCard from "../../components/PostCard";
import useGlobalContext from "../../hook/useGlobalContext";
import axios from "axios";
import { baseUrl } from "../../constants";
import useAuth from "../../hook/useAuth";

const SavedPost = () => {
  const { inView } = useGlobalContext();
  const { auth, setSuccessMsg, setErrMsg, resetMessage } = useAuth();
  const [postData, setPostData] = useState([]);

  const getSavedEvent = () => {
    axios
      .get(`${baseUrl}/savedEvent.php/${auth.id}`)
      .then((res) => {
        if (res.status !== 200) return console.log(res.data.error);
        setPostData(res?.data?.data);
      })
      .catch((e) => console.log(e));
  };

  const handleUnsavePost = (id) => {
    axios
      .delete(`${baseUrl}/savedEvent.php/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setSuccessMsg("Saved event removed");
        }
      })
      .catch((e) => {
        setErrMsg(e.response.data.error);
      })
      .finally(() => {
        resetMessage();
      });
  };

  useEffect(() => {
    getSavedEvent();
  }, []);
  return (
    <section className={`app-box ${inView.savedPost ? "" : "page-anim"} `}>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-subtitle-2 text-black dark:text-white">
          Sauvegardes
        </h1>
        <Button text="Tout supprimer" color="btn-danger" defaultAnim={false} />
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
        {postData.length > 0 ? (
          postData.map((post) => (
            <PostCard
              isSaved
              key={post.id}
              {...post}
              isAdmin={auth.roles === "admin"}
              handleSavePost={handleUnsavePost}
            />
          ))
        ) : (
          <p className="text-subtitle-2 text-center w-full dark:text-white tetx-black">
            No event saved
          </p>
        )}
      </div>
    </section>
  );
};

export default SavedPost;
