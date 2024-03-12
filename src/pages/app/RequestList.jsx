import PostedRequest from "../../components/PostedRequest";
import useGlobalContext from "../../hook/useGlobalContext";

const RequestList = () => {
  const { inView } = useGlobalContext();
  return (
    <section className={`app-box ${inView.requestList ? "" : "page-anim"} `}>
      <h1 className="max-xl:text-center text-subtitle-2 text-black dark:text-white mb-8">
        Requêtes Utilisateurs
      </h1>
      <section className=" grid xl:grid-cols-2  xl:place-content-between gap-y-6 w-full  place-items-center">
        <PostedRequest />
        <PostedRequest />
        <PostedRequest />
        <PostedRequest />
      </section>
    </section>
  );
};

export default RequestList;
