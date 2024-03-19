import Badge from "./Badge";
import { Button, Icon, IconLg } from "./Buttons";
import PostImage from "../assets/images/profile.png";
import "../animations/PostCard.css";
import { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDateDiff } from "../functions";
import ProfileImg from "./ProfileImg";
import { imageDir } from "../constants";

const SavedPostCard = ({
  id,
  postId,
  title,
  desc,
  date,
  icon = "bi bi-bookmark",
  iconColor = "bg-transparent text-white",
  isAdmin = false,
  handleDelete,
  handleSavePost,
  isSaved = false,
  saveClicked = false,
  imageUrl,
  className,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const [saveIconUpdate, setSaveIconUpdate] = useState(saveClicked);
  const maxLen = 80;
  return (
    <div
      className={` relative overflow-hidden p-3 rounded-3xl border border-black-10  card-gradient ${className} `}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={imageUrl !== null ? imageDir + imageUrl : PostImage}
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
        <div className="font-FuturaThin text-subtitle-3 text-white w-full text-center">
          {title}
        </div>
        <Badge
          text={"Il y a " + getDateDiff(new Date(date), new Date())}
          color="bg-white-40 text-white "
        />
      </div>
      <div
        className={`bg-black-60 p-4 rounded-2xl post-card-trans delay-150 flex items-start justify-between flex-col min-h-[360px]  gap-10 ${
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
            {showMore
              ? desc
              : desc.length >= maxLen
              ? desc?.slice(0, maxLen) + "..."
              : desc}
          </p>
          <div className="flex items-center justify-between">
            {desc.length >= maxLen && (
              <Button
                text={showMore ? "Reduire" : "Afficher plus"}
                color="bg-white"
                handleClick={() => setShowMore((prev) => !prev)}
              />
            )}
            {/* {isAdmin && (
                <>
                  <IconLg
                    handleClick={() =>
                      navigate(`/user/postList/${isSaved ? postId : id}/edit`)
                    }
                    icon="bi bi-pencil-square"
                    color="text-primary"
                  />
                  <IconLg
                    handleClick={() => handleDelete(id)}
                    icon="bi bi-trash"
                    color="text-danger"
                  />
                </>
              )} */}
            {isSaved ? (
              <IconLg
                handleClick={() => handleSavePost(id)}
                icon="bi bi-bookmark-dash"
                color="text-danger"
              />
            ) : (
              <IconLg
                handleClick={() => {
                  saveClicked ? "" : handleSavePost(id);
                  setSaveIconUpdate(true);
                }}
                icon={
                  saveClicked || saveIconUpdate
                    ? "bi bi-bookmark-fill"
                    : "bi bi-bookmark"
                }
                color={
                  saveClicked || saveIconUpdate ? "text-primary" : "text-white"
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedPostCard;
