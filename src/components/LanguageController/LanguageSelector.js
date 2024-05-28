import React from "react";
import { useTranslation } from "react-i18next";
import flagSpain from "./icons/flag-spain.png";
import flagUk from "./icons/flag-britain.png";
import "./languageSelector.css";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="language-selector">
      <button onClick={changeLanguage} className="language-button">
        <img
          src={i18n.language === "en" ? flagUk : flagSpain}
          alt={
            i18n.language === "en" ? "Switch to Spanish" : "Switch to English"
          }
        />
      </button>
    </div>
  );
};

export default LanguageSelector;
