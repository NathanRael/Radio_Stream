import { useRef, useState } from "react";
import { ButtonIcon, Icon, IconLg, InputIcon } from "./Buttons";
import profile from "../assets/images/profile.png";

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
  value,
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
  disabled = false,
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

export const FileInput = ({
  setSelectedFile,
  selectedFile,
  name,
  handleChange,
}) => {
  // const [selectedFile, setSelectedFile] = useState({
  //   name: "",
  //   path: "",
  // });
  const fileRef = useRef(null);

  const handleChangeFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileReader = new FileReader();
      let filePath = "";
      fileReader.readAsDataURL(e.target.files[0]);

      fileReader.addEventListener("load", function () {
        filePath = this.result;
        setSelectedFile({
          name: e.target.files[0].name,
          path: filePath,
        });
        // setImagePath(filePath);
      });
    }
  };

  const handleClick = (ref) => {
    ref.current.click();
  };

  const removeFiles = () => {
    setSelectedFile(null);
    fileRef.current.value = "";
  };

  return (
    <div className="flex items-center justify-between w-full ">
      <InputIcon icon="bi bi-folder" handleClick={() => handleClick(fileRef)} />
      <div className="">
        <input
          ref={fileRef}
          type="file"
          className="text-white dark:text-black hidden  w-[0.1px] -z-10 h-[0.1px] input-file"
          accept=".png,.jpeg, .jpg"
          onChange={(e) => {
            handleChangeFile(e);
            handleChange(e);
          }}
          name={name}
        />
        <label htmlFor="" className=" text-black-60 dark:text-white-40">
          {selectedFile?.name?.substr(-20) || "Ajouter un photo"}
        </label>
      </div>
      <Icon
        color="btn-danger"
        icon="bi bi-trash"
        handleClick={() => removeFiles()}
      />
      {/* <div className="flex items-center justify-between w-full">

      </div> */}
    </div>
  );
};
