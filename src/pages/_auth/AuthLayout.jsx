import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";
import { initBody } from "../../functions";

const AuthLayout = () => {
  const { isLoggedIn, auth } = useAuth();
  useEffect(() => {
    console.log("Login");
    initBody();
  }, []);
  return <>{auth.user ? <Navigate to="/user/home" /> : <Outlet />}</>;
};

export default AuthLayout;
