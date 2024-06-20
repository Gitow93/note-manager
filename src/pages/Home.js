import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../api/getNotes";
import NotesList from "../components/Notes/NotesList";

const Home = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.allNotes);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <div>
      <h1>Notes</h1>
      <NotesList notes={notes} />
    </div>
  );
};

export default Home;
