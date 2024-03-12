import { useEffect, useState } from "react";
import { Button } from "../../components/Buttons";
import PostCard from "../../components/PostCard";
import useGlobalContext from "../../hook/useGlobalContext";
import axios from "axios";
import { baseUrl } from "../../constants";
import useAuth from "../../hook/useAuth";

const SavedPost = () => {
  const { inView } = useGlobalContext();
  const { auth } = useAuth();
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseUrl}/event.php`)
      .then((res) => {
        if (res.status !== 200) return console.log(res.data.error);
        setPostData(res?.data?.data);
      })
      .catch((e) => console.log(e));
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
        {postData.map((post) => (
          <PostCard
            icon="bi bi-bookmark-dash"
            iconColor="text-danger"
            key={post.id}
            {...post}
            isAdmin={auth.roles === "admin"}
          />
        ))}
      </div>
    </section>
  );
};

export default SavedPost;
