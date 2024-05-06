import Badge from "./Badge";
import { Button, Icon, IconLg } from "./Buttons";
import PostImage from "../assets/images/profile.png";
import "../animations/PostCard.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDateDiff } from "../functions";
import ProfileImg from "../components/ProfileImg";
import { hostIp } from "../constants";

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
  saveClicked = false,
  imageUrl,
}) => {
  const imageDir = `http://${hostIp}/Rofia/images/`;
  const [showMore, setShowMore] = useState(false);
  const [showCrud, setShowCrud] = useState(false);
  const navigate = useNavigate();
  const [saveIconUpdate, setSaveIconUpdate] = useState(saveClicked);
  const maxLen = 120;
  return (
    <div className="relative shadow-md dark:shadow-none flex max-md:w-full items-between justify-between p-4 rounded-3xl border border-white-10 w-[60%] flex-col gap-6">
      <div className="flex items-center justify-between ">
        <div className="flex gap-2 items-center">
          <ProfileImg size="size-[56px]" />
          <div className="flex flex-col justify-center items-start space-y-4">
            <p className="text-lead  text-black dark:text-white">{title}</p>
            <Badge text={"Il y a " + getDateDiff(new Date(date), new Date())} />
          </div>
        </div>
        {isAdmin && (
          <>
            {" "}
            <CrudPopup
              className={`transition duration-150 ease-in-out  absolute top-20 right-4 ${
                showCrud ? "scale-1 opacity-1" : "scale-[0.4]  opacity-0 "
              }`}
              handleEdit={() => navigate(`/user/postList/${id}/edit`)}
              handleDelete={() => handleDelete(id)}
            />
            <IconLg
              handleClick={() => {
                setShowCrud((prev) => !prev);
              }}
              icon="bi bi-three-dots-vertical"
              color="text-black dark:text-white"
            />
          </>
        )}
      </div>
      <div className="">
        <p
          onClick={() => setShowMore((prev) => !prev)}
          className="text-small-1 font-FuturaThin text-black-40 dark:text-white-40"
        >
          {" "}
          {showMore
            ? desc
            : desc.length >= maxLen
            ? desc?.slice(0, maxLen) + "..."
            : desc}
        </p>

        <p
          onClick={() => setShowMore((prev) => !prev)}
          className="cursor-pointer text-black-60 dark:text-white-60 text-base font-FuturaThin"
        >
          {showMore ? "Reduire" : "Afficher plus"}
        </p>
      </div>
      <img
        src={imageUrl !== null ? imageDir + imageUrl : PostImage}
        alt=""
        className="rounded-xl object-cover max-h-[620px]"
      />
      <div className="mx-auto flex justify-between w-full">
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
  );
};

export default PostCard;

const CrudPopup = ({ className, handleEdit, handleDelete }) => {
  return (
    <ul
      className={`flex flex-col gap-6 items-center jusitify-center bg-white shadow-sm border w-[180px] dark:bg-black z-40 rounded-lg border-black-10 p-4 dark:border-white-10 ${className}}`}
    >
      <p
        onClick={handleEdit}
        className="popup-link cursor-pointer text-primary"
      >
        <i className="bi bi-pencil-square"></i> Modifier
      </p>
      <a
        onClick={handleDelete}
        className="popup-link text-danger cursor-pointer"
      >
        <i className="bi bi-trash"></i> Supprimer
      </a>
    </ul>
  );
};

// const PostCard = ({
//   id,
//   title,
//   desc,
//   date,
//   icon = "bi bi-bookmark",
//   iconColor = "bg-transparent text-white",
//   isAdmin = false,
//   handleDelete,
//   handleSavePost,
//   isSaved = false,
//   saveClicked = false,
//   imageUrl,
// }) => {
//   const imageDir = "http://localhost/Rofia/images/";
//   const [showMore, setShowMore] = useState(false);
//   const [hover, setHover] = useState(false);
//   const navigate = useNavigate();
//   const [saveIconUpdate, setSaveIconUpdate] = useState(saveClicked);
//   const maxLen = 320;
//   return (
//     <div
//       className=" relative overflow-hidden p-3 rounded-2xl border border-black-10   w-[324px] card-gradient min-h-[360px]"
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       <img
//         src={imageUrl !== null ? imageDir + imageUrl : PostImage}
//         className={`${
//           hover ? "scale-[1.1]" : ""
//         }  transition duration-300 ease-out absolute  top-0 left-0  -z-10 object-cover h-full `}
//         alt=""
//       />
//       <div
//         className={`w-full post-card-trans ${
//           hover ? "opacity-0 -translate-y-[10rem]" : ""
//         } flex flex-col items-center gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
//       >
//         <div className="font-FuturaThin text-subtitle-3 text-white w-full text-center">
//           {title}
//         </div>
//         <Badge
//           text={"Il y a " + getDateDiff(new Date(date), new Date())}
//           color="bg-white-40 text-white "
//         />
//       </div>
//       <div
//         className={`bg-black-60 p-4 rounded-xl post-card-trans delay-150 flex items-start justify-between flex-col min-h-[360px]  gap-10 ${
//           !hover ? "opacity-0 translate-y-[10rem]" : ""
//         }`}
//       >
//         <Badge
//           text={"Il y a " + getDateDiff(new Date(date), new Date())}
//           color="bg-white-40 text-white "
//         />
//         <div className="w-full space-y-6 ">
//           <p className="text-base text-white">{title}</p>
//           <p className=" text-small-1 font-FuturaThin text-white-60 ">
//             {showMore
//               ? desc
//               : desc.length >= maxLen
//               ? desc?.slice(0, maxLen) + "..."
//               : desc}
//           </p>
//           <div className="flex items-center justify-between">
//             {desc.length >= maxLen && (
//               <Button
//                 text={showMore ? "Reduire" : "Afficher plus"}
//                 color="bg-white"
//                 handleClick={() => setShowMore((prev) => !prev)}
//               />
//             )}
//             {isAdmin && (
//               <>
//                 <IconLg
//                   handleClick={() => navigate(`/user/postList/${id}/edit`)}
//                   icon="bi bi-pencil-square"
//                   color="text-primary"
//                 />
//                 <IconLg
//                   handleClick={() => handleDelete(id)}
//                   icon="bi bi-trash"
//                   color="text-danger"
//                 />
//               </>
//             )}
//             {isSaved ? (
//               <IconLg
//                 handleClick={() => handleSavePost(id)}
//                 icon="bi bi-bookmark-dash"
//                 color="text-danger"
//               />
//             ) : (
//               <IconLg
//                 handleClick={() => {
//                   saveClicked ? "" : handleSavePost(id);
//                   setSaveIconUpdate(true);
//                 }}
//                 icon={
//                   saveClicked || saveIconUpdate
//                     ? "bi bi-bookmark-fill"
//                     : "bi bi-bookmark"
//                 }
//                 color={
//                   saveClicked || saveIconUpdate ? "text-primary" : "text-white"
//                 }
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostCard;
