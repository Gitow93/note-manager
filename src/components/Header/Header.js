import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create-note");
  };

  return (
    <header className="header">
      <Logo />
      <Button onClick={handleClick}>New Note +</Button>
    </header>
  );
};

export default Header;
