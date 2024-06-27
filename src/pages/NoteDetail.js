import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector} from 'react-redux'

import { useTranslation } from "react-i18next";
import "./NoteDetail.css";
import trashBlack from "./icons/trash-black.png";
import pencil from "./icons/pencil.png";
import DeleteButton from "../components/DeleteButton/DeleteButton";

const NoteDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams()
  const navigate = useNavigate();

  //AQUI NO ES NECESARIO QUE HAGAS OTRO FETCH PORQUE LA INFORMACIÓN QUE NECESITAS LA TIENES EN EL ESTADO
 
  const note = useSelector(
    store => store.notes.allNotes.find(note => note.id === id),
  )

   // NO HABRÁ ERROR PORQUE NO SE HACE LLAMADA, TAN SOLO HAY QUE EVALUAR SI EL ID DE LA URL EXISTE EN EL ESTADO O NO
  // SI EXISTE SE MUESTRA EL DETALLE, SI NO, UNA PÁGINA "NOT FOUND"

  if (!note) {
    return <h1>Page not found</h1>;
  }  

  return (
    <div className="note-detail-container">
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
        <DeleteButton
          noteId={id}
          imgSrc={trashBlack}
          imgAlt={t("note-detail.delete")}
          className="ic-trash-black"
        />
      </div>
    </div>
  </div>
  );
};

export default NoteDetail;
