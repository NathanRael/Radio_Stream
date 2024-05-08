import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { baseUrl } from "../constants";
axios.defaults.withCredentials = true;
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [sendingReq, setSendingReq] = useState(false);
  const [loading, setLoading] = useState(true);

  const [auth, setAuth] = useState(
    JSON.parse(sessionStorage.getItem("user")) || {}
  );

  const clearAllCokkie = () => {
    let cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf("=");
      let name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00GMT;path=/";
    }
  };

  const resetMessage = () => {
    setTimeout(() => {
      setSuccessMsg("");
      setErrMsg("");
    }, 2000);
  };

  const logout = () => {
    axios.get(`${baseUrl}/logout.php`).then((res) => console.log(res?.data));
    sessionStorage.clear();
    clearAllCokkie();
    navigate("/login");
  };

  const login = (data) => {
    const { email, password } = data;
    setSendingReq(true);
    axios
      .post(`${baseUrl}/login.php`, {
        email,
        password,
      })
      .then((response) => {
        setSuccessMsg(response?.data.success);
        storeAuth(response?.data?.data);
        console.log(response?.data.success);
        navigate("/user/home");
      })
      .catch((e) => {
        setErrMsg(e.response?.data?.error);
        console.log(e.response?.data);
        inputRef.current.focus();
      })
      .finally(() => {
        setTimeout(() => {
          setSendingReq(false);
        }, 300);
        setTimeout(() => {
          setErrMsg("");
          setSuccessMsg("");
        }, 2000);
      });
  };

  const storeAuth = (data) => {
    setAuth(data);
    // sessionStorage.setItem("user", JSON.stringify(data));
  };

  const getCurrentSession = async () => {
    setLoading(true);
    const res = await axios.get(`${baseUrl}/login.php/`, {
      withCredentials: true,
    });

    if (res.status === 200) {
      setAuth(res.data.data);
    }

    setLoading(false);
  };

  const PostCurrentSession = (data) => {
    axios
      .postForm(`${baseUrl}/session.php`, {
        id: data.id,
        name: data.name,
        email: data?.email,
        password: data?.password,
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getCurrentSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        logout,
        storeAuth,
        successMsg,
        errMsg,
        setErrMsg,
        setSuccessMsg,
        login,
        resetMessage,
        sendingReq,
        getCurrentSession,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
