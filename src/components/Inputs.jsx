export const InputLg = ({
  type,
  title,
  placeholder,
  errorMsg = "",
  name = "",
  isValid = false,
  handleChange,
  inputRef,
  value,
}) => {
  return (
    <div className="flex  flex-col gap-2 w-[320px] md:w-[380px]">
      <p className="text-base text-white">{title}</p>
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
  type,
  title,
  placeholder,
  errorMsg = "",
  name = "",
  isValid = false,
  handleChange,
  inputRef,
  value,
}) => {
  return (
    <div className="flex  flex-col gap-2 w-[320px] md:w-[380px]">
      <p className="text-base text-white">{title}</p>
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
