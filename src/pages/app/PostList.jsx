import axios from "axios";
import { Button } from "../../components/Buttons";
import { FileInput, Input, Textarea } from "../../components/Inputs";
import PostCard from "../../components/PostCard";
import { baseUrl } from "../../constants";
import useGlobalContext from "../../hook/useGlobalContext";
import { useEffect, useRef, useState } from "react";
import MessagePopup from "../../components/MessagePopup";
import useAuth from "../../hook/useAuth";
import useAppContext from "../../hook/useAppContext";

const PostList = () => {
  const { inView } = useGlobalContext();
  const { auth } = useAuth();
  const inputRef = useRef(null);
  const {
    savePost,
    removePost,
    postData,
    savedPost,
    getAllPost,
    setSuccessMsg,
    setErrMsg,
  } = useAppContext();
  const {resetMessage} = useAuth();

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    imageUrl: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "checkox" ? checked : value,
      };
    });
  };

  const newPost = () => {
    const { title, desc, imageUrl } = formData;
    if (title !== "" && desc !== "") {
      axios
        .post(`${baseUrl}/event.php`, {
          title,
          desc,
          imageUrl,
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data.success);
            getAllPost();
            setSuccessMsg(res.data.success);
            setFormData({
              title: "",
              desc: "",
              imageUrl: null,
            });
          }
        })
        .catch((e) => {
          console.log(e.response.data.error);
          setErrMsg(e.response.data.error);
        })
        .finally(() => {
          resetMessage();
        });
    }
  };

  const handleSubmitPost = () => {
    newPost();
  };

  useEffect(() => {
    getAllPost();
  }, []);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section className={`app-box ${inView.postList ? "" : "page-anim"} `}>
      <div className="flex items-start max-lg:flex-col-reverse max-lg:items-center max-lg:gap-10 justify-between">
        <div className="basis-1/2">
          <h1 className="text-subtitle-2 text-black dark:text-white mb-8">
            Liste des publications
          </h1>
          <div className="flex flex-col items-start justify-center gap-8">
            {postData.length > 0 ? (
              postData.map((post) => (
                <PostCard
                  key={post.id}
                  {...post}
                  isAdmin={auth.roles === "admin"}
                  handleSavePost={savePost}
                  saveClicked={savedPost.some((v) => v.postId === post.id)}
                  handleDelete={removePost}
                />
              ))
            ) : (
              <p className="text-subtitle-3 text-black dark:text-white">
                Aucune Publication
              </p>
            )}
          </div>
        </div>
        <div className="line lg:hidden"></div>
        <div className="  basis-1/2">
          <h1 className="text-subtitle-2 text-black dark:text-white mb-8">
            Nouvelle publications
          </h1>
          <form
            className="flex flex-col items-start justify-center gap-8 w-fit"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              value={formData.title}
              inputRef={inputRef}
              name="title"
              handleChange={handleInputChange}
              title="Titre"
              placeholder="Entrer le titre du requête "
            />
            <Textarea
              value={formData.desc}
              name="desc"
              handleChange={handleInputChange}
              title="Description"
              placeholder="Entrer la desciprtion du requête"
            />
            <div className="bg-black-10 dark:bg-white-10 rounded-lg w-full h-[240px] relative">
              <i className="bi bi-image text-black-60 dark:text-white-60 absolute text-[128px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
            </div>
            <FileInput />
            <div className="flex w-full flex-col mt-8">
              <Button
                disabled={formData.title === "" || formData.desc === ""}
                text="Publier"
                handleClick={handleSubmitPost}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PostList;
