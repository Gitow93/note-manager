import axios from "axios";
import {
  fetchNotesSuccess,
  addNoteSuccess,
  updateNoteSuccess,
} from "../redux/notesSlice";

export const fetchNotes = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3200/notes");
    dispatch(fetchNotesSuccess(response.data));
  } catch (error) {
    console.error("Failed to fetch notes:", error);
  }
};

export const fetchNoteById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3200/notes/${id}`);
    dispatch(fetchNotesSuccess([response.data]));
  } catch (error) {
    console.error("Failed to fetch note:", error);
  }
};

export const createNote = (note) => async (dispatch) => {
  try {
    const newNote = {
      ...note,
      created_at: new Date().toLocaleDateString(),
    };
    const response = await axios.post("http://localhost:3200/notes", newNote);
    dispatch(addNoteSuccess(response.data));
  } catch (error) {
    console.error("Failed to create note:", error);
  }
};

export const updateNote = (note) => async (dispatch) => {
  try {
    const response = await axios.put(
      `http://localhost:3200/notes/${note.id}`,
      note
    );
    dispatch(updateNoteSuccess(response.data));
  } catch (error) {
    console.error("Failed to update note:", error);
  }
};
