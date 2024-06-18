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
    updateNoteSuccess(state, action) {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      if (index !== -1) {
        state.notes[index] = action.payload;
      }
    },
  },
});

export const { fetchNotesSuccess, addNoteSuccess, updateNoteSuccess } =
  notesSlice.actions;

export default notesSlice.reducer;
