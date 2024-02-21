export const Input = ({
  type,
  title,
  placeholder,
  error = "",
  name = "",
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
      />
      <small className="text-small text-danger hidden">{error}</small>
    </div>
  );
};
