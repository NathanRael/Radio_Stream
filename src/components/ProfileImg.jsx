import profileImage from "../assets/images/profile.png";

const ProfileImg = ({ image, handleClick, size = "size-[44px]" }) => {
  return (
    <img
      src={image || profileImage}
      className={`cursor-pointer rounded-full object-cover ${size} `}
      alt=""
      onClick={handleClick}
    />
  );
};

export default ProfileImg;
