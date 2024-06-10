import axios from "axios";
import { addNoteSuccess } from "../redux/notesSlice";

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
