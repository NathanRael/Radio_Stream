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

  const [auth, setAuth] = useState(
    JSON.parse(sessionStorage.getItem("user")) || {}
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    axios.get(`${baseUrl}/logout.php`).then((res) => console.log(res?.data));
    sessionStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  };

  const resetMessage = () => {
    setTimeout(() => {
      setSuccessMsg("");
      setErrMsg("");
    }, 2000);
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
        storeAuth(response?.data?.session);
        setIsLoggedIn(response?.data?.session);
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
    sessionStorage.setItem("user", JSON.stringify(data));
  };

  const checkIsLoggedIn = async () => {
    const res = await axios.get(`${baseUrl}/login.php/`, {
      withCredentials: true,
    });

    if (res.status === 200) {
      console.log(res.data.user);
      setIsLoggedIn(res.data.user);
    }
  };

  useEffect(() => {
    checkIsLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        logout,
        isLoggedIn,
        storeAuth,
        successMsg,
        errMsg,
        setErrMsg,
        setSuccessMsg,
        login,
        checkIsLoggedIn,
        resetMessage,
        sendingReq,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
