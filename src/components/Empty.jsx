import EmptyBoxIcon from "./EmptyBoxIcon";

const Empty = ({text}) => {
  return (
    <div className="w-full mx-auto space-y-4">
      <EmptyBoxIcon className="size-[128px] mx-auto" />
      <p className="text-center text-subtitle-3 text-black-40 dark:text-white-40">
        {text}
      </p>
    </div>
  );
};

export default Empty;
