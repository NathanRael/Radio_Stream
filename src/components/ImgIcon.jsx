const ImgIcon = ({ icon, size = "text-[84px]", className }) => {
  return (
    <div className={className}>
      <i className={`${icon} ${size}`}></i>
    </div>
  );
};

export default ImgIcon;
