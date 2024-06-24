import React from "react";
import NoteCard from "./NoteCard/NoteCard";
import "./NotesList.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotesList = ({ notes }) => {
  const { t } = useTranslation("translation");

  if (!Array.isArray(notes) || notes.length === 0) {
    return (
      <div className="noteslist-empty">
        {t(`note-list.empty`)}
        <Link to="/create-note">{t(`note-list.link`)}</Link>
      </div>
    );
  }

  return (
    <div className="notes-list">
      <div className="notes-list-container">
        <ul>
          {notes.map(({ id, title, created_at, content }) => (
            <li key={id}>
              <Link to={`/note/${id}`}>
                <NoteCard
                  id={id}
                  title={title}
                  created_at={created_at}
                  content={content}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NotesList;
