import { useNavigate, useParams } from "react-router-dom";
import { Button, IconLg } from "../../components/Buttons";
import { FileInput, Input, Textarea } from "../../components/Inputs";
import useGlobalContext from "../../hook/useGlobalContext";
import { useEffect, useRef, useState } from "react";

const EditPost = () => {
  const { inView } = useGlobalContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [postData, setPostData] = useState([]);
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
        });
    }
  };

  useEffect(() => {

  }, [])
  return (
    <section className={`app-box ${inView.editPost ? "" : "page-anim"} `}>
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
          <form className="flex flex-col items-start justify-center gap-8 w-fit" onSubmit={handleSubmitPost}>
            <Input
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
            <div className="bg-black-10 dark:bg-white-10 rounded-lg w-full h-[240px] relative">
              <i className="bi bi-image text-black-60 dark:text-white-60 absolute text-[128px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
            </div>
            <FileInput />
            <div className="flex w-full flex-col mt-8">
              <Button
                text="Modifier"
                disabled={formData.title === "" || formData.desc === ""}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditPost;
