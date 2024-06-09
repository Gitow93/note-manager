import axios from "axios";
import { addNoteSuccess } from "../redux/notesSlice";

export const createNote = (note) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3200/notes", note);
    dispatch(addNoteSuccess(response.data));
  } catch (error) {
    console.error("Failed to create note:", error);
  }
};
