import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
  },
  reducers: {
    fetchNotesSuccess(state, action) {
      state.notes = action.payload;
    },
    addNoteSuccess(state, action) {
      state.notes.push(action.payload);
    },
  },
});

export const { fetchNotesSuccess, addNoteSuccess } = notesSlice.actions;

export default notesSlice.reducer;
