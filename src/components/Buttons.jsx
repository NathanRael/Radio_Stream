// const colorVar = {
//   'gradient-1' : 'bg-gradient-1 ',
//   'gradient-2' : 'btn-gradient-2',
//   'primary' : 'bg-primary'
// }

export const Button = ({
  text = "button",
  handleClick,
  color = 'btn-gradient-2',
}) => {
  return (
    <button
      onClick={handleClick}
      className={`${color} px-4 py-3 rounded-full text-base font-robotoMd text-light`}
    >
      {text}
    </button>
  );
};

export const ButtonLg = ({
  text = "button",
  handleClick,
  color = 'btn-gradient-2',
}) => {

  return (
    <button
      onClick={handleClick}
      className={`${color} px-8 py-4 rounded-full text-base font-robotoMd text-light w-full  `}
    >
      {text}
    </button>
  );
};

export const ButtonIcon = ({
  text = "button",
  icon = "bi bi-arrow-left",
  color = "btn-gradient-1",
  handleClick,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`${color} px-4 py-3 rounded-full text-base  text-light flex items-center justify-center gap-x-3 bg-primary`}
    >
      <i className={`${icon} text-base`}></i>
      <p>{text}</p>
    </button>
  );
};

export const ButtonIconLg = ({
  text = "button",
  icon = "bi bi-arrow-left",
  color = "btn-gradient-2",
  handleClick,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`${color} px-8 py-4 rounded-full text-base font-robotoMd text-light flex items-center justify-center gap-x-4 `}
    >
      <i className={`${icon} text-icon`}></i>
      <p>{text}</p>
    </button>
  );
};

export const Icon = ({ icon = "bi bi-arrow-left", color = "btn-gradient-2", handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`${color} rounded-full text-base font-robotoMd text-light p-3 flex items-center justify-center w-10 h-10`}
    >
      <i className={`${icon}`}></i>
    </button>
  );
};

export const IconLg = ({ icon = "bi bi-arrow-left", color = "btn-gradient-2", handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`${color} rounded-full text-base font-robotoMd text-light p-3 flex items-center justify-center w-11 h-11`}
    >
      <i className={`${icon} text-icon`}></i>
    </button>
  );
};
