import { ButtonIconLg, ButtonLg } from "../../components/Buttons";
import LoadingIcon from "../../components/LoadingIcon";
import PostCard from "../../components/PostCard";
import UseIntersection from "../../hook/UseIntersection";
import useGlobalContext from "../../hook/useGlobalContext";
import { POST, baseUrl } from "../../constants";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hook/useAuth";

const Home = () => {
  const { inView } = useGlobalContext();
  const { auth } = useAuth();

  const [postData, setPostData] = useState([]);
  const [containerRef, isVisible] = UseIntersection({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });

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
    <section className={`app-box ${inView.home ? "" : "page-anim"} `}>
      <h1
        ref={containerRef}
        className="text-black max-lg:text-center dark:text-white text-subtitle-2 mb-8"
      >
        Publication Récentes
      </h1>
      <div className="space-y-20">
        <div className="flex gap-6 flex-wrap items-center justify-center">
          {postData.map((post) => (
            <PostCard
              key={post.id}
              {...post}
              isAdmin={auth.roles === "admin"}
            />
          ))}
        </div>
        <div className="line"></div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center ">
          {postData.map((post) => (
            <PostCard
              key={post.id}
              {...post}
              isAdmin={auth.roles === "admin"}
            />
          ))}
        </div>
        <div className="w-full mx-auto flex justify-center">
          {/* <ButtonLg text="Voir Plus" /> */}
          <LoadingIcon />
        </div>
      </div>
    </section>
  );
};

export default Home;
