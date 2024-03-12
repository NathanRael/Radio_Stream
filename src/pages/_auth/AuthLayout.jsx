import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { useEffect } from "react";

const AuthLayout = () => {
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    console.log('Login')
  }, [])
  return <>{isLoggedIn ? <Navigate to="/user/home" /> : <Outlet />}</>;
};

export default AuthLayout;
