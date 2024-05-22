import { Link } from "react-router-dom";
import logo from "../styles/static/header-logo.png";

const Logo = () => (
  <Link to="/">
    <div className="header-logo">
      <img src={logo} alt="Header Logo" />
      <h1>Notomatic</h1>
    </div>
    <p className="header-subtitle">Manage your notes</p>
  </Link>
);

export default Logo;
