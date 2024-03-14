import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/Buttons";
import { Input, Textarea } from "../../components/Inputs";
import { UserRequest } from "../../components/UserRequest";
import useGlobalContext from "../../hook/useGlobalContext";
import axios from "axios";
import { baseUrl } from "../../constants";
import useAuth from "../../hook/useAuth";

const Request = () => {
  const { inView } = useGlobalContext();
  const inputRef = useRef(null);
  const { auth, setSuccessMsg, setErrMsg, resetMessage } = useAuth();
  const [reqData, setReqData] = useState([]);
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
        .post(`${baseUrl}/userRequest.php/${auth.id}`, {
          title,
          desc,
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
            getReqData();
          }
        })
        .catch((e) => {
          console.log(e.response.data.error);
          setErrMsg(e.response.data.error);
        });
    }
  };

  const getReqData = () => {
    axios
      .get(`${baseUrl}/userRequest.php/${auth.id}`)
      .then((res) => {
        if (res.status === 200) {
          setReqData(res?.data?.data);
          setSuccessMsg(res?.data?.data?.success);
        }
      })
      .catch((e) => {
        console.log(e?.response?.data?.error);
        // setErrMsg(e?.response?.data?.error);
      })
      .finally(() => {
        resetMessage();
      });
  };

  const deleteRequest = (id) => {
    axios.delete(`${baseUrl}/userRequest.php/${id}`).then((res) => {
      if (res.status === 200) {
        setReqData(reqData.filter((req) => req.id != id));
        setSuccessMsg(res?.data?.data?.success);
      }
    });
  };

  useEffect(() => {
    getReqData();
    inputRef.current.focus();
  }, []);
  return (
    <section className={`app-box ${inView.request ? "" : "page-anim"} `}>
      <div className="flex items-start justify-between max-xl:gap-10 max-xl:flex-col-reverse  max-xl:items-center flex-wrap">
        <div className="basis-1/2 w-full">
          <h1 className="max-xl:text-center text-subtitle-2 text-black dark:text-white mb-8">
            Liste des requêtes
          </h1>
          <div className="flex flex-col items-center xl:items-start justify-center gap-8">
            {reqData?.length > 0 ? (
              reqData.map((req) => (
                <UserRequest
                  key={req.id}
                  {...req}
                  handleDelete={deleteRequest}
                />
              ))
            ) : (
              <p className="text-subtitle-3 text-black dark:text-white">
                Pas de requête
              </p>
            )}
          </div>
        </div>
        <div className="xl:hidden line"></div>
        <div className="  basis-1/2">
          <h1 className="max-xl:text-center text-subtitle-2 text-black dark:text-white mb-8">
            Nouvelle requête
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

export default Request;
