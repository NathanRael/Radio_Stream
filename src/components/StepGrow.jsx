const StepGrow = ({ text, disbled }) => {
  return (
    <div className="space-4 grow basis-1/2">
      <p
        className={`text-base ${
          disbled ? "text-black-10 dark:text-white-10" : "text-black dark:text-white"
        } text-center`}
      >
        {text}
      </p>
      <div className="bg-black-10 dark:bg-white-10 rounded-lg h-2 ">
        <div className="w-[15%] h-full bg-primary rounded-lg"></div>
      </div>
    </div>
  );
};

export default StepGrow;
