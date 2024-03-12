import axios from "axios";
import { Button } from "../../components/Buttons";
import { FileInput, Input, Textarea } from "../../components/Inputs";
import PostCard from "../../components/PostCard";
import { baseUrl } from "../../constants";
import useGlobalContext from "../../hook/useGlobalContext";
import { useEffect, useRef, useState } from "react";
import MessagePopup from "../../components/MessagePopup";

const PostList = () => {
  const { inView } = useGlobalContext();
  const inputRef = useRef(null);
  const [postData, setPostData] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    imageUrl: null,
  });
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "checkox" ? checked : value,
      };
    });
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
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
            setSuccessMsg(res.data.success)
            setFormData({
              title: "",
              desc: "",
              imageUrl: null,
            });
          }
        })
        .catch((e) => {
          console.log(e.response.data.error);
          setErrMsg(e.response.data.error)
        });
    }
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/event.php`)
      .then((res) => {
        if (res.status !== 200) return console.log(res.data.error);
        setPostData(res?.data?.data);
      })
      .catch((e) => console.log(e));
  }, []);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section className={`app-box ${inView.postList ? "" : "page-anim"} `}>
      <MessagePopup
        message={successMsg}
        className={` ${
          successMsg
            ? "translate-x-0 opacity-1"
            : "translate-x-[10rem] opacity-0"
        }  fixed top-10 right-10 transition delay-30 z-50`}
      />
      <MessagePopup
        error
        message={errMsg}
        className={`${
          errMsg ? "translate-x-0 opacity-1" : "translate-x-[10rem] opacity-0"
        } fixed top-10 right-10 transition delay-30 z-50`}
      />
      <div className="flex items-start max-lg:flex-col-reverse max-lg:items-center max-lg:gap-10 justify-between">
        <div className="basis-1/2">
          <h1 className="text-subtitle-2 text-black dark:text-white mb-8">
            Liste des publications
          </h1>
          <div className="flex flex-col items-start justify-center gap-8">
            {postData.map((post) => (
              <PostCard
                key={post.id}
                {...post}
                isAdmin
              />
            ))}
          </div>
        </div>
        <div className="line lg:hidden"></div>
        <div className="  basis-1/2">
          <h1 className="text-subtitle-2 text-black dark:text-white mb-8">
            Nouvelle publications
          </h1>
          <form
            className="flex flex-col items-start justify-center gap-8 w-fit"
            onSubmit={handleSubmitPost}
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
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PostList;
