import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const AuthLayout = () => {
  // const { isLoggedIn } = useAuth();
  const isLoggedIn = false;

  // return <>{isLoggedIn ? <Navigate to="/user/home" /> : <Outlet />}</>;
  return (
    <>
      {" "}
      <Outlet />
    </>
  );
};

export default AuthLayout;
