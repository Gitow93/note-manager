import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../api/getNotes";
import NotesList from "../components/Notes/NotesList";
import "./Home.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.allNotes);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <div className="home-layout">
      <NotesList notes={notes} />
    </div>
  );
};

export default Home;
