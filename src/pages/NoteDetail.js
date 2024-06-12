import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "./NoteDetail.css";
import trashBlack from "./icons/trash-black.png";
import pencil from "./icons/pencil.png";

const NoteDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`http://localhost:3200/notes/${id}`);
        setNote(response.data);
      } catch (error) {
        setError(t("note-detail.note_not_found"));
      }
    };
    fetchNote();
  }, [id, t]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!note) {
    return <div>{t("note-detail.loading")}</div>;
  }

  return (
    <div className="note-detail-container">
      <h1>{t("note-detail.note_detail")}</h1>
      <div className="note-detail">
        <div className="note-detail-header">
          <h2>{note.title}</h2>
          <p>{note.created_at}</p>
        </div>
        <p>{note.content}</p>
        <div className="note-detail-actions">
          <button onClick={() => navigate(`/edit-note/${id}`)}>
            <img
              className="ic-pencil"
              src={pencil}
              alt={t("note-detail.edit")}
            />
          </button>
          <button>
            {" "}
            <img
              className="ic-trash-black"
              src={trashBlack}
              alt={t("note-detail.delete")}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteDetail;
