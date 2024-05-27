import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import flagSpain from "./icons/flag-spain.png";
import flagUk from "./icons/flag-britain.png";
import LanguageButton from "./LanguageButton";
import "./languageSelector.css";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="language-selector" ref={ref}>
      <button onClick={toggleMenu} className="language-toggle-button">
        <img
          src={i18n.language === "en" ? flagUk : flagSpain}
          alt={
            i18n.language === "en"
              ? t("header.alt-uk-flag")
              : t("header.alt-spain-flag")
          }
        />
      </button>
      {menuOpen && (
        <div className="language-menu">
          {i18n.language !== "en" && (
            <LanguageButton
              id="en"
              onClick={() => changeLanguage("en")}
              img={{ src: flagUk, alt: t("header.alt-uk-flag") }}
            />
          )}
          {i18n.language !== "es" && (
            <LanguageButton
              id="es"
              onClick={() => changeLanguage("es")}
              img={{ src: flagSpain, alt: t("header.alt-spain-flag") }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
