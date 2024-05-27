import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "../styles/css/components/button.css";

const Button = ({ children, onClick, href }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    navigate(href);
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
  href: PropTypes.string.isRequired,
};

export default Button;
