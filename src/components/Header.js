import logo from "../styles/static/header-logo.png";
import Button from "./Button";
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
    <Button href="/create-note">New Note +</Button>
  </header>
);

export default Header;
