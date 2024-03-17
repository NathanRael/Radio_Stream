import axios from "axios";
import { Button } from "../../components/Buttons";
import { FileInput, Input, Textarea } from "../../components/Inputs";
import { baseUrl } from "../../constants";
import useGlobalContext from "../../hook/useGlobalContext";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import MessagePopup from "../../components/MessagePopup";
import useAuth from "../../hook/useAuth";
import useAppContext from "../../hook/useAppContext";
import PostCardLoading from "../../animations/PostCardLoading";
import Empty from "../../components/Empty";
const PostCard = lazy(() => import("../../components/PostCard"));

const PostList = () => {
  const { inView } = useGlobalContext();
  const inputRef = useRef(null);
  const { savePost, removePost, postData, savedPost, getAllPost } =
    useAppContext();
  const { resetMessage, auth, setErrMsg, setSuccessMsg } = useAuth();
  const [selectedFile, setSelectedFile] = useState({
    name: "",
    path: "",
  });

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    imageUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "file" ? files[0] : value,
      };
    });
  };

  const newPost = () => {
    const { title, desc, imageUrl } = formData;
    if (title !== "" && desc !== "") {
      axios
        .postForm(`${baseUrl}/event.php`, {
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
          console.log(e.response?.data?.error);
          setErrMsg(e.response?.data?.error);
        })
        .finally(() => {
          resetMessage();
          setSelectedFile({
            name: "",
            path: "",
          });
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
                <Suspense fallback={<PostCardLoading />}>
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
              <Empty text="Aucune publication" />
            )}
          </div>
        </div>
        <div className="line lg:hidden"></div>
        <div className="  basis-1/2">
          <h1 className="text-subtitle-2 text-black dark:text-white mb-8">
            <i className="bi bi-plus-circle me-2"></i>
            Nouvelle publications
          </h1>
          <form
            className="flex flex-col items-start justify-center gap-8 w-min"
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
            {selectedFile?.path ? (
              <img
                src={selectedFile?.path}
                alt=""
                className=" w-full h-[240px] rounded-lg object-cover"
              />
            ) : (
              <div className="bg-black-10 dark:bg-white-10 rounded-lg  w-full flex  h-[240px] relative ">
                <i className="bi bi-image text-black-60 dark:text-white-60 absolute text-[128px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
              </div>
            )}
            <FileInput
              name="imageUrl"
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
              handleChange={handleInputChange}
            />
            <div className="flex w-full flex-col mt-8">
              <Button
                disabled={
                  formData.title === "" ||
                  formData.desc === "" ||
                  formData.imageUrl === ""
                }
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
