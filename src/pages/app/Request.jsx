import { useEffect, useState } from "react";
import { Button } from "../../components/Buttons";
import { Input, Textarea } from "../../components/Inputs";
import { UserRequest } from "../../components/UserRequest";
import useGlobalContext from "../../hook/useGlobalContext";
import axios from "axios";
import { baseUrl } from "../../constants";
import useAuth from "../../hook/useAuth";

const Request = () => {
  const { inView } = useGlobalContext();
  const { auth, setSuccessMsg, setErrMsg, resetMessage } = useAuth();
  const [reqData, setReqData] = useState([]);

  const getReqData = () => {
    axios
      .get(`${baseUrl}/userRequest.php/${auth.id}`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          setReqData(res?.data?.data);
          setSuccessMsg(res?.data?.data?.success);
        }
      })
      .catch((e) => {
        console.log(e?.response?.data?.error);
        setErrMsg(e?.response?.data?.error);
      })
      .finally(() => {
        resetMessage();
      });
  };

  useEffect(() => {
    getReqData();
  }, []);
  return (
    <section className={`app-box ${inView.request ? "" : "page-anim"} `}>
      <div className="flex items-start justify-between max-xl:gap-10 max-xl:flex-col-reverse  max-xl:items-center flex-wrap">
        <div className="basis-1/2">
          <h1 className="max-xl:text-center text-subtitle-2 text-black dark:text-white mb-8">
            Liste des requêtes
          </h1>
          <div className="flex flex-col items-start justify-center gap-8">
            {reqData.map((req) => (
              <UserRequest key={req.id} {...req} />
            ))}
          </div>
        </div>
        <div className="xl:hidden line"></div>
        <div className="  basis-1/2">
          <h1 className="max-xl:text-center text-subtitle-2 text-black dark:text-white mb-8">
            Nouvelle requête
          </h1>
          <div className="flex flex-col items-start justify-center gap-8 w-fit">
            <Input title="Titre" placeholder="Entrer le titre du requête " />
            <Textarea
              title="Description"
              placeholder="Entrer la desciprtion du requête"
            />
            <div className="flex w-full flex-col">
              <Button text="Envoyer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Request;
