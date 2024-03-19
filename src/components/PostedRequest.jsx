import { useEffect, useState } from "react";
import { getDateDiff } from "../functions";
import Badge from "./Badge";
import { Icon, IconLg } from "./Buttons";

const PostedRequest = ({ id, title, desc, date, user, handleReqState }) => {
  const [dateDiff, setDateDiff] = useState(
    getDateDiff(new Date(date), new Date())
  );

  return (
    <section className="p-6 flex items-center flex-col justify-center gap-6 rounded-3xl dark:border bg-light border-0 dark:bg-black dark:border-white-10 max-sm:w-[100%] w-[464px]">
      <div className="max-md:flex-col max-md:gap-4 flex items-center justify-between w-full">
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-subtitle-3  text-primary w-full max-md:text-center">
            {user[0].toUpperCase() + user.slice(1)}
          </h2>
          <h1 className="lead text-black dark:text-white w-full  max-md:text-center">
            {title}
          </h1>
        </div>
        <Badge text={dateDiff} />
      </div>
      <div className="line w-full"></div>
      <div className="text-black-60 dark:text-white-60">{desc}</div>
      <div className="line w-full "></div>
      <div className="w-full flex items-center justify-evenly">
        <Icon
          icon="bi bi-x-lg"
          color="btn-danger"
          handleClick={() => handleReqState(id, "rejetée")}
        />
        <Icon
          icon="bi bi-check"
          color="btn-success"
          handleClick={() => handleReqState(id, "acceptée")}
        />
      </div>
    </section>
  );
};

export default PostedRequest;
