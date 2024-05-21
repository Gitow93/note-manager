import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/css/components/button.css";

const Button = ({ children, onClick, href }) => (
  <Link to={href} className="button-container">
    <button className="button" onClick={onClick}>
      {children}
    </button>
  </Link>
);

Button.propTypes = {
  onClick: Proptypes.func,
  children: Proptypes.node.isRequired,
};

export default Button;
