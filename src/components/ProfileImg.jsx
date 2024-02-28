import profileImage from  "../assets/images/profile.png"

const ProfileImg = ({image = profileImage, handleClick}) => {
  return (
    <img src={profileImage} className="rounded-full cursor-pointer" width={44} height={44} alt=""  onClick={handleClick}/>
  )
}

export default ProfileImg