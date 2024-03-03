const StepGrow = ({ text, disabled, full = false }) => {
  return (
    <div className=" space-4 grow basis-1/2">
      <p
        className={` text-base transition-all duration-200 delay-[0.5s] ${
          disabled ? "text-black-10 dark:text-white-10" : "text-black dark:text-white"
        } text-center`}
      >
        {text}
      </p>
      <div className="bg-black-10 dark:bg-white-10 rounded-lg h-2 ">
        <div className={`${full ? 'size-[100%]' : 'size-[0%]'}  h-full bg-primary rounded-lg  transition-all duration-200 delay-[0.2s]`}></div>
      </div>
    </div>
  );
};

export default StepGrow;
