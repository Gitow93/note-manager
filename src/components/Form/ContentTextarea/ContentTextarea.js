import React from "react";
import { useTranslation } from "react-i18next";

const ContentTextarea = ({ content, handleContentChange, contentError }) => {
  const { t } = useTranslation();

  return (
    <div className="content-container">
      <label>{t("form.content")}</label>
      <textarea
        className="textarea-container"
        value={content}
        onChange={handleContentChange}
        rows="5"
      />
      {contentError && <p className="error-message">{contentError}</p>}
    </div>
  );
};

export default ContentTextarea;
