import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="text-title-2 text-white pt-40 flex flex-col gap-4">
        <p className="text-center mx-auto text-title-1">404</p>
        <p className="tetx-title-2 text-center text-white-40">Page not found</p>
        <Link to="/SignIn" className="text-base text-underline text-primary text-center mx-auto">Go home</Link>
    </section>
  );
};

export default NotFound;
