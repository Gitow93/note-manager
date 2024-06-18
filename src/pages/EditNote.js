import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchNoteById, updateNote } from "../api/getNotes";
import { useTranslation } from "react-i18next";
import "../components/Form/Form.css";
import "./EditNote.css";
import TitleInput from "../components/Form/TitleInput/TitleInput";
import ContentTextarea from "../components/Form/ContentTextarea/ContentTextarea";
import SubmitButton from "../components/Form/SubmitButton/SubmitButton";

const EditNote = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const note = useSelector((state) =>
    state.notes.notes.find((note) => note.id === parseInt(id))
  );

  const [title, setTitle] = useState(note ? note.title : "");
  const [content, setContent] = useState(note ? note.content : "");
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
    if (!note) {
      dispatch(fetchNoteById(id));
    }
  }, [dispatch, id, note]);

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

    dispatch(updateNote({ id, title, content }))
      .then(() => {
        setTitleError("");
        setContentError("");
        setAttemptedSubmit(false);
        navigate("/");
      })
      .catch((error) => {
        console.error("Failed to update note:", error);
      });
  };

  return (
    <div className="form-container">
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
    </div>
  );
};

export default EditNote;
