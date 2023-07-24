import PropTypes from "prop-types";
function Icon(props) {
  const { children, className, size = "default", fill = false } = props;
  const sizeMap = {
    small: "text-sm-icon",
    default: "text-base-icon",
    large: "text-lg-con",
  };
  return (
    <span
      className={`material-symbols-outlined ${className} ${sizeMap[size]} ${
        fill ? "material-symbols-filled" : ""
      }`}
    >
      {children}
    </span>
  );
}
Icon.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.string,
  fill: PropTypes.bool,
};
export default Icon;
