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
  },
});

export const { fetchNotesSuccess } = notesSlice.actions;

export default notesSlice.reducer;
