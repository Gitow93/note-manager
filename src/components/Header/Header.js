import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import "./header.css";

const Header = () => (
  <header className="header">
    <Logo />
    <Button href="/create-note">New Note +</Button>
  </header>
);

export default Header;
