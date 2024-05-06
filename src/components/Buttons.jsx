import { Link } from "react-router-dom";
import "../animations/Button.css";

export const Button = ({
  text = "button",
  handleClick,
  color = "bg-primary",
  defaultAnim = true,
  disabled = false,
}) => {
  return (
    <button
    disabled={disabled}
      onClick={handleClick}
      className={`${color} px-4 py-2 rounded-full text-small-1 font-FuturaMd  ${ defaultAnim ? "btn-anim" : "btn-anim-custom"
      } `}
    >
      <p>{text}</p>
    </button>
  );
};

export const ButtonLg = ({
  text = "button",
  handleClick,
  color = "bg-primary",
  defaultAnim = true,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={`${color} ${disabled ? "cursor-not-allowed" : "cursor-pointer" } px-8 py-4 rounded-full text-base  font-FuturaMd ${
        defaultAnim ? "btn-anim" : "btn-anim-custom"
      }`}
    >
      <p>{text}</p>
    </button>
  );
};

export const ButtonIcon = ({
  text = "button",
  icon = "bi bi-arrow-left",
  color = "bg-primary",
  handleClick,
  disabled = false,
}) => {
  return (
    <button
    disabled={disabled}
      onClick={handleClick}
      className={`${color} px-4 py-3 rounded-full text-base  flex items-center justify-center gap-x-3 btn-anim`}
    >
      <i className={`${icon} text-small font-FuturaMd`}></i>
      <p>{text}</p>
    </button>
  );
};

export const ButtonIconLg = ({
  text = "button",
  icon = "bi bi-arrow-left",
  color = "bg-primary",
  handleClick,
  link = null,
  disabled = false,
  animated
}) => {
  return (
    <>{
      !link ? (
        <button
        disabled={disabled}
        onClick={handleClick}
        className={`${color} px-8 py-4 rounded-full text-base font-FuturaMd text-black flex items-center justify-center gap-x-4 btn-anim`}
      >
        <i className={`${icon} ${animated ? "animate-spin" : ""} text-[20px]`}></i>
        <p>{text}</p>
      </button>
      ) : (
        <a href={link}
        onClick={handleClick}
        className={`${color} px-8 py-4 rounded-full text-base font-FuturaMd text-black flex items-center justify-center gap-x-4 btn-anim`}
      >
        <i className={`${icon} text-[20px]`}></i>
        <p>{text}</p>
      </a>
      )
    }
    </>
  );
};

export const Icon = ({
  icon = "bi bi-arrow-left",
  color = "bg-primary",
  handleClick,
  disabled = false,
}) => {
  return (
    <button
    disabled={disabled}
      onClick={handleClick}
      className={`${color}  rounded-full text-base font-robotoMd  p-3 flex items-center justify-center w-10 h-10 icon-anim`}
    >
      <i className={`${icon} font-FuturaMd`}></i>
    </button>
  );
};

export const IconLg = ({
  disabled = false,
  icon = "bi bi-arrow-left",
  color = "icon-white",
  handleClick,
  iconSize = "text-icon",
}) => {
  return (
    <button
    disabled={disabled}
      onClick={handleClick}
      className={`${color}  rounded-full text-icon font-FuturaMd  p-4 flex items-center justify-center w-11 h-11 cursor-pointer icon-anim`}
    >
      <i className={`${icon} ${iconSize}`}></i>
    </button>
  );
};
export const InputIcon = ({
  icon = "bi bi-arrow-left",
  color = "bg-primary",
  handleClick,
  iconSize = "text-icon",
  disabled = false,
}) => {
  return (
    <button
    disabled={disabled}
      onClick={handleClick}
      className={`${color} dark:text-white rounded-lg text-icon  font-FuturaMd text-black px-4 py-2 h-full flex items-center justify-center cursor-pointer input-file
      `}
    >
      <i className={`${icon} ${iconSize}`}></i>
    </button>
  );
};
