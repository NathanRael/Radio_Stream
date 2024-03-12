import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useState(
    JSON.parse(sessionStorage.getItem("user")) || {}
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    axios
      .get("http://localhost/Rofia/api/logout.php/")
      .then((res) => console.log(res?.data));
    sessionStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  };

  const storeAuth = (data) => {
    setAuth(data);
    console.log(data);
    sessionStorage.setItem("user", JSON.stringify(data));
  };

  const checkIsLoggedIn = () => {
    axios.get("http://localhost/Rofia/api/login.php/").then((res) => {
      if (res.status === 200) {
        setIsLoggedIn(res.data.user);
      }
    });
  };

  useEffect(() => {
    checkIsLoggedIn();
  }, [location.pathname]);

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, logout, isLoggedIn, storeAuth, setIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
