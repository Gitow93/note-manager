import { Link } from "react-router-dom";
import logo from "./header-logo.png";

const Logo = () => (
  <Link to="/">
    <div className="header-logo">
      <img src={logo} alt="Notomatic Logo" />
      <h1>Notomatic</h1>
    </div>
    <p className="header-subtitle">Manage your notes</p>
  </Link>
);

export default Logo;
