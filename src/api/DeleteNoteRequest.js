import axios from "axios";

const BASE_URL = "http://localhost:3200/notes";

export async function deleteNoteRequest(noteId) {
  return await axios.delete(`${BASE_URL}/${noteId}`)
}

