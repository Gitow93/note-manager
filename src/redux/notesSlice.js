import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    allNotes: [],
    error: null,
  },
  reducers: {
    fetchNotesSuccess(state, action) {
      state.allNotes = action.payload;
    },
    fetchCurrentNoteSuccess(state, action) {
      state.currentNote = action.payload;
    },
    addNoteSuccess(state, action) {
      state.allNotes.push(action.payload);
    },
    updateNoteSuccess(state, action) {
      const index = state.allNotes.findIndex(
        (note) => note.id === action.payload.id
      );
      if (index !== -1) {
        state.allNotes[index] = action.payload;
      }
    },
    deleteNoteSuccess(state, action) {
      state.allNotes = state.allNotes.filter(
        (note) => note.id !== action.payload
      );
    },
  },
});

export const {
  fetchNotesSuccess,
  addNoteSuccess,
  updateNoteSuccess,
  fetchCurrentNoteSuccess,
  deleteNoteSuccess,
} = notesSlice.actions;

export default notesSlice.reducer;
