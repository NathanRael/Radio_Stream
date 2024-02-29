import '../animations/Button.css';

export const Button = ({
  text = "button",
  handleClick,
  color = 'btn-primary',
}) => {
  return (
    <button
      onClick={handleClick}
      className={`${color} px-4 py-2 rounded-full text-small font-FuturaMd text-black btn-anim`}
    >
      <p>{text}</p>
    </button>
  );
};

export const ButtonLg = ({
  text = "button",
  handleClick,
  color = 'btn-primary',
}) => {

  return (
    <button
      onClick={handleClick}
      className={`${color} px-8 py-4 rounded-full text-base  font-FuturaMd text-black btn-anim`}
    >
      <p>{text}</p>
    </button>
  );
};

export const ButtonIcon = ({
  text = "button",
  icon = "bi bi-arrow-left",
  color = "btn-primary",
  handleClick,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`${color} px-4 py-3 rounded-full text-base  text-black flex items-center justify-center gap-x-3 btn-anim`}
    >
      <i className={`${icon} text-small font-FuturaMd`}></i>
      <p>{text}</p>
    </button>
  );
};

export const ButtonIconLg = ({
  text = "button",
  icon = "bi bi-arrow-left",
  color = "btn-primary",
  handleClick,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`${color} px-8 py-4 rounded-full text-base font-FuturaMd text-black flex items-center justify-center gap-x-4 btn-anim`}
    >
      <i className={`${icon} text-[20px]`}></i>
      <p >{text}</p>
    </button>
  );
};

export const Icon = ({ icon = "bi bi-arrow-left", color = "btn-primary", handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`${color} dark-text-white rounded-full text-base font-robotoMd text-black p-3 flex items-center justify-center w-10 h-10 icon-anim`}
    >
      <i className={`${icon} font-FuturaMd`}></i>
    </button>
  );
};

export const IconLg = ({ icon = "bi bi-arrow-left", color = "btn-primary", handleClick, iconSize = 'text-icon' }) => {
  return (
    <button
      onClick={handleClick}
      className={`${color} dark:text-white rounded-full text-icon font-FuturaMd text-black p-4 flex items-center justify-center w-11 h-11 cursor-pointer icon-anim`}
    >
      <i className={`${icon} ${iconSize}`}></i>
    </button>
  );
};
