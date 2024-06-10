import React from "react";
import Form from "../components/CreateNoteForm/Form";
import { useTranslation } from "react-i18next";
import "./CreateNote.css";

const CreateNote = () => {
  const { t } = useTranslation();
  return (
    <div className="form-container">
      <h1>{t("form.heading")}</h1>
      <Form />
    </div>
  );
};

export default CreateNote;
