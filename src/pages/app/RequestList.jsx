import PostedRequest from "../../components/PostedRequest";

const RequestList = () => {
  return (
    <section className="px-4 w-full mb-8">
      <h1 className="text-subtitle-2 text-black dark:text-white mb-8">
        Requêtes Utilisateurs
      </h1>
      <section className=" grid grid-cols-2  place-content-between gap-y-6 w-full">
        <PostedRequest />
        <PostedRequest />
        <PostedRequest />
        <PostedRequest />
      </section>
    </section>
  );
};

export default RequestList;
