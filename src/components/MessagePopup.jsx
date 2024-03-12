import React from "react";

const MessagePopup = ({ className, error = false, message }) => {
  return (
    <div className={className}>
      <div
        className={`${
          error
            ? "bg-danger dark:text-danger dark:bg-danger-10 dark:border dark:border-danger"
            : " bg-primary dark:border dark:border-primary dark:bg-primary-10 dark:text-primary "
        } text-white px-8 py-4 shadow-sm flex items-center gap-4 justify-between rounded-lg text-lead min-w-[230px] max-w-[80%]`}
      >
        <i
          className={
            error
              ? "bi bi-exclamation-circle text-icon"
              : " bi bi-check-circle text-icon"
          }
        ></i>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default MessagePopup;
