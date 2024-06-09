import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../../api/createNote";
import { useTranslation } from "react-i18next";

const CreateNoteForm = () => {
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
      setTitleError(t("title_min_length"));
    } else if (value.length > 20) {
      setTitleError(t("title_max_length"));
    } else {
      setTitleError("");
    }
  };

  const handleContentChange = (e) => {
    const value = e.target.value;
    setContent(value);
    if (value.length < 3) {
      setContentError(t("content_min_length"));
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
      <div>
        <label>{t("title")}</label>
        <input type="text" value={title} onChange={handleTitleChange} />
        {titleError && <p>{titleError}</p>}
      </div>
      <div>
        <label>{t("content")}</label>
        <textarea value={content} onChange={handleContentChange} rows="5" />
        {contentError && <p>{contentError}</p>}
      </div>
      <button type="submit" disabled={titleError || contentError}>
        {t("save_note")}
      </button>
    </form>
  );
};

export default CreateNoteForm;
