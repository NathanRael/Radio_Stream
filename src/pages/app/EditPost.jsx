import { useNavigate, useParams } from "react-router-dom";
import { Button, IconLg } from "../../components/Buttons";
import { FileInput, Input, Textarea } from "../../components/Inputs";
import useGlobalContext from "../../hook/useGlobalContext";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { baseUrl, imageDir } from "../../constants";
import MessagePopup from "../../components/MessagePopup";
import Load from "../../components/Load";
import useAuth from "../../hook/useAuth";
axios.defaults.withCredentials = true;

const EditPost = () => {
  const { inView } = useGlobalContext();
  const { id } = useParams();
  const { setErrMsg, setSuccessMsg, resetMessage } = useAuth();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [isLoading, setIsloading] = useState(true);
  const [selectedFile, setSelectedFile] = useState({
    name: "",
    path: "",
  });
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    imageUrl: null,
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

  const resetInput = () => {
    setFormData({
      title: "",
      desc: "",
      imageUrl: null,
    });
    setSelectedFile({
      name: "",
      path: "",
    });
  };

  const handleSubmitPost = (e) => {
    const { title, desc, imageUrl } = formData;
    if (title !== "" && desc !== "") {
      axios
        .putForm(`${baseUrl}/event.php/${id}`, {
          title,
          desc,
          imageUrl,
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data.success);
            setSuccessMsg("Event updated successfully");
            resetInput();
            setTimeout(() => {
              navigate(-1);
              setSuccessMsg("");
            }, 2000);
          }
        })
        .catch((e) => {
          console.log(e.response.data.error);
          setErrMsg(e.response.data.error);
        });
    }
  };

  const getPost = async (id) => {
    setIsloading(true);
    const res = await axios.get(`${baseUrl}/event.php/${id}`);
    if (res.status === 200) {
      setFormData({
        title: res.data?.data?.title,
        desc: res.data.data.desc,
        imageUrl: res.data?.data?.imageUrl,
      });
      setSelectedFile({
        path: imageDir + res.data?.data?.imageUrl,
        name: res.data?.data?.imageUrl,
      });
    } else {
      setErrMsg(res.data.data.error);
    }
    setIsloading(false);
    resetMessage();
  };

  useEffect(() => {
    inputRef.current.focus();
    getPost(id);
  }, []);
  return (
    <section className={`app-box ${inView.editPost ? "" : "page-anim"} `}>
      <Load isLoading={isLoading} />

      <div className="flex items-start max-lg:flex-col-reverse max-lg:items-center max-lg:gap-10 justify-between">
        <div className="w-full flex flex-col items-center">
          <div className="w-full  flex items-center justify-center gap-2 mb-8">
            <IconLg
              icon="bi bi-arrow-left"
              color="text-black dark:text-white dark:bg-black"
              handleClick={() => navigate(-1)}
            />
            <h1 className="text-subtitle-2 text-black dark:text-white">
              Modifier une publication
            </h1>
          </div>
          <form
            className="flex flex-col items-start justify-center gap-8 w-min"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              inputRef={inputRef}
              title="Titre"
              placeholder="Entrer le titre du requête "
              name="title"
              value={formData.title}
              handleChange={handleInputChange}
            />
            <Textarea
              title="Description"
              placeholder="Entrer la desciprtion du requête"
              name="desc"
              value={formData.desc}
              handleChange={handleInputChange}
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
              setSelectedFile={setSelectedFile}
              selectedFile={selectedFile}
              handleChange={handleInputChange}
            />
            <div className="flex w-full flex-col mt-8">
              <Button
                handleClick={handleSubmitPost}
                text="Modifier"
                disabled={
                  formData.title === "" ||
                  formData.desc === "" ||
                  formData.imageUrl === null
                }
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditPost;
