import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteCard from "./NoteCard/NoteCard";
import "./NotesList.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fetchNotes } from "../../api/getNotes";
import SearchBar from "./../SearchBar/SearchBar";

const NotesList = () => {
  const { t } = useTranslation("translation");
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.allNotes);
  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  useEffect(() => {
    setFilteredNotes(notes);
  }, [notes]);

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(lowerCaseQuery) ||
        note.content.toLowerCase().includes(lowerCaseQuery) ||
        note.created_at.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredNotes(filtered);
  };

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
      <div className="search-bar-container">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="notes-list-container">
        {filteredNotes.length === 0 ? (
          <div className="noteslist-empty">{t("note-list.no-notes-found")}</div>
        ) : (
          <ul>
            {filteredNotes.map(({ id, title, created_at, content }) => (
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
        )}
      </div>
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NotesList;
