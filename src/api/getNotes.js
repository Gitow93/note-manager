import axios from "axios";
import { fetchNotesSuccess } from "../redux/notesSlice";

export const fetchNotes = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3200/notes");
    dispatch(fetchNotesSuccess(response.data));
  } catch (error) {
    console.error("Failed to fetch notes:", error);
  }
};
