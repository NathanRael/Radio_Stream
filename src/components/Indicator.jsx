import React from "react";

const Indicator = ({ message ,success = true}) => {
  return (
    <div
      className={
        message !== ""
          ? `fixed visible top-0 left-1/2 -translate-x-1/2 bg-primary-10 ${success ? 'text-success  border-success  ' : 'text-danger  border-danger  ' } rounded-md py-4 px-8 mx-auto mt-4  flex items-center justify-between text-lead w-[80%] md:w-[60%]`
          : "hidden"
      }
    >
      <i className="bi bi-x-lg cursor-pointer"></i>
      <p>{message}</p>
    </div>
  );
};

export default Indicator;
