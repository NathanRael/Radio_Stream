const StepGrow = ({ text, disbled }) => {
  return (
    <div className="space-4 grow basis-1/2">
      <p
        className={`text-base ${
          disbled ? "text-white-10" : "text-white"
        } text-center`}
      >
        {text}
      </p>
      <div className="bg-white-10 rounded-lg h-2 ">
        <div className="w-[15%] h-full bg-primary rounded-lg"></div>
      </div>
    </div>
  );
};

export default StepGrow;
