import { createContext, useEffect, useState } from "react";
import { POST, baseUrl } from "../constants/index.js";
import axios from "axios";
import useAuth from "../hook/useAuth.jsx";
const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [postData, setPostData] = useState([]);
  const [savedPost, setSavedPost] = useState([]);
  const { auth, setSuccessMsg, setErrMsg, resetMessage } = useAuth();

  const savePost = (id) => {
    axios
      .post(`${baseUrl}/savedEvent.php/${id}`, {
        userId: auth.id,
      })
      .then((e) => {
        if (e.status === 200) {
          setSuccessMsg(e.data.success);
        }
      })
      .catch((e) => {
        setErrMsg(e.response.data.error);
      })
      .finally(() => {
        resetMessage();
      });
  };

  const getSavedPost = () => {
    axios
      .get(`${baseUrl}/savedEvent.php/${auth.id}`)
      .then((res) => {
        if (res.status !== 200) return console.log(res.data.error);
        setSavedPost(res?.data?.data);
      })
      .catch((e) => console.log(e.response.data.error));
  };

  const removeSavedPost = (id) => {
    axios
      .delete(`${baseUrl}/savedEvent.php/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setSavedPost(savedPost.filter((post) => post.id !== id));
          setSuccessMsg("Saved event removed");
        }
      })
      .catch((e) => {
        setErrMsg(e.response.data.error);
      })
      .finally(() => {
        resetMessage();
      });
  };

  const removePost = (id) => {
    axios
      .delete(`${baseUrl}/event.php/${id}`)
      .then((res) => {
        if (res.status === 200) {
          getAllPost();
          setSuccessMsg("Event removed");
        }
      })
      .catch((e) => {
        setErrMsg(e.response.data.error);
      })
      .finally(() => {
        resetMessage();
      });
  };
  const removeAllSavedPost = () => {
    axios
      .delete(`${baseUrl}/savedEvent.php`)
      .then((res) => {
        if (res.status === 200) {
          setSavedPost([]);
          setSuccessMsg("All Saved event removed");
        }
      })
      .catch((e) => {
        setErrMsg(e.response.data.error);
      })
      .finally(() => {
        resetMessage();
      });
  };

  const getAllPost = () => {
    axios
      .get(`${baseUrl}/event.php`)
      .then((res) => {
        if (res.status !== 200) return console.log(res.data.error);
        setPostData(res?.data?.data);
      })
      .catch((e) => console.log(e));
  };
  return (
    <AppContext.Provider
      value={{
        savePost,
        removeSavedPost,
        removeAllSavedPost,
        savedPost,
        setSavedPost,
        postData,
        setPostData,
        getSavedPost,
        getAllPost,
        removePost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
