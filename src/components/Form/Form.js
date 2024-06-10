import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../../api/createNote";
import { useTranslation } from "react-i18next";
import "./Form.css";
import TitleInput from "./TitleInput/TitleInput";
import ContentTextarea from "./ContentTextarea/ContentTextarea";
import SubmitButton from "./SubmitButton/SubmitButton";

const Form = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    if (value.length < 3) {
      setTitleError(t("form.title_min_length"));
    } else if (value.length > 20) {
      setTitleError(t("form.title_max_length"));
    } else {
      setTitleError("");
    }
  };

  const handleContentChange = (e) => {
    const value = e.target.value;
    setContent(value);
    if (value.length < 3) {
      setContentError(t("form.content_min_length"));
    } else {
      setContentError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleError || contentError) return;
    dispatch(createNote({ title, content }));
    setTitle("");
    setContent("");
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
