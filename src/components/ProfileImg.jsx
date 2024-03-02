import profileImage from  "../assets/images/profile.png"

const ProfileImg = ({image = profileImage, handleClick, size = "44"}) => {
  return (
    <img src={profileImage} className="rounded-full cursor-pointer" width={size} height={size} alt=""  onClick={handleClick}/>
  )
}

export default ProfileImg