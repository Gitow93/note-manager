import Button from "./Button";
import Logo from "./Logo";
import "../styles/css/components/header.css";

const Header = () => (
  <header className="header">
    <Logo />
    <Button href="/create-note">New Note +</Button>
  </header>
);

export default Header;
