import "../animations/Loader.css";

const LoadingIcon = ({ animated = true, icon }) => {
  return (
    <div className="flex items-center justify-center radio-loader gap-2">
      <div className="bg-primary  w-2 "></div>
      <div className=" bg-primary w-2"></div>
      {/* <div className="w-8  h-10 bg-primary"></div> */}
      <div className="bg-primary w-2"></div>
      <div className="bg-primary  w-2"></div>
    </div>
  );
};

export default LoadingIcon;
