import React from "react";
import Form from "../components/Form/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreateNoteRequest } from "../api/CreateNoteRequest";
import { useTranslation } from "react-i18next";
import "./CreateNote.css";

const CreateNote = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateNote = (note) => {
    dispatch(CreateNoteRequest(note))
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Failed to create note:", error);
      });
  };

  return (
    <div className="form-container">
      <h1>{t("form.heading")}</h1>
      <Form
        initialValues={{ title: "", content: "" }}
        onSubmit={handleCreateNote}
      />
    </div>
  );
};

export default CreateNote;
