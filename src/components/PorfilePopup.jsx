import { Link } from "react-router-dom";
import useAuth from "../hook/useAuth";

const PorfilePopup = () => {
  const { logout } = useAuth();
  return (
    <ul className="flex flex-col gap-6 items-center jusitify-center bg-white shadow-sm border w-[180px] dark:bg-black z-40 rounded-lg border-black-10 p-4 dark:border-white-10">
      <Link to="/user/profile" className="popup-link">
        Profile
      </Link>
      <div className="line w-full"></div>
      <a
        onClick={() => logout()}
        className="popup-link text-danger cursor-pointer"
      >
        Deconnexion
      </a>
    </ul>
  );
};

export default PorfilePopup;
