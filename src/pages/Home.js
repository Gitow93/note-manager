import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../redux/notesSlice";
import NotesList from "./../components/Notes/NotesList";

const Home = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const notesStatus = useSelector((state) => state.notes.status);
  const error = useSelector((state) => state.notes.error);

  useEffect(() => {
    if (notesStatus === "idle") {
      dispatch(fetchNotes());
    }
  }, [notesStatus, dispatch]);

  let content;

  if (notesStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (notesStatus === "succeeded") {
    content = <NotesList notes={notes} />;
  } else if (notesStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <div data-testid="home">{content}</div>;
};

export default Home;
