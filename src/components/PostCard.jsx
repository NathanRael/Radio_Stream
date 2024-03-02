import Badge from "../components/Badge";
import { Button, Icon, IconLg } from "./Buttons";
import PostImage from "../assets/images/profile.png";
import "../animations/PostCard.css";

const PostCard = ({title,desc,postDate, icon  = "bi bi-bookmark", iconColor = "bg-transparent text-white"}) => {
  return (
    <div className="relative overflow-hidden px-3 py-6 rounded-xl border border-black-10 dark:border-white-10 w-[332px] card-gradient">
        <img src={PostImage} className="absolute  top-0 left-0  -z-10 object-cover h-full " alt="" />
      <div className="flex items-start justify-between flex-col min-h-[320px]">
        <Badge text="Il y a 2 heure " color="bg-white-40 text-white " />
        <div className="w-full space-y-6">
          <p className="text-base text-white">Color Party</p>
          <p className="text-small-1 font-FuturaThin text-white-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            praesentium eum non iusto error quo beatae commodi ipsam, voluptas
            animi molestias accusantium excepturi quae molestiae repudiandae ...
          </p>
          <div className="flex items-center justify-between">
            <Button text="Afficher plus" color="bg-white"/>
            <IconLg icon={icon} color={iconColor}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
