import axios from "axios";
import deleteNoteSuccess from "../redux/notesSlice";

const BASE_URL = "http://localhost:3200/notes";

export const deleteNoteRequest = (noteId) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/${noteId}`);
    dispatch(deleteNoteSuccess(noteId));
  } catch (error) {
    console.error("Failed to delete note:", error);
  }
};
