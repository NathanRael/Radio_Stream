import { Link, useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();
  return (
    <section className="mt-20">
      <p className="text-center text-black dark:text-white text-title-2">
        {" "}
        404{" "}
      </p>
      <p className="text-black-60 dark:text-white-60 text-center text-subtitle-1">
        Page not found
      </p>
      <p onClick={() => navigate(-1)} className="cursor-pointer text-lead text-primary text-center">Return Back</p>
    </section>
  );
};

export default NoPage;
