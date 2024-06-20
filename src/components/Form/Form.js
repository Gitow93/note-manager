import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import "./Form.css";
import TitleInput from "./TitleInput/TitleInput";
import ContentTextarea from "./ContentTextarea/ContentTextarea";
import SubmitButton from "./SubmitButton/SubmitButton";

const Form = ({ noteData = { title: "", content: "" }, onSubmit }) => {
  const { t, i18n } = useTranslation();

  const [infoToUpdate, setInfoToUpdate] = useState({
    title: "",
    content: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    content: "",
  });

  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  useEffect(() => {
    setInfoToUpdate(noteData);
  }, [noteData]);

  const validateTitle = useCallback(
    (value, attemptSubmit) => {
      if (value === "") {
        return attemptSubmit ? t("form.required") : "";
      } else if (value.length < 3) {
        return t("form.title_min_length");
      } else if (value.length > 20) {
        return t("form.title_max_length");
      }
      return "";
    },
    [t]
  );

  const validateContent = useCallback(
    (value, attemptSubmit) => {
      if (value === "") {
        return attemptSubmit ? t("form.required") : "";
      } else if (value.length < 3) {
        return t("form.content_min_length");
      }
      return "";
    },
    [t]
  );

  useEffect(() => {
    setErrors({
      title: validateTitle(infoToUpdate.title, attemptedSubmit),
      content: validateContent(infoToUpdate.content, attemptedSubmit),
    });
  }, [i18n.language]);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setInfoToUpdate({ ...infoToUpdate, title: value });
    setErrors({ ...errors, title: validateTitle(value, attemptedSubmit) });
  };

  const handleContentChange = (e) => {
    const value = e.target.value;
    setInfoToUpdate({ ...infoToUpdate, content: value });
    setErrors({ ...errors, content: validateContent(value, attemptedSubmit) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    const newTitleError = validateTitle(infoToUpdate.title, true);
    const newContentError = validateContent(infoToUpdate.content, true);

    setErrors({ title: newTitleError, content: newContentError });

    if (newTitleError || newContentError) {
      return;
    }

    onSubmit({ title: infoToUpdate.title, content: infoToUpdate.content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TitleInput
        title={infoToUpdate.title}
        handleTitleChange={handleTitleChange}
        titleError={errors.title}
      />
      <ContentTextarea
        content={infoToUpdate.content}
        handleContentChange={handleContentChange}
        contentError={errors.content}
      />
      <SubmitButton titleError={errors.title} contentError={errors.content} />
    </form>
  );
};

export default Form;
