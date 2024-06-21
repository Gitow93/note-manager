import React, { useEffect } from "react";
import Form from "../components/Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchNoteById, updateNote } from "../api/getNotes";
import { useTranslation } from "react-i18next";
import "./EditNote.css";

const EditNote = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentNote = useSelector((state) => state.notes.currentNote);

  useEffect(() => {
    dispatch(fetchNoteById(id));
  }, [dispatch, id]);

  const handleUpdateNote = (updatedNote) => {
    dispatch(updateNote({ ...updatedNote, id }))
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Failed to update note:", error);
      });
  };

  return (
    <div className="form-container">
      <Form noteData={currentNote} onSubmit={handleUpdateNote} />
    </div>
  );
};

export default EditNote;
