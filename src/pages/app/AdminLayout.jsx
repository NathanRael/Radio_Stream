import { Navigate, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const isAdmin = true;
  return (
    <>
      {isAdmin ? (
        <Outlet />
      ) : (
        <h1 className="text-title-2 tetx-center text-danger">Non-Autorisé</h1>
      )}
    </>
  );
};

export default AdminLayout;
