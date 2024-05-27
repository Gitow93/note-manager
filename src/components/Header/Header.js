import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import LanguageSelector from "../LanguageController/LanguageSelector";
import { useTranslation } from "react-i18next";
import "./header.css";

const Header = () => {
  const { t } = useTranslation(["translation"]);

  return (
    <header className="header">
      <Logo />
      <Button href="/create-note">{t("header.create-button")}+</Button>
      <LanguageSelector />
    </header>
  );
};

export default Header;
