import React from "react";
import "./languageButton.css";

const LanguageButton = ({ id, onClick, img }) => (
  <button id={id} onClick={onClick} className="language-button">
    <img src={img.src} alt={img.alt} />
  </button>
);

export default LanguageButton;
