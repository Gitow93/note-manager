import React from "react";
import { useTranslation } from "react-i18next";

const SubmitButton = ({ titleError, contentError }) => {
  const { t } = useTranslation();

  return (
    <button
      className="submit-button"
      type="submit"
      disabled={titleError || contentError}
    >
      {t("form.save_note")}
    </button>
  );
};

export default SubmitButton;
