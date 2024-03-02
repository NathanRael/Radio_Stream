const Badge = ({ text, color = "badge-black" }) => {
  return <div className={`${color}  badge`}>{text}</div>;
};

export default Badge;
