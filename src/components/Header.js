import logo from "../styles/static/header-logo.png";
import "../styles/css/components/header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <Link to="/">
      <div className="header-logo">
        <img src={logo} alt="Header Logo" />
        <h1>Notomatic</h1>
      </div>
      <p className="header-subtitle">Manage your notes</p>
    </Link>
  </header>
);

export default Header;
