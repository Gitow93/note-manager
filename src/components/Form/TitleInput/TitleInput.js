import React from "react";
import { useTranslation } from "react-i18next";

const TitleInput = ({ title, handleTitleChange, titleError }) => {
  const { t } = useTranslation();

  return (
    <div className="title-container">
      <label htmlFor="title-input">{t("form.title")}</label>
      <input
        id="title-input"
        className="title-input"
        type="text"
        value={title}
        onChange={handleTitleChange}
      />
      {titleError && <p className="error-message">{titleError}</p>}
    </div>
  );
};

export default TitleInput;
