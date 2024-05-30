import { Link } from "react-router-dom";
import logo from "./header-logo.png";
import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <Link to="/">
      <div className="header-logo">
        <img src={logo} alt="Notomatic Logo" />
        <h1>Notomatic</h1>
      </div>
      <p className="header-subtitle">{t("logo.subtitle")}</p>
    </Link>
  );
};

export default Logo;
