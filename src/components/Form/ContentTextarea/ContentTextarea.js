import React from "react";
import { useTranslation } from "react-i18next";

const ContentTextarea = ({ content, handleContentChange, contentError }) => {
  const { t } = useTranslation();

  return (
    <div className="content-container">
      <label htmlFor="content-textarea">{t("form.content")}</label>
      <textarea
        id="content-textarea"
        className="textarea-container"
        value={content}
        onChange={handleContentChange}
        maxLength="250"
      />
      {contentError && <p className="error-message">{contentError}</p>}
    </div>
  );
};

export default ContentTextarea;
