import axios from "axios";

const BASE_URL = "http://localhost:3200/notes";

export const getNotes = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
};
