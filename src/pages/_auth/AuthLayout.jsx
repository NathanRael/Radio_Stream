import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const AuthLayout = () => {
  const { isLoggedIn } = useAuth();

  return <>{isLoggedIn ? <Navigate to="/user/home" /> : <Outlet />}</>;
};

export default AuthLayout;
