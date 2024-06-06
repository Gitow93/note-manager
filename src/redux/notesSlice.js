import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNotes = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3200/notes");
    dispatch(fetchNotesSuccess(response.data));
  } catch (error) {
    console.error("Failed to fetch notes:", error);
  }
};

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
  },
  reducers: {
    fetchNotesSuccess(state, action) {
      state.notes = action.payload;
    },
  },
});

export const { fetchNotesSuccess } = notesSlice.actions;

export default notesSlice.reducer;
