import PropTypes from "prop-types";
import "./button.css";

const Button = ({ children, onClick }) => {
  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button className="button-container" onClick={handleClick}>
      <span className="button">{children}</span>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
