import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3200",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getNotes = async () => {
  const response = await apiClient.get("/notes");
  return response.data;
};
