import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const isLoggedIn =
    JSON.parse(sessionStorage.getItem("loggedIn")) === true ? true : false;

  const storeAuth = (value) => {
    setAuth(value);
    sessionStorage.setItem("loggedIn", true);
    sessionStorage.setItem("user", JSON.stringify(value));
  };

  const logout = () => {
    axios.get("http://localhost/Rofia/api/login.php/");
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, logout, isLoggedIn, storeAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
