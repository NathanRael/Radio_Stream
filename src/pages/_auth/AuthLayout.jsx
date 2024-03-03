import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuth = false;
  return <>{isAuth ? <Navigate to="/user/home" /> : <Outlet />}</>;
};

export default AuthLayout;
