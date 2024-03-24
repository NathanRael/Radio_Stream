const Notification = ({ value }) => {
  return (
    <div className="absolute top-[-8px] right-0 rounded-full px-2 py-1 min-w-6 flex items-center justify-center   text-small-2 bg-danger text-white">
      {value}
    </div>
  );
};

export default Notification;
