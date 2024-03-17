import React from "react";

const PostCardLoading = () => {
  return (
    <div className="relative shadow-md dark:shadow-none flex max-md:w-full items-between justify-between p-4 rounded-xl border border-white-10 w-[60%] flex-col gap-6">
      <div className="animate-pulse flex items-center justify-between ">
        <div className="flex gap-2 items-center">
          <div className="w-11 h-11 rounded-full bg-black-10 dark:bg-white-10"></div>
          <div className="flex flex-col justify-center items-start space-y-4 w-[128px]">
            <p className="text-lead w-full h-4 bg-black-10 dark:bg-white-10 rounded-full"></p>
            <p className="text-lead w-1/2 h-4 bg-black-10 dark:bg-white-10 rounded-full"></p>
          </div>
        </div>
        {/* <div className="bg-black-10 dark:bg-white-10 h-10 w-4 rounded-full"></div> */}
      </div>
      <div className="animate-pulse w-full bg-black-10 dark:bg-white-10 rounded-lg h-14">
        <p className="text-small-1 font-FuturaThin text-black-40 dark:text-white-40"></p>

        <p className="cursor-pointer text-black-60 dark:text-white-60 text-base font-FuturaThin"></p>
      </div>
      <div
        alt=""
        className="animate-pulse rounded-xl object-cover w-full h-[320px] bg-black-10 dark:bg-white-10"
      />
      <div className="mx-auto flex justify-between w-full"></div>
    </div>
  );
};

export default PostCardLoading;
