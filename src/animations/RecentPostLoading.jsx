import React from "react";

const RecentPostLoading = () => {
  return (
    <div className="relative overflow-hidden p-3 rounded-2xl  shadow-md bg-light dark:bg-load    w-[324px] min-h-[360px] ">
      <div className="animate-pulse absolute top-[128px] left-1/2 -translate-x-1/2   h-4 rounded-md w-[40%] space-y-4">
        <div className="w-full rounded-md h-4 bg-black-10 dark:bg-white-10"></div>
        <div className="mx-auto w-[60%] rounded-md h-4 bg-black-10 dark:bg-white-10"></div>
      </div>
    </div>
  );
};

export default RecentPostLoading;
