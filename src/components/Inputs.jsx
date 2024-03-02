import { InputIcon } from "./Buttons";

export const InputLg = ({
  type = "",
  title = "",
  placeholder = "",
  errorMsg = "",
  name = "",
  isValid = false,
  handleChange,
  inputRef,
  value,
}) => {
  return (
    <div className="flex  flex-col gap-2 w-[320px] md:w-[380px]">
     <p className="text-base dark:text-white text-black">{title}</p>
      <input
        ref={inputRef}
        type={type}
        className="inputLg"
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value={value}
        autoComplete="off"
        required={true}
      />
      {!isValid && value ? (
        <small className="text-small text-danger ">{errorMsg}</small>
      ) : (
        ""
      )}
    </div>
  );
};
export const Input = ({
  type = "",
  title = "",
  placeholder = "",
  errorMsg = "",
  name = "",
  isValid = false,
  handleChange,
  inputRef,
  value ,
}) => {
  return (
    <div className="flex  flex-col gap-2 w-[320px] md:w-[380px]">
     <p className="text-base dark:text-white text-black">{title}</p>
      <input
        ref={inputRef}
        type={type}
        className="input"
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value={value}
        autoComplete="off"
        required={true}
      />
      {!isValid && value ? (
        <small className="text-small text-danger ">{errorMsg}</small>
      ) : (
        ""
      )}
    </div>
  );
};
export const Textarea = ({
  type = "",
  title = "",
  placeholder = "",
  errorMsg = "",
  name = "",
  isValid = false,
  handleChange,
  inputRef,
  value,
  disabled = false
}) => {
  return (
    <div className="flex  flex-col gap-2 w-[320px]  md:w-[380px]">
     <p className="text-base dark:text-white text-black">{title}</p>
      <textarea
        ref={inputRef}
        type={type}
        className="input min-h-[220px] resize-none"
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value={value}
        autoComplete="off"
        required={true}
        disabled={disabled}
      />
      {!isValid && value ? (
        <small className="text-small text-danger ">{errorMsg}</small>
      ) : (
        ""
      )}
    </div>
  );
};

export const FileInput = () => {
  return (
    <div className="flex items-center justify-between w-full ">
      <InputIcon icon="bi bi-folder" />
      <div className="">
        <input
          type="file"
          className="text-white dark:text-black  w-[0.1px] -z-10 h-[0.1px] input-file"
          accept=".png,.jpeg, .jpg"
        />
        <label htmlFor="" className=" text-black-60 dark:text-white-40">
          Ajouter un photo
        </label>
      </div>
      {/* <div className="flex items-center justify-between w-full">

      </div> */}
    </div>
  );
};
