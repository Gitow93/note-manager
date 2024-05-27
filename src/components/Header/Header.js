import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "../LanguageController/LanguageSelector";
import { useTranslation } from "react-i18next";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/create-note");
  };
  const { t } = useTranslation(["translation"]);

  return (
    <header className="header">
      <Logo />
      <Button onClick={handleClick}>{t("header.create-button")} +</Button>
      <LanguageSelector />
    </header>
  );
};

export default Header;
