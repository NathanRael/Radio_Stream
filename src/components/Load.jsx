import LoadingIcon from "./LoadingIcon";

const Load = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div
          className={`
  transition duration-300 z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-black `}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <LoadingIcon />
          </div>
        </div>
      )}
    </>
  );
};

export default Load;
