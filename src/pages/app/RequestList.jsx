import axios from "axios";
import PostedRequest from "../../components/PostedRequest";
import { baseUrl } from "../../constants";
import useGlobalContext from "../../hook/useGlobalContext";
import { useCallback, useEffect, useMemo, useState } from "react";
import useAuth from "../../hook/useAuth";
import Empty from "../../components/Empty";
import useAppContext from "../../hook/useAppContext";

const RequestList = () => {
  const { inView } = useGlobalContext();
  const { setReqCount, reqCount } = useAppContext();
  const [reqData, setReqData] = useState([]);
  const { resetMessage, setErrMsg, setSuccessMsg } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const getReqData = () => {
    setIsLoading(true);
    axios
      .get(`${baseUrl}/userRequest.php/`)
      .then((res) => {
        if (res.status === 200) {
          const datas = res?.data?.data;
          setReqData(
            datas.filter(
              (data) => data.state !== "rejetée" && data.state !== "acceptée"
            )
          );
        }
      })
      .catch((e) => {
        console.log(e?.response?.data?.error);
        // setErrMsg(e?.response?.data?.error);
      })
      .finally(() => {
        resetMessage();
        setIsLoading(false);
      });
  };

  const updateReqStatus = (id, state) => {
    axios
      .patch(`${baseUrl}/userRequest.php/${id}`, {
        state,
      })
      .then((res) => {
        if (res.status === 200) {
          getReqData();
          setSuccessMsg(
            state === "acceptée" ? "Request Accepted" : "Request Rejected !"
          );
        }
      })
      .catch((e) => {
        setErrMsg(e.response.data.error);
      })
      .finally(() => {
        resetMessage();
      });
  };
  useEffect(() => {
    setReqCount(reqData.length);
  }, [reqData]);

  useEffect(() => {
    getReqData();
  }, []);

  return (
    <section className={`app-box ${inView.requestList ? "" : "page-anim"} `}>
      <h1 className="max-xl:text-center text-subtitle-2 text-black dark:text-white mb-8">
        <i className="bi bi-lock me-2"></i>
        Requêtes Utilisateurs
      </h1>

      {!isLoading ? (
        reqData.length > 0 ? (
          <section className=" grid xl:grid-cols-2  xl:place-content-between gap-y-6 w-full  place-items-center">
            {reqData.map((req) => (
              <PostedRequest
                key={req.id}
                {...req}
                handleReqState={updateReqStatus}
              />
            ))}
          </section>
        ) : (
          <Empty text="Pas de demande pour l'instant" />
        )
      ) : (
        ""
      )}
    </section>
  );
};

export default RequestList;
