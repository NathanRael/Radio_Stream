import { Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const AdminLayout = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  return <>{auth.roles === "admin" ? <Outlet /> : navigate("/unauthorized")}</>;
};

export default AdminLayout;
