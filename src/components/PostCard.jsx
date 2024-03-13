import Badge from "./Badge";
import { Button, Icon, IconLg } from "./Buttons";
import PostImage from "../assets/images/profile.png";
import "../animations/PostCard.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ABOUT_TEXT } from "../constants/index";
import { useNavigate } from "react-router-dom";
import { getDateDiff } from "../functions";

const PostCard = ({
  id,
  title,
  desc,
  date,
  icon = "bi bi-bookmark",
  iconColor = "bg-transparent text-white",
  isAdmin = false,
  handleDelete,
  handleSavePost,
  isSaved = false,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const maxLen = 320;
  return (
    <div
      className=" relative overflow-hidden px-3 py-6 rounded-xl border border-black-10 dark:border-white-10 w-[332px] card-gradient min-h-[360px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={PostImage}
        className={`${
          hover ? "scale-[1.1]" : ""
        }  transition duration-300 ease-out absolute  top-0 left-0  -z-10 object-cover h-full `}
        alt=""
      />
      <div
        className={`w-full post-card-trans ${
          hover ? "opacity-0 -translate-y-[10rem]" : ""
        } flex flex-col items-center gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <div className="text-subtitle-2 text-primary w-full text-center">
          {title}
        </div>
        <Badge
          text={"Il y a " + getDateDiff(new Date(date), new Date())}
          color="bg-white-40 text-white "
        />
      </div>
      <div
        className={`bg-black-60 p-4 rounded-xl post-card-trans delay-150 flex items-start justify-between flex-col min-h-[320px] gap-10 ${
          !hover ? "opacity-0 translate-y-[10rem]" : ""
        }`}
      >
        <Badge
          text={"Il y a " + getDateDiff(new Date(date), new Date())}
          color="bg-white-40 text-white "
        />
        <div className="w-full space-y-6 ">
          <p className="text-base text-white">{title}</p>
          <p className=" text-small-1 font-FuturaThin text-white-60 ">
            {showMore ? desc : desc?.slice(0, maxLen) + " ..."}
          </p>
          <div className="flex items-center justify-between">
            {desc.length >= maxLen && (
              <Button
                text={showMore ? "Reduire" : "Afficher plus"}
                color="bg-white"
                handleClick={() => setShowMore((prev) => !prev)}
              />
            )}
            {isAdmin && (
              <>
                <IconLg
                  handleClick={() => navigate(`/user/postList/${id}/edit`)}
                  icon="bi bi-pencil"
                  color="text-primary"
                />
                <IconLg
                  handleClick={() => handleDelete(id)}
                  icon="bi bi-trash"
                  color="text-danger"
                />
              </>
            )}
            <IconLg
              handleClick={() => handleSavePost(id)}
              icon={`${isSaved ? "bi bi-bookmark-dash" : "bi bi-bookmark"}`}
              color={`${isSaved ? "text-danger" : "text-white"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
