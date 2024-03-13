import axios from "axios";
import PostedRequest from "../../components/PostedRequest";
import { baseUrl } from "../../constants";
import useGlobalContext from "../../hook/useGlobalContext";
import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";

const RequestList = () => {
  const { inView } = useGlobalContext();
  const [reqData, setReqData] = useState([]);
  const {resetMessage, setErrMsg, setSuccessMsg} = useAuth();
  const getReqData = () => {
    axios
      .get(`${baseUrl}/userRequest.php/`)
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
    <section className={`app-box ${inView.requestList ? "" : "page-anim"} `}>
      <h1 className="max-xl:text-center text-subtitle-2 text-black dark:text-white mb-8">
        Requêtes Utilisateurs
      </h1>
      <section className=" grid xl:grid-cols-2  xl:place-content-between gap-y-6 w-full  place-items-center">
        {reqData.map((req) => (
          <PostedRequest key={req.id} {...req} />
        ))}
      </section>
    </section>
  );
};

export default RequestList;
