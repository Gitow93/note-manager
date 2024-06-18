import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import "./Form.css";
import TitleInput from "./TitleInput/TitleInput";
import ContentTextarea from "./ContentTextarea/ContentTextarea";
import SubmitButton from "./SubmitButton/SubmitButton";

const Form = ({ initialValues = { title: "", content: "" }, onSubmit }) => {
  const { t, i18n } = useTranslation();
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

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
    setTitleError(validateTitle(title, attemptedSubmit));
    setContentError(validateContent(content, attemptedSubmit));
  }, [
    i18n.language,
    title,
    content,
    validateTitle,
    validateContent,
    attemptedSubmit,
  ]);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    setTitleError(validateTitle(value, attemptedSubmit));
  };

  const handleContentChange = (e) => {
    const value = e.target.value;
    setContent(value);
    setContentError(validateContent(value, attemptedSubmit));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    const newTitleError = validateTitle(title, true);
    const newContentError = validateContent(content, true);

    setTitleError(newTitleError);
    setContentError(newContentError);

    if (newTitleError || newContentError) {
      return;
    }

    onSubmit({ title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TitleInput
        title={title}
        handleTitleChange={handleTitleChange}
        titleError={titleError}
      />
      <ContentTextarea
        content={content}
        handleContentChange={handleContentChange}
        contentError={contentError}
      />
      <SubmitButton titleError={titleError} contentError={contentError} />
    </form>
  );
};

export default Form;
