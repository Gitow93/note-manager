import React from "react";
import NoteCard from "./NoteCard/NoteCard";
import "./NotesList.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NotesList = ({ notes }) => {
  if (!Array.isArray(notes) || notes.length === 0) {
    return <div>No notes available</div>;
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
